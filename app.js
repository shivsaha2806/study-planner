// app.js — MyStudyPlanner
// All screen renderers, session timer, gamification logic,
// Excuse Buster, notifications, Share with Claude, settings.

import { db, getUserData, getProgressData, getRewardsData, getSessionLogs } from './firebase.js';
import { currentUser, closeSettingsModal, navigate } from './auth.js';
import { CURRICULUM } from './curriculum.js';
import {
  getTrackForToday,
  getTrackForDay,
  getNextSubtopic,
  getTrackProgress,
  getTopicProgress,
  countCompletedTopics,
  isSubtopicComplete,
  isTopicComplete,
  getWeekPlan,
  getStreakData,
  getHeatmapData,
  formatDuration,
  SESSION_DURATIONS,
  DEFAULT_SCHEDULE
} from './scheduler.js';

// ─── Constants ────────────────────────────────────────────────

const TRACK_COLORS = {
  frontend: '#c4b5fd',
  ai:       '#a8d4f5',
  java:     '#fda4af'
};

const TRACK_NAMES = {
  frontend: 'Frontend',
  ai:       'AI Engineer',
  java:     'Java'
};

const EXCUSE_MESSAGES = [
  "You said this exact same thing yesterday. And the day before. Seeing a pattern?",
  "3:05 PM became 4 PM became 'tomorrow' became 'next month'. We both know how this ends.",
  "Oh you thought it was 3:06 PM? Study starts next hour now? Classic you.",
  "It's okay, it's already the end of the month. Next month ke 1 tarikh se pakka. Sure.",
  "Your future self at that interview is begging you to stop doing this.",
  "The job isn't going to wait for you to feel ready. Nobody ever feels ready.",
  "You have 0 hours of studying done today. 0. Not even 5 minutes.",
  "Somewhere right now someone with the same goal as you is already 2 hours deep.",
  "You didn't come this far to sit here and negotiate with yourself again.",
  "The excuse is always valid. The result is never what you want. Pick one.",
  "Time spent deciding whether to study = time you could have been studying.",
  "You opened this app. That means part of you wants to study. Listen to that part.",
  "Tomorrow Shivangi is going to be so grateful that today Shivangi didn't give up.",
  "Your interview deadline doesn't care about your mood today.",
  "Every single person who got that job also had days they didn't want to study. They studied anyway."
];

const BADGES = [
  { id: 'first_session',  name: 'First Step',       emoji: '👣', condition: 'Complete first session' },
  { id: 'first_topic',    name: 'Topic Slayer',      emoji: '⚔️', condition: 'Complete first full topic' },
  { id: 'streak_7',       name: '7-Day Warrior',     emoji: '🔥', condition: 'Study 7/7 days in a week' },
  { id: 'streak_30',      name: 'Monthly Grind',     emoji: '💪', condition: 'Study 25+ days in a month' },
  { id: 'frontend_50',    name: 'Half Way There',    emoji: '🌗', condition: 'Frontend 50% complete' },
  { id: 'frontend_100',   name: 'Frontend Beast',    emoji: '🦁', condition: 'Frontend 100% complete' },
  { id: 'ai_50',          name: 'AI Curious',        emoji: '🤖', condition: 'AI track 50% complete' },
  { id: 'night_owl',      name: 'Night Owl',         emoji: '🦉', condition: 'Session starting after 11 PM' },
  { id: 'early_bird',     name: 'Early Bird',        emoji: '🌅', condition: 'Session starting before 8 AM' },
  { id: 'just_5_stayed',  name: 'Just 5 Mins',       emoji: '⏱️', condition: 'Used Just 5 Mins + studied 30+ mins' },
  { id: 'revision_hero',  name: 'Revision Hero',     emoji: '📖', condition: '10 revision subtopics completed' },
  { id: 'points_1000',    name: 'Points Hoarder',    emoji: '💰', condition: 'Accumulate 1000 points' },
  { id: 'points_5000',    name: 'Unstoppable',       emoji: '🚀', condition: 'Accumulate 5000 points' }
];

// ─── App State ────────────────────────────────────────────────
// In-memory cache of Firestore data, refreshed on each screen render.

const state = {
  user: null,
  userData: null,
  progressData: null,
  rewardsData: null,
  sessionLogs: [],

  // Navigation history for back button
  navHistory: [],
  previousScreen: null,

  // Active session
  session: {
    active: false,
    paused: false,
    just5Mins: false,
    track: null,
    topicId: null,
    topicName: null,
    subtopicId: null,
    subtopicName: null,
    subSubTopicId: null,
    subSubTopicName: null,
    durationMins: 0,
    startTime: null,
    elapsed: 0,           // seconds elapsed
    timerInterval: null,
    idleTimer: null,
    lastActivity: Date.now(),
    doneSessions: 0,      // sub-subtopics marked done this session
    pointsEarned: 0,
    jarEarned: 0,
    sessionBadges: []
  },

  // Topics screen state
  topics: {
    activeTrack: 'frontend',
    activeView: 'tree',          // 'tree' | 'path'
    expandedTopics: new Set(),
    expandedSubtopics: new Set(),
    editorOpen: false,
    editorSubtopicKey: null,     // 'trackId::topicId::subtopicId'
  }
};

// ─── Data Loading ─────────────────────────────────────────────

async function loadAllData() {
  const uid = getCurrentUid();
  if (!uid) return;
  try {
    const [userData, progressData, rewardsData, sessionLogs] = await Promise.all([
      getUserData(uid),
      getProgressData(uid),
      getRewardsData(uid),
      getSessionLogs(uid)
    ]);
    state.userData    = userData;
    state.progressData = progressData;
    state.rewardsData  = rewardsData;
    state.sessionLogs  = sessionLogs;
  } catch (err) {
    console.error('Failed to load data:', err);
  }
}

function getCurrentUid() {
  // auth.js exports currentUser but it's a let that changes.
  // We read it from Firebase auth directly.
  const { auth } = window.__msp_firebase || {};
  if (auth?.currentUser) return auth.currentUser.uid;
  // fallback — check state
  return state.user?.uid || null;
}

// ─── Screen Router ────────────────────────────────────────────

window.addEventListener('screenChanged', async ({ detail }) => {
  const { hash } = detail;
  await loadAllData();
  renderScreen(hash);
  updateBackButton(hash);
});

window.addEventListener('userLoggedIn', ({ detail }) => {
  state.user = detail;
});

// ─── Back Button Logic ────────────────────────────────────────

function updateBackButton(hash) {
  const backBtn = document.getElementById('back-btn');
  if (!backBtn) return;
  // Show back button on all screens except dashboard
  const showBack = hash && hash !== '#dashboard' && hash !== '#login';
  backBtn.classList.toggle('visible', showBack);
}

// Wire back button
document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // If in active session, confirm before leaving
      if (state.session.active) {
        if (!confirm('Leave active session? Timer will stop.')) return;
        clearInterval(state.session.timerInterval);
        clearInterval(state.session.idleTimer);
        state.session.active = false;
        state.session.paused = false;
      }
      navigate('#dashboard');
    });
  }
});

function renderScreen(hash) {
  switch (hash) {
    case '#dashboard': renderDashboard(); break;
    case '#session':   renderSessionScreen(); break;
    case '#topics':    renderTopicsScreen(); break;
    case '#week':      renderWeekPlanner(); break;
    case '#history':   renderHistory(); break;
    case '#rewards':   renderRewards(); break;
  }
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 1 — DASHBOARD
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderDashboard() {
  const { progressData, userData, sessionLogs, rewardsData } = state;
  if (!progressData || !userData) return;

  // Greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const name = userData.name?.split(' ')[0] || 'Shivangi';
  const greetingEl = document.getElementById('greeting');
  if (greetingEl) {
    greetingEl.innerHTML = `<span class="greeting-text">${greeting}, ${name} 🌙</span>
      <span class="greeting-date">${new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</span>`;
  }

  // Focus Card
  const track = getTrackForToday(userData.weeklyOverride || {});
  const nextSub = getNextSubtopic(track, progressData);
  const focusCard = document.getElementById('focus-card');
  if (focusCard) {
    focusCard.style.borderLeft = `4px solid ${TRACK_COLORS[track]}`;
    const badge = document.getElementById('focus-track-badge');
    if (badge) {
      badge.textContent = TRACK_NAMES[track];
      badge.style.background = TRACK_COLORS[track] + '22';
      badge.style.color = TRACK_COLORS[track];
    }
    const subName = document.getElementById('focus-subtopic-name');
    if (subName) {
      subName.textContent = nextSub
        ? `${nextSub.topicName} → ${nextSub.subtopicName}`
        : 'All done for this track! 🎉';
    }
  }

  // Start buttons
  const startBtn = document.getElementById('start-session-btn');
  const just5Btn = document.getElementById('just5-btn');
  if (startBtn) {
    startBtn.onclick = () => {
      startSessionSetup(track, nextSub, false);
    };
    startBtn.style.background = TRACK_COLORS[track];
    startBtn.style.color = '#0f0f0f';
  }
  if (just5Btn) {
    just5Btn.onclick = () => startSessionSetup(track, nextSub, true);
  }

  // Progress bars
  const progressBarsEl = document.getElementById('track-progress-bars');
  if (progressBarsEl) {
    progressBarsEl.innerHTML = '';
    for (const trackId of ['frontend', 'ai', 'java']) {
      const prog = getTrackProgress(trackId, progressData);
      const bar = document.createElement('div');
      bar.className = 'progress-bar-item';
      bar.innerHTML = `
        <div class="progress-bar-header">
          <span class="progress-track-name" style="color:${TRACK_COLORS[trackId]}">${TRACK_NAMES[trackId]}</span>
          <span class="progress-percent">${prog.percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${prog.percent}%;background:${TRACK_COLORS[trackId]}"></div>
        </div>
        <div class="progress-current-topic">${prog.currentTopicName || 'Complete!'} ${prog.currentSubtopicName ? '→ ' + prog.currentSubtopicName : ''}</div>
      `;
      progressBarsEl.appendChild(bar);
    }
  }

  // Streak
  const streakData = getStreakData(sessionLogs);
  const streakEl = document.getElementById('streak-widget');
  if (streakEl) {
    const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const dots = streakData.thisWeek.map((studied, i) => `
      <div class="streak-dot-wrapper">
        <div class="streak-dot ${studied ? 'studied' : ''}"></div>
        <span class="streak-day-label">${DAY_LABELS[i]}</span>
      </div>
    `).join('');
    streakEl.innerHTML = `
      <div class="streak-label">${streakData.daysStudied}/7 days this week</div>
      <div class="streak-dots">${dots}</div>
    `;
  }

  // Points
  const pointsEl = document.getElementById('points-widget');
  if (pointsEl) {
    const points = userData.totalPoints || 0;
    const level = points < 500 ? 'Beginner' : points < 2000 ? 'Rising' : points < 5000 ? 'Consistent' : 'Unstoppable';
    pointsEl.innerHTML = `
      <div class="points-value">${points.toLocaleString()} pts</div>
      <div class="points-level">${level}</div>
      <div class="jar-mini">🏺 ₹${(rewardsData?.jarBalance || 0).toLocaleString()}</div>
    `;
  }

  // Mini Heatmap Strip (last 3 months ~13 weeks)
  renderMiniHeatmap(sessionLogs);

  // Week Strip
  renderWeekStrip(userData.weeklyOverride || {}, progressData, sessionLogs);

  // Recent badges
  renderRecentBadges(userData.badges || []);
}

function renderMiniHeatmap(sessionLogs) {
  const el = document.getElementById('heatmap-strip');
  if (!el) return;

  const heatmapData = getHeatmapData(sessionLogs);
  const today = new Date();
  const weeks = 13;
  const rows = 7;

  let html = '<div class="mini-heatmap">';
  for (let w = weeks - 1; w >= 0; w--) {
    html += '<div class="mini-heatmap-col">';
    for (let d = 0; d < rows; d++) {
      const date = new Date(today);
      date.setDate(today.getDate() - (w * 7) - (6 - d));
      const key = date.toDateString();
      const mins = heatmapData[key] || 0;
      const intensity = mins === 0 ? 0 : mins < 30 ? 1 : mins < 60 ? 2 : mins < 120 ? 3 : 4;
      html += `<div class="mini-heatmap-cell intensity-${intensity}" title="${date.toLocaleDateString()} — ${formatDuration(mins)}"></div>`;
    }
    html += '</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

function renderWeekStrip(weeklyOverride, progressData, sessionLogs) {
  const el = document.getElementById('week-strip');
  if (!el) return;

  const weekPlan = getWeekPlan(weeklyOverride, progressData, sessionLogs);
  el.innerHTML = weekPlan.map(day => `
    <div class="week-strip-day ${day.isToday ? 'today' : ''} ${day.isCompleted ? 'completed' : ''}">
      <div class="week-day-name">${day.dayName}</div>
      <div class="week-day-pill" style="background:${day.trackColor}22;color:${day.trackColor};border:1px solid ${day.trackColor}44">
        ${TRACK_NAMES[day.track]}
      </div>
      <div class="week-day-subtopic">${day.subtopicName}</div>
      ${day.isCompleted ? '<div class="week-done-check">✓</div>' : ''}
    </div>
  `).join('');
}

function renderRecentBadges(earnedBadgeIds) {
  const el = document.getElementById('recent-badges');
  if (!el) return;

  const earned = BADGES.filter(b => earnedBadgeIds.includes(b.id)).slice(-3);
  if (earned.length === 0) {
    el.innerHTML = '<div class="no-badges">No badges yet — start a session to earn your first 🏅</div>';
    return;
  }
  el.innerHTML = '<div class="recent-badges-label">Recent Badges</div>' +
    earned.map(b => `
      <div class="badge-chip">
        <span class="badge-emoji">${b.emoji}</span>
        <span class="badge-name">${b.name}</span>
      </div>
    `).join('');
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 2 — SESSION / TIMER
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderSessionScreen() {
  const { progressData, userData } = state;
  if (!progressData || !userData) return;

  // If session already active, just refresh display
  if (state.session.active) {
    updateSessionDisplay();
    return;
  }

  // Show session setup (pick duration)
  showSessionSetup();
}

function showSessionSetup() {
  const { progressData, userData } = state;
  const track = getTrackForToday(userData?.weeklyOverride || {});
  const nextSub = getNextSubtopic(track, progressData);

  const content = document.getElementById('session-content');
  if (!content) return;

  // Replace content with setup UI
  content.innerHTML = `
    <div class="session-setup">
      <div class="setup-track-badge" style="color:${TRACK_COLORS[track]};border-color:${TRACK_COLORS[track]}44">
        ${TRACK_NAMES[track]}
      </div>
      <div class="setup-subtopic-name">${nextSub ? nextSub.subtopicName : 'Track complete!'}</div>
      <div class="setup-topic-name">${nextSub ? nextSub.topicName : ''}</div>

      <div class="setup-override">
        <button class="btn-ghost btn-sm" id="override-track-btn">Change track ↕</button>
        <div class="override-track-options hidden" id="override-track-options">
          ${['frontend', 'ai', 'java'].map(t =>
            `<button class="override-option ${t === track ? 'active' : ''}" data-track="${t}" style="border-color:${TRACK_COLORS[t]};color:${TRACK_COLORS[t]}">${TRACK_NAMES[t]}</button>`
          ).join('')}
        </div>
      </div>

      <div class="setup-duration-label">How long today?</div>
      <div class="setup-duration-buttons">
        ${SESSION_DURATIONS.map(d => `
          <button class="duration-btn" data-value="${d.value}">${d.label}</button>
        `).join('')}
      </div>
      <div class="custom-duration-input hidden" id="custom-duration-wrap">
        <input type="number" id="custom-duration-input" placeholder="mins" min="5" max="480">
        <button id="custom-duration-confirm">Start</button>
      </div>

      <div class="setup-just5">
        <button class="btn-just5" id="just5-session-btn">⏱ Just 5 Mins</button>
        <span class="just5-hint">No pressure — extends +5 min each Mark Done</span>
      </div>
    </div>
  `;

  // Wire override track buttons
  const overrideBtn = document.getElementById('override-track-btn');
  const overrideOptions = document.getElementById('override-track-options');
  if (overrideBtn && overrideOptions) {
    overrideBtn.onclick = () => overrideOptions.classList.toggle('hidden');
    overrideOptions.querySelectorAll('.override-option').forEach(btn => {
      btn.onclick = () => {
        const newTrack = btn.dataset.track;
        const newSub = getNextSubtopic(newTrack, progressData);
        state.session.track = newTrack;
        showSessionSetup(); // re-render with new track
      };
    });
  }

  // Duration buttons
  content.querySelectorAll('.duration-btn').forEach(btn => {
    btn.onclick = () => {
      const val = btn.dataset.value;
      if (val === 'custom') {
        document.getElementById('custom-duration-wrap')?.classList.remove('hidden');
      } else {
        startSessionSetup(track, getNextSubtopic(track, progressData), false, parseInt(val));
      }
    };
  });

  // Custom confirm
  const customConfirm = document.getElementById('custom-duration-confirm');
  if (customConfirm) {
    customConfirm.onclick = () => {
      const mins = parseInt(document.getElementById('custom-duration-input')?.value);
      if (mins >= 5) startSessionSetup(track, getNextSubtopic(track, progressData), false, mins);
    };
  }

  // Just 5 Mins
  const just5Btn = document.getElementById('just5-session-btn');
  if (just5Btn) {
    just5Btn.onclick = () => startSessionSetup(track, getNextSubtopic(track, progressData), true);
  }

  // Update header
  const header = document.getElementById('session-track-header');
  if (header) {
    header.textContent = '';
    header.style.background = 'transparent';
  }
}

function startSessionSetup(track, nextSub, just5Mins, durationMins) {
  if (!nextSub) {
    showToast('This track is complete! Pick another track.', 'info');
    return;
  }

  // Navigate to session screen
  navigate('#session');   // ← just this, nothing else

  // Set up session state
  state.session = {
    ...state.session,
    active: true,
    paused: false,
    just5Mins,
    track,
    topicId: nextSub.topicId,
    topicName: nextSub.topicName,
    subtopicId: nextSub.subtopicId,
    subtopicName: nextSub.subtopicName,
    subSubTopicId: nextSub.subSubTopicId,
    subSubTopicName: nextSub.subSubTopicName,
    durationMins: just5Mins ? 5 : (durationMins || 60),
    startTime: Date.now(),
    elapsed: 0,
    doneSessions: 0,
    pointsEarned: 0,
    jarEarned: 0,
    sessionBadges: [],
    lastActivity: Date.now()
  };

  // Check night owl / early bird badge
  const hour = new Date().getHours();
  if (hour >= 23 || hour < 4) checkAndAwardBadge('night_owl');
  if (hour < 8) checkAndAwardBadge('early_bird');

  // Check first session badge
  if (state.sessionLogs.length === 0) checkAndAwardBadge('first_session');

  startActiveSession();
}

function startActiveSession() {
  const s = state.session;

  // Update header
  const header = document.getElementById('session-track-header');
  if (header) {
    header.textContent = `${TRACK_NAMES[s.track]} — ${s.topicName}`;
    header.style.background = TRACK_COLORS[s.track] + '22';
    header.style.color = TRACK_COLORS[s.track];
  }

  // Restore session content
  const content = document.getElementById('session-content');
  if (content) {
    content.innerHTML = `
      <div class="current-subtopic" id="session-subtopic-name">${s.subtopicName}</div>
      <div class="current-subsub" id="session-subsub-name">${s.subSubTopicName}</div>
      <div class="timer-ring-wrapper">
        <svg class="timer-ring" id="timer-svg" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="62" fill="none" stroke="#2a2a2e" stroke-width="8"/>
          <circle cx="70" cy="70" r="62" fill="none"
            stroke="${TRACK_COLORS[s.track]}" stroke-width="8"
            stroke-dasharray="389.6" stroke-dashoffset="0"
            id="timer-progress-ring"
            stroke-linecap="round"
            transform="rotate(-90 70 70)"/>
        </svg>
        <div class="timer-display" id="timer-display">
          ${formatTimer(s.durationMins * 60)}
        </div>
      </div>
      <div class="timer-controls">
        <button class="timer-ctrl-btn pause-btn" id="btn-pause" title="Pause">⏸</button>
        <button class="timer-ctrl-btn stop-btn"  id="btn-stop"  title="End Session">⏹</button>
      </div>
      <div class="session-done-count" id="session-done-count">0 done this session</div>
      <div class="session-actions">
        <button class="btn-action btn-done"     id="btn-mark-done">✅ Mark Done</button>
        <button class="btn-action btn-revision" id="btn-revision">🔖 Need Revision</button>
        <button class="btn-action btn-break"    id="btn-break">☕ Take a Break</button>
        <button class="btn-action btn-later"    id="btn-later">😐 I'll Do It Later</button>
      </div>
    `;
  }

  // Wire action buttons
  document.getElementById('btn-mark-done')?.addEventListener('click', handleMarkDone);
  document.getElementById('btn-revision')?.addEventListener('click', handleNeedsRevision);
  document.getElementById('btn-break')?.addEventListener('click', () => showBreakOverlay(false));
  document.getElementById('btn-later')?.addEventListener('click', triggerExcuseBuster);

  // Wire pause/stop buttons
  document.getElementById('btn-pause')?.addEventListener('click', handlePauseResume);
  document.getElementById('btn-stop')?.addEventListener('click', () => {
    if (confirm('End this session?')) endSession(false);
  });

  // Start countdown timer
  startTimer();

  // Start idle detection
  startIdleDetection();

  // Break reminders
  scheduleBreakReminder();
}

function startTimer() {
  const s = state.session;
  clearInterval(s.timerInterval);

  s.timerInterval = setInterval(() => {
    if (s.paused) return; // Skip if paused
    s.elapsed++;
    const totalSecs = s.durationMins * 60;
    const remaining = Math.max(0, totalSecs - s.elapsed);

    // Update display
    const display = document.getElementById('timer-display');
    if (display) display.textContent = formatTimer(remaining);

    // Update SVG ring (circumference = 2*π*62 ≈ 389.6)
    const ring = document.getElementById('timer-progress-ring');
    if (ring) {
      const circumference = 389.6;
      const progress = s.elapsed / totalSecs;
      const offset = circumference * Math.min(progress, 1);
      ring.style.strokeDashoffset = offset;
    }

    // Session complete
    if (remaining === 0) {
      endSession(false);
    }

    // Points per 30 mins
    if (s.elapsed > 0 && s.elapsed % 1800 === 0) {
      addPoints(5, 'session');
    }
  }, 1000);
}

// ─── Pause / Resume Handler ──────────────────────────────────

function handlePauseResume() {
  const s = state.session;
  if (!s.active) return;

  s.paused = !s.paused;
  const btn = document.getElementById('btn-pause');
  if (!btn) return;

  if (s.paused) {
    btn.textContent = '▶';
    btn.title = 'Resume';
    btn.classList.remove('pause-btn');
    btn.classList.add('resume-btn');
    showToast('Timer paused ⏸', 'info');
  } else {
    btn.textContent = '⏸';
    btn.title = 'Pause';
    btn.classList.remove('resume-btn');
    btn.classList.add('pause-btn');
    s.lastActivity = Date.now();
    showToast('Timer resumed ▶', 'info');
  }
}

function formatTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startIdleDetection() {
  const IDLE_LIMIT = 10 * 60 * 1000; // 10 minutes

  const resetIdle = () => {
    state.session.lastActivity = Date.now();
  };

  document.addEventListener('mousemove', resetIdle);
  document.addEventListener('keydown', resetIdle);
  document.addEventListener('click', resetIdle);
  document.addEventListener('touchstart', resetIdle);

  state.session.idleTimer = setInterval(() => {
    if (!state.session.active || state.session.paused) return;
    const idle = Date.now() - state.session.lastActivity;
    if (idle >= IDLE_LIMIT) {
      triggerExcuseBuster();
      state.session.lastActivity = Date.now(); // reset so it doesn't fire again immediately
    }
  }, 30000); // check every 30 seconds
}

function scheduleBreakReminder() {
  const s = state.session;
  // Long session (≥2hrs): remind at halfway point
  if (s.durationMins >= 120) {
    const halfwayMs = (s.durationMins / 2) * 60 * 1000;
    setTimeout(() => {
      if (state.session.active) showBreakOverlay(true);
    }, halfwayMs);
  }
}

// ─── Session Actions ───────────────────────────────────────────

async function handleMarkDone() {
  const s = state.session;
  if (!s.active) return;

  const uid = getCurrentUid();
  if (!uid || !state.progressData) return;

  // ── Update Firestore ──────────────────────────────────────
  const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const progressRef = doc(db, 'progress', uid);

  // Build nested field paths for Firestore dot notation
  const subPath = `${s.track}.${s.topicId}.subtopics.${s.subtopicId}.subSubtopics.${s.subSubTopicId}`;
  await updateDoc(progressRef, {
    [`${subPath}.status`]: 'done',
    [`${subPath}.completedAt`]: new Date()
  });

  // Update local state
  if (!state.progressData[s.track]?.[s.topicId]?.subtopics?.[s.subtopicId]?.subSubtopics) return;
  state.progressData[s.track][s.topicId].subtopics[s.subtopicId].subSubtopics[s.subSubTopicId] = {
    status: 'done',
    completedAt: new Date()
  };

  // ── Points + Jar ─────────────────────────────────────────
  s.doneSessions++;
  s.pointsEarned += 10;
  s.jarEarned += 5;
  await addPoints(10, 'subtopic');
  await addJar(5);

  // Check subtopic completion
  if (isSubtopicComplete(s.track, s.topicId, s.subtopicId, state.progressData)) {
    await updateDoc(progressRef, {
      [`${s.track}.${s.topicId}.subtopics.${s.subtopicId}.status`]: 'done',
      [`${s.track}.${s.topicId}.subtopics.${s.subtopicId}.completedAt`]: new Date()
    });
    if (state.progressData[s.track]?.[s.topicId]?.subtopics?.[s.subtopicId]) {
      state.progressData[s.track][s.topicId].subtopics[s.subtopicId].status = 'done';
    }
    s.pointsEarned += 50;
    s.jarEarned += 25;
    await addPoints(50, 'subtopic-complete');
    await addJar(25);
    showToast(`✅ Subtopic "${s.subtopicName}" complete! +₹25 to jar`, 'success');
  }

  // Check topic completion
  if (isTopicComplete(s.track, s.topicId, state.progressData)) {
    await updateDoc(progressRef, {
      [`${s.track}.${s.topicId}.status`]: 'done',
      [`${s.track}.${s.topicId}.completedAt`]: new Date()
    });
    if (state.progressData[s.track]?.[s.topicId]) {
      state.progressData[s.track][s.topicId].status = 'done';
    }
    s.pointsEarned += 200;
    s.jarEarned += 100;
    await addPoints(200, 'topic-complete');
    await addJar(100);
    await unlockFoodReward(s.topicName);
    await checkClothingReward();
    showToast(`🎉 Topic "${s.topicName}" complete! +₹100 to jar 🍕 Food reward unlocked!`, 'success');
  }

  // ── Badge checks ──────────────────────────────────────────
  await checkProgressBadges();

  // ── Just 5 Mins extension ─────────────────────────────────
  if (s.just5Mins) {
    s.durationMins += 5;
    showToast('+5 mins added ⏱', 'info');
    // Check if user has been going for 30+ mins total
    if (s.elapsed >= 30 * 60) {
      checkAndAwardBadge('just_5_stayed');
    }
  }

  // ── Advance to next sub-subtopic ──────────────────────────
  const nextSub = getNextSubtopic(s.track, state.progressData);
  if (nextSub) {
    s.topicId       = nextSub.topicId;
    s.topicName     = nextSub.topicName;
    s.subtopicId    = nextSub.subtopicId;
    s.subtopicName  = nextSub.subtopicName;
    s.subSubTopicId = nextSub.subSubTopicId;
    s.subSubTopicName = nextSub.subSubTopicName;
    updateSessionDisplay();
  } else {
    showToast('🎉 Track complete! Amazing work!', 'success');
    setTimeout(() => endSession(true), 2000);
  }

  // Update done count display
  const doneEl = document.getElementById('session-done-count');
  if (doneEl) doneEl.textContent = `${s.doneSessions} done this session`;
}

function updateSessionDisplay() {
  const s = state.session;
  const subtopicEl = document.getElementById('session-subtopic-name');
  const subsubEl   = document.getElementById('session-subsub-name');
  if (subtopicEl) subtopicEl.textContent = s.subtopicName;
  if (subsubEl)   subsubEl.textContent   = s.subSubTopicName;
}

async function handleNeedsRevision() {
  const s = state.session;
  if (!s.active || !s.subtopicId) return;

  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const progressRef = doc(db, 'progress', uid);

  await updateDoc(progressRef, {
    [`${s.track}.${s.topicId}.subtopics.${s.subtopicId}.needsRevision`]: true
  });

  if (state.progressData[s.track]?.[s.topicId]?.subtopics?.[s.subtopicId]) {
    state.progressData[s.track][s.topicId].subtopics[s.subtopicId].needsRevision = true;
  }

  showToast('🔖 Marked for revision', 'info');
  await checkRevisionBadge();
}

function showBreakOverlay(autoTriggered) {
  const s = state.session;

  // Pause timer
  clearInterval(s.timerInterval);

  const overlay = document.getElementById('break-overlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');

  // Break duration: short session ≤1hr → 5-10min, long ≥2hr → 15-30min
  const breakMins = s.durationMins <= 60 ? 8 : 20;
  let breakSecs = breakMins * 60;

  const breakDisplay = document.getElementById('break-timer-display');

  const breakInterval = setInterval(() => {
    breakSecs--;
    if (breakDisplay) breakDisplay.textContent = formatTimer(breakSecs);
    if (breakSecs <= 0) {
      clearInterval(breakInterval);
      overlay.classList.add('hidden');
      startTimer();
      showToast('Break over — back to it! 📚', 'info');
    }
  }, 1000);

  const backBtn = document.getElementById('back-to-study-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      clearInterval(breakInterval);
      overlay.classList.add('hidden');
      startTimer();
    };
  }
}

// ─── Excuse Buster ────────────────────────────────────────────

function triggerExcuseBuster() {
  clearInterval(state.session.timerInterval);

  const overlay = document.getElementById('excuse-overlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');

  const msg = document.getElementById('excuse-message');
  if (msg) {
    msg.textContent = EXCUSE_MESSAGES[Math.floor(Math.random() * EXCUSE_MESSAGES.length)];
  }

  const studyBtn = document.getElementById('excuse-study-btn');
  const breakBtn = document.getElementById('excuse-break-btn');

  if (studyBtn) {
    studyBtn.onclick = () => {
      overlay.classList.add('hidden');
      state.session.lastActivity = Date.now();
      startTimer();
    };
  }
  if (breakBtn) {
    breakBtn.onclick = () => {
      overlay.classList.add('hidden');
      showBreakOverlay(false);
    };
  }
}

// ─── End Session ──────────────────────────────────────────────

async function endSession(trackComplete) {
  const s = state.session;
  clearInterval(s.timerInterval);
  clearInterval(s.idleTimer);
  s.active = false;

  const uid = getCurrentUid();
  if (!uid) return;

  const durationMins = Math.floor(s.elapsed / 60);

  // ── Add streak points ─────────────────────────────────────
  await addPoints(15, 'streak');

  // ── Update streak in users doc ────────────────────────────
  const { doc, updateDoc, arrayUnion, serverTimestamp } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const userRef = doc(db, 'users', uid);
  const todayIndex = new Date().getDay();
  const streakArray = state.userData?.streak?.thisWeek || [false,false,false,false,false,false,false];
  const dayMapToDisplay = [6, 0, 1, 2, 3, 4, 5]; // Sun=6 in display, Mon=0
  const displayIndex = dayMapToDisplay[todayIndex];
  streakArray[displayIndex] = true;
  await updateDoc(userRef, {
    'streak.thisWeek': streakArray,
    'streak.lastStudied': serverTimestamp()
  });

  // ── Log session ───────────────────────────────────────────
  const { addDoc, collection } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await addDoc(collection(db, 'sessions', uid, 'logs'), {
    userId: uid,
    track: s.track,
    startTime: new Date(s.startTime),
    endTime: new Date(),
    durationMins,
    subtopicsCovered: [s.subtopicId],
    pointsEarned: s.pointsEarned,
    jarEarned: s.jarEarned,
    usedJust5Mins: s.just5Mins,
    createdAt: serverTimestamp()
  });

  // ── Show session end card ─────────────────────────────────
  const endOverlay = document.getElementById('session-end-overlay');
  if (endOverlay) {
    endOverlay.classList.remove('hidden');
    const statsEl = document.getElementById('session-end-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="end-stat"><span>⏱ Time</span><strong>${formatDuration(durationMins)}</strong></div>
        <div class="end-stat"><span>✅ Done</span><strong>${s.doneSessions} subtopics</strong></div>
        <div class="end-stat"><span>🏆 Points</span><strong>+${s.pointsEarned}</strong></div>
        <div class="end-stat"><span>🏺 Jar</span><strong>+₹${s.jarEarned}</strong></div>
        ${s.sessionBadges.length ? `<div class="end-badges">New badges: ${s.sessionBadges.map(b => b.emoji + ' ' + b.name).join(', ')}</div>` : ''}
      `;
    }
    const closeBtn = document.getElementById('session-end-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        endOverlay.classList.add('hidden');
        navigate('#dashboard');
      };
    }
  }

  // Reset session state
  state.session = {
    active: false, paused: false, just5Mins: false, track: null, topicId: null, topicName: null,
    subtopicId: null, subtopicName: null, subSubTopicId: null, subSubTopicName: null,
    durationMins: 0, startTime: null, elapsed: 0, timerInterval: null, idleTimer: null,
    lastActivity: Date.now(), doneSessions: 0, pointsEarned: 0, jarEarned: 0, sessionBadges: []
  };

  // Reload data
  await loadAllData();
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 3 — TOPICS
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderTopicsScreen() {
  const { progressData } = state;
  if (!progressData) return;

  // Track tabs
  const trackTabs = document.getElementById('track-tabs');
  if (trackTabs) {
    trackTabs.querySelectorAll('.track-tab').forEach(tab => {
      const active = tab.dataset.track === state.topics.activeTrack;
      tab.classList.toggle('active', active);
      if (active) {
        tab.style.borderBottomColor = TRACK_COLORS[tab.dataset.track];
        tab.style.color = TRACK_COLORS[tab.dataset.track];
      } else {
        tab.style.borderBottomColor = 'transparent';
        tab.style.color = 'var(--text-sec)';
      }
      tab.onclick = () => {
        state.topics.activeTrack = tab.dataset.track;
        renderTopicsScreen();
      };
    });
  }

  // View tabs
  const viewTabs = document.getElementById('view-tabs');
  if (viewTabs) {
    viewTabs.querySelectorAll('.view-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === state.topics.activeView);
      tab.onclick = () => {
        state.topics.activeView = tab.dataset.view;
        renderTopicsScreen();
      };
    });
  }

  if (state.topics.activeView === 'tree') {
    document.getElementById('topic-tree-view')?.classList.remove('hidden');
    document.getElementById('topic-path-view')?.classList.add('hidden');
    renderTopicTree();
  } else {
    document.getElementById('topic-tree-view')?.classList.add('hidden');
    document.getElementById('topic-path-view')?.classList.remove('hidden');
    renderPathView();
  }
}

function renderTopicTree() {
  const { progressData } = state;
  const trackId = state.topics.activeTrack;
  const track = CURRICULUM.find(t => t.id === trackId);
  if (!track) return;

  const container = document.getElementById('topic-tree-view');
  if (!container) return;

  const color = TRACK_COLORS[trackId];
  container.innerHTML = '';

  track.topics.forEach(topic => {
    const topicProgress = progressData[trackId]?.[topic.id];
    const pct = getTopicProgress(trackId, topic.id, progressData);
    const isExpanded = state.topics.expandedTopics.has(topic.id);
    const status = topicProgress?.status || 'not_started';

    const topicEl = document.createElement('div');
    topicEl.className = 'tree-topic';
    topicEl.innerHTML = `
      <div class="tree-topic-header ${isExpanded ? 'expanded' : ''}" data-topic="${topic.id}">
        <div class="tree-topic-left">
          <span class="tree-expand-icon">${isExpanded ? '▼' : '▶'}</span>
          <span class="tree-topic-name">${topic.name}</span>
          <span class="tree-status-badge status-${status}">${statusEmoji(status)}</span>
        </div>
        <div class="tree-topic-right">
          <div class="tree-progress-bar">
            <div class="tree-progress-fill" style="width:${pct}%;background:${color}"></div>
          </div>
          <span class="tree-pct">${pct}%</span>
        </div>
      </div>
      <div class="tree-subtopics ${isExpanded ? '' : 'hidden'}">
        ${topic.subtopics.map(sub => renderSubtopicRow(trackId, topic.id, sub, progressData, color)).join('')}
      </div>
    `;

    // Toggle topic expand
    topicEl.querySelector('.tree-topic-header').addEventListener('click', () => {
      if (state.topics.expandedTopics.has(topic.id)) {
        state.topics.expandedTopics.delete(topic.id);
      } else {
        state.topics.expandedTopics.add(topic.id);
      }
      renderTopicTree();
    });

    container.appendChild(topicEl);
  });

  // Wire subtopic expand + edit buttons after render
  container.querySelectorAll('.tree-subtopic-header[data-subtopic]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.edit-btn')) return;
      const key = `${el.dataset.track}::${el.dataset.topic}::${el.dataset.subtopic}`;
      if (state.topics.expandedSubtopics.has(key)) {
        state.topics.expandedSubtopics.delete(key);
      } else {
        state.topics.expandedSubtopics.add(key);
      }
      renderTopicTree();
    });
  });

  container.querySelectorAll('.edit-btn[data-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openResourceEditor(btn.dataset.key);
    });
  });
}

function renderSubtopicRow(trackId, topicId, subtopic, progressData, color) {
  const subProgress = progressData[trackId]?.[topicId]?.subtopics?.[subtopic.id];
  const status = subProgress?.status || 'not_started';
  const needsRevision = subProgress?.needsRevision || false;
  const key = `${trackId}::${topicId}::${subtopic.id}`;
  const isExpanded = state.topics.expandedSubtopics.has(key);

  // Merge default + custom resources
  const defaultResources = subtopic.resources || [];
  const customResources  = subProgress?.customResources || [];
  const allResources     = [...defaultResources, ...customResources];

  return `
    <div class="tree-subtopic">
      <div class="tree-subtopic-header ${needsRevision ? 'needs-revision' : ''}"
        data-track="${trackId}" data-topic="${topicId}" data-subtopic="${subtopic.id}">
        <div class="tree-sub-left">
          <span class="tree-expand-icon">${isExpanded ? '▼' : '▶'}</span>
          <span class="tree-sub-name">${subtopic.name}</span>
          ${needsRevision ? '<span class="revision-badge">🔖</span>' : ''}
          <span class="tree-status-badge status-${status}">${statusEmoji(status)}</span>
        </div>
        <button class="edit-btn" data-key="${key}" title="Edit resources">✏️</button>
      </div>
      <div class="tree-sub-content ${isExpanded ? '' : 'hidden'}">
        <div class="tree-subsubs">
          ${subtopic.subSubTopics.map(sub => {
            const subSubProgress = subProgress?.subSubtopics?.[sub.id];
            const done = subSubProgress?.status === 'done';
            return `<div class="subsub-item ${done ? 'done' : ''}">
              <span class="subsub-status">${done ? '✅' : '⬜'}</span>
              <span class="subsub-name">${sub.name}</span>
            </div>`;
          }).join('')}
        </div>
        ${subProgress?.personalNote ? `<div class="personal-note">📝 ${subProgress.personalNote}</div>` : ''}
        <div class="resources-list">
          ${allResources.map(r => resourceChip(r)).join('')}
        </div>
      </div>
    </div>
  `;
}

function resourceChip(r) {
  const icons = { video: '📺', playlist: '🎵', channel: '📡', website: '🌐' };
  const langBadge = r.lang === 'hindi' ? '🇮🇳' : r.lang === 'english' ? '🌍' : '🌐';
  return `
    <a class="resource-chip" href="${r.url}" target="_blank" rel="noopener noreferrer">
      <span class="res-icon">${icons[r.type] || '🔗'}</span>
      <span class="res-title">${r.title}</span>
      <span class="res-lang">${langBadge}</span>
    </a>
  `;
}

// ─── Path View (Duolingo-style) ───────────────────────────────

function renderPathView() {
  const { progressData } = state;
  const trackId = state.topics.activeTrack;
  const track = CURRICULUM.find(t => t.id === trackId);
  if (!track) return;

  const container = document.getElementById('topic-path-view');
  if (!container) return;

  const color = TRACK_COLORS[trackId];

  // Flatten all subtopics into a sequence
  const nodes = [];
  for (const topic of track.topics) {
    for (const sub of topic.subtopics) {
      const subProgress = progressData[trackId]?.[topic.id]?.subtopics?.[sub.id];
      nodes.push({
        topicName: topic.name,
        subtopicId: sub.id,
        subtopicName: sub.name,
        status: subProgress?.status || 'not_started',
        needsRevision: subProgress?.needsRevision || false
      });
    }
  }

  let foundCurrent = false;
  container.innerHTML = `
    <div class="path-container">
      ${nodes.map((node, i) => {
        const isDone    = node.status === 'done';
        const isCurrent = !isDone && !foundCurrent;
        if (isCurrent) foundCurrent = true;
        const isLocked  = !isDone && !isCurrent;

        return `
          <div class="path-node-wrapper">
            ${i > 0 ? `<div class="path-line ${isDone ? 'done' : ''}"></div>` : ''}
            <div class="path-node ${isDone ? 'done' : isCurrent ? 'current' : 'locked'}"
              style="${isDone || isCurrent ? `border-color:${color}` : ''}
                     ${isCurrent ? `box-shadow: 0 0 12px ${color}66` : ''}">
              <span class="path-node-icon">
                ${isDone ? '★' : isCurrent ? '▶' : '🔒'}
              </span>
            </div>
            <div class="path-node-label">
              <div class="path-topic-name">${node.topicName}</div>
              <div class="path-subtopic-name">${node.subtopicName}</div>
              ${isCurrent ? `<button class="btn-start-here" 
                style="border-color:${color};color:${color}"
                onclick="window.__startFromNode('${trackId}', '${node.subtopicId}')">Start Here</button>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Scroll to current node
  const currentNode = container.querySelector('.path-node.current');
  if (currentNode) currentNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ─── Resource Editor ──────────────────────────────────────────

function openResourceEditor(key) {
  const [trackId, topicId, subtopicId] = key.split('::');
  state.topics.editorOpen = true;
  state.topics.editorSubtopicKey = key;

  const panel = document.getElementById('resource-editor-panel');
  if (!panel) return;
  panel.classList.remove('hidden');

  const track = CURRICULUM.find(t => t.id === trackId);
  const topic = track?.topics.find(t => t.id === topicId);
  const subtopic = topic?.subtopics.find(s => s.id === subtopicId);
  if (!subtopic) return;

  const nameEl = document.getElementById('editor-subtopic-name');
  if (nameEl) nameEl.textContent = subtopic.name;

  const subProgress = state.progressData?.[trackId]?.[topicId]?.subtopics?.[subtopicId];
  const customResources = subProgress?.customResources || [];
  const personalNote    = subProgress?.personalNote || '';

  const listEl = document.getElementById('editor-resources-list');
  if (listEl) {
    // Default resources (read-only display)
    const defaultHtml = subtopic.resources.map((r, i) => `
      <div class="editor-res-item default-res">
        <span class="res-type-icon">${r.type === 'video' ? '📺' : r.type === 'playlist' ? '🎵' : r.type === 'channel' ? '📡' : '🌐'}</span>
        <a href="${r.url}" target="_blank" class="res-link">${r.title}</a>
        <span class="res-lang-tag">${r.lang}</span>
      </div>
    `).join('');

    // Custom resources (deletable)
    const customHtml = customResources.map((r, i) => `
      <div class="editor-res-item custom-res">
        <span class="res-type-icon">🔗</span>
        <a href="${r.url}" target="_blank" class="res-link">${r.title}</a>
        <span class="res-lang-tag">${r.lang}</span>
        <button class="delete-res-btn" data-index="${i}">✕</button>
      </div>
    `).join('');

    listEl.innerHTML =
      `<div class="editor-section-label">Default Resources</div>${defaultHtml}` +
      (customResources.length ? `<div class="editor-section-label">Your Resources</div>${customHtml}` : '');

    // Wire delete buttons
    listEl.querySelectorAll('.delete-res-btn').forEach(btn => {
      btn.onclick = () => deleteCustomResource(trackId, topicId, subtopicId, parseInt(btn.dataset.index));
    });
  }

  // Personal note
  const noteEl = document.getElementById('editor-note');
  if (noteEl) noteEl.value = personalNote;

  // Add resource button
  const addBtn = document.getElementById('add-resource-btn');
  if (addBtn) {
    addBtn.onclick = () => addCustomResource(trackId, topicId, subtopicId);
  }

  // Save note button
  const saveNoteBtn = document.getElementById('save-note-btn');
  if (saveNoteBtn) {
    saveNoteBtn.onclick = () => savePersonalNote(trackId, topicId, subtopicId);
  }

  // Close button
  const closeBtn = document.getElementById('editor-close-btn');
  if (closeBtn) {
    closeBtn.onclick = closeResourceEditor;
  }
}

function closeResourceEditor() {
  state.topics.editorOpen = false;
  state.topics.editorSubtopicKey = null;
  document.getElementById('resource-editor-panel')?.classList.add('hidden');
}

async function addCustomResource(trackId, topicId, subtopicId) {
  const title = document.getElementById('new-resource-title')?.value?.trim();
  const url   = document.getElementById('new-resource-url')?.value?.trim();
  const type  = document.getElementById('new-resource-type')?.value || 'video';
  const lang  = document.getElementById('new-resource-lang')?.value || 'english';

  if (!title || !url) {
    showToast('Please enter both title and URL', 'error');
    return;
  }

  const uid = getCurrentUid();
  if (!uid) return;

  const newResource = { title, url, type, lang };

  const { doc, updateDoc, arrayUnion } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const progressRef = doc(db, 'progress', uid);

  await updateDoc(progressRef, {
    [`${trackId}.${topicId}.subtopics.${subtopicId}.customResources`]: arrayUnion(newResource)
  });

  // Update local state
  if (!state.progressData[trackId]?.[topicId]?.subtopics?.[subtopicId]) return;
  const sub = state.progressData[trackId][topicId].subtopics[subtopicId];
  sub.customResources = [...(sub.customResources || []), newResource];

  // Clear inputs
  if (document.getElementById('new-resource-title')) document.getElementById('new-resource-title').value = '';
  if (document.getElementById('new-resource-url'))   document.getElementById('new-resource-url').value = '';

  showToast('Resource added ✅', 'success');
  openResourceEditor(state.topics.editorSubtopicKey); // re-render editor
}

async function deleteCustomResource(trackId, topicId, subtopicId, index) {
  const uid = getCurrentUid();
  if (!uid) return;

  const sub = state.progressData[trackId]?.[topicId]?.subtopics?.[subtopicId];
  if (!sub?.customResources) return;

  const updatedResources = sub.customResources.filter((_, i) => i !== index);

  const { doc, updateDoc } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'progress', uid), {
    [`${trackId}.${topicId}.subtopics.${subtopicId}.customResources`]: updatedResources
  });

  sub.customResources = updatedResources;
  showToast('Resource removed', 'info');
  openResourceEditor(state.topics.editorSubtopicKey);
}

async function savePersonalNote(trackId, topicId, subtopicId) {
  const note = document.getElementById('editor-note')?.value?.trim() || '';
  const uid  = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'progress', uid), {
    [`${trackId}.${topicId}.subtopics.${subtopicId}.personalNote`]: note
  });

  if (state.progressData[trackId]?.[topicId]?.subtopics?.[subtopicId]) {
    state.progressData[trackId][topicId].subtopics[subtopicId].personalNote = note;
  }
  showToast('Note saved 📝', 'success');
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 4 — WEEK PLANNER
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderWeekPlanner() {
  const { progressData, userData, sessionLogs } = state;
  if (!progressData || !userData) return;

  const weekPlan = getWeekPlan(userData.weeklyOverride || {}, progressData, sessionLogs);
  const grid = document.getElementById('week-grid');
  if (!grid) return;

  grid.innerHTML = weekPlan.map(day => `
    <div class="week-day-card ${day.isToday ? 'today' : ''} ${day.isCompleted ? 'completed' : ''}">
      <div class="week-day-header">
        <span class="week-day-name">${day.dayName}</span>
        <span class="week-day-date">${day.dateStr}</span>
        ${day.isCompleted ? '<span class="week-done-check">✓</span>' : ''}
      </div>
      <div class="week-track-pill" 
        style="background:${day.trackColor}22;color:${day.trackColor};border-color:${day.trackColor}44"
        data-day="${day.dayKey}">
        ${TRACK_NAMES[day.track]}
        <span class="override-arrow">▾</span>
      </div>
      <div class="week-subtopic">${day.subtopicName}</div>
      <div class="week-topic">${day.topicName}</div>
      <div class="override-dropdown hidden" data-day="${day.dayKey}">
        ${['frontend', 'ai', 'java'].map(t => `
          <div class="override-option ${t === day.track ? 'active' : ''}"
            data-day="${day.dayKey}" data-track="${t}"
            style="color:${TRACK_COLORS[t]}">
            ${TRACK_NAMES[t]}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Wire override clicks
  grid.querySelectorAll('.week-track-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const dayKey = pill.dataset.day;
      const dropdown = grid.querySelector(`.override-dropdown[data-day="${dayKey}"]`);
      if (dropdown) dropdown.classList.toggle('hidden');
    });
  });

  grid.querySelectorAll('.override-option').forEach(opt => {
    opt.addEventListener('click', async (e) => {
      e.stopPropagation();
      const dayKey = opt.dataset.day;
      const track  = opt.dataset.track;
      await saveWeeklyOverride(dayKey, track);
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    grid.querySelectorAll('.override-dropdown').forEach(d => d.classList.add('hidden'));
  });
}

async function saveWeeklyOverride(dayKey, track) {
  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'users', uid), {
    [`weeklyOverride.${dayKey}`]: track
  });

  if (!state.userData.weeklyOverride) state.userData.weeklyOverride = {};
  state.userData.weeklyOverride[dayKey] = track;

  showToast(`${dayKey.charAt(0).toUpperCase() + dayKey.slice(1)} → ${TRACK_NAMES[track]}`, 'success');
  renderWeekPlanner();
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 5 — HISTORY
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderHistory() {
  const { sessionLogs } = state;

  // Canvas heatmap
  drawHeatmap(sessionLogs);

  // Stats
  renderHistoryStats(sessionLogs);

  // Session log
  renderSessionLog(sessionLogs, 'all');

  // Filter
  const filterEl = document.getElementById('filter-track');
  if (filterEl) {
    filterEl.onchange = () => renderSessionLog(sessionLogs, filterEl.value);
  }
}

function drawHeatmap(sessionLogs) {
  const canvas = document.getElementById('heatmap-canvas');
  if (!canvas) return;

  const heatmapData = getHeatmapData(sessionLogs);
  const CELL = 12;
  const GAP  = 2;
  const WEEKS = 52;
  const DAYS  = 7;

  canvas.width  = WEEKS * (CELL + GAP);
  canvas.height = DAYS  * (CELL + GAP) + 20;
  canvas.style.width  = '100%';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const today = new Date();
  // Intensity colors (dark theme)
  const intensityColors = ['#2a2a2a', '#2d2047', '#4c3580', '#7c5cbf', '#c4b5fd'];

  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < DAYS; d++) {
      const date = new Date(today);
      date.setDate(today.getDate() - ((WEEKS - 1 - w) * 7) - (6 - d));
      const key = date.toDateString();
      const mins = heatmapData[key] || 0;
      const intensity = mins === 0 ? 0 : mins < 30 ? 1 : mins < 60 ? 2 : mins < 120 ? 3 : 4;

      ctx.fillStyle = intensityColors[intensity];
      ctx.beginPath();
      ctx.roundRect(
        w * (CELL + GAP),
        d * (CELL + GAP),
        CELL, CELL, 2
      );
      ctx.fill();
    }
  }

  // Month labels
  ctx.fillStyle = '#606060';
  ctx.font = '10px system-ui, sans-serif';
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    const date = new Date(today);
    date.setDate(today.getDate() - ((WEEKS - 1 - w) * 7));
    if (date.getMonth() !== lastMonth) {
      ctx.fillText(months[date.getMonth()], w * (CELL + GAP), canvas.height - 2);
      lastMonth = date.getMonth();
    }
  }

  // Tooltip on hover
  canvas.onmousemove = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleX;
    const w = Math.floor(x / (CELL + GAP));
    const d = Math.floor(y / (CELL + GAP));
    if (w >= 0 && w < WEEKS && d >= 0 && d < DAYS) {
      const date = new Date(today);
      date.setDate(today.getDate() - ((WEEKS - 1 - w) * 7) - (6 - d));
      const mins = heatmapData[date.toDateString()] || 0;
      canvas.title = `${date.toLocaleDateString()} — ${formatDuration(mins)}`;
    }
  };
}

function renderHistoryStats(sessionLogs) {
  const statsEl = document.getElementById('history-stats');
  if (!statsEl) return;

  const totalMins    = sessionLogs.reduce((sum, l) => sum + (l.durationMins || 0), 0);
  const totalDone    = sessionLogs.reduce((sum, l) => sum + (l.subtopicsCovered?.length || 0), 0);
  const totalPoints  = sessionLogs.reduce((sum, l) => sum + (l.pointsEarned || 0), 0);

  statsEl.innerHTML = `
    <div class="stat-card"><div class="stat-value">${formatDuration(totalMins)}</div><div class="stat-label">Total Studied</div></div>
    <div class="stat-card"><div class="stat-value">${sessionLogs.length}</div><div class="stat-label">Sessions</div></div>
    <div class="stat-card"><div class="stat-value">${totalDone}</div><div class="stat-label">Subtopics Done</div></div>
    <div class="stat-card"><div class="stat-value">${totalPoints.toLocaleString()}</div><div class="stat-label">Points Earned</div></div>
  `;
}

function renderSessionLog(sessionLogs, filterTrack) {
  const logEl = document.getElementById('session-log');
  if (!logEl) return;

  const filtered = filterTrack === 'all'
    ? sessionLogs
    : sessionLogs.filter(l => l.track === filterTrack);

  if (filtered.length === 0) {
    logEl.innerHTML = '<div class="no-sessions">No sessions yet. Start studying! 🚀</div>';
    return;
  }

  logEl.innerHTML = filtered.map(log => {
    const date = log.createdAt?.toDate ? log.createdAt.toDate() : new Date(log.createdAt || 0);
    const color = TRACK_COLORS[log.track] || '#c4b5fd';
    return `
      <div class="session-card">
        <div class="session-card-bar" style="background:${color}"></div>
        <div class="session-card-content">
          <div class="session-card-header">
            <span class="session-track-name" style="color:${color}">${TRACK_NAMES[log.track] || log.track}</span>
            <span class="session-date">${date.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</span>
          </div>
          <div class="session-duration">⏱ ${formatDuration(log.durationMins)}</div>
          <div class="session-meta">
            🏆 +${log.pointsEarned || 0} pts &nbsp;&nbsp; 🏺 +₹${log.jarEarned || 0}
            ${log.usedJust5Mins ? ' &nbsp;&nbsp; ⏱ Just 5 Mins' : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SCREEN 6 — REWARDS
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function renderRewards() {
  const { rewardsData, userData } = state;
  if (!rewardsData || !userData) return;

  const jarBalance = rewardsData.jarBalance || 0;

  // Jar display
  const jarAmountEl = document.getElementById('jar-amount');
  if (jarAmountEl) jarAmountEl.textContent = `₹${jarBalance.toLocaleString()}`;

  // Jar fill visual
  const jarFillEl = document.getElementById('jar-fill-visual');
  if (jarFillEl) {
    const fillPct = Math.min(jarBalance / 500 * 100, 100);
    jarFillEl.innerHTML = `
      <div class="jar-svg-wrap">
        <svg width="60" height="80" viewBox="0 0 60 80">
          <rect x="10" y="10" width="40" height="60" rx="6" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
          <rect x="10" y="${10 + 60 * (1 - fillPct/100)}" width="40" height="${60 * fillPct/100}"
            rx="4" fill="#c4b5fd66"/>
          <rect x="8" y="6" width="44" height="10" rx="4" fill="#333" stroke="#444" stroke-width="1.5"/>
          <text x="30" y="45" text-anchor="middle" fill="#f0f0f0" font-size="8">₹${jarBalance}</text>
        </svg>
      </div>
    `;
  }

  // Food rewards
  const foodItems = (rewardsData.items || []).filter(r => r.type === 'food');
  const foodEl = document.getElementById('food-rewards-list');
  if (foodEl) {
    if (foodItems.length === 0) {
      foodEl.innerHTML = '<div class="no-rewards">Complete a full topic to unlock 🍕</div>';
    } else {
      foodEl.innerHTML = foodItems.map((item, i) => `
        <div class="reward-card ${item.redeemed ? 'redeemed' : ''}">
          <div class="reward-emoji">🍕</div>
          <div class="reward-info">
            <div class="reward-reason">${item.reason}</div>
            <div class="reward-date">${item.unlockedAt?.toDate ? item.unlockedAt.toDate().toLocaleDateString('en-IN') : ''}</div>
          </div>
          ${!item.redeemed
            ? `<button class="redeem-btn" data-type="food" data-index="${i}">Redeem</button>`
            : '<span class="redeemed-label">Redeemed ✓</span>'}
        </div>
      `).join('');
    }
  }

  // Clothing rewards
  const clothingItems  = (rewardsData.items || []).filter(r => r.type === 'clothing');
  const topicsCount    = rewardsData.topicsCompletedCount || 0;
  const nextClothing   = 5 - (topicsCount % 5);
  const clothingEl     = document.getElementById('clothing-rewards-list');
  const clothingProgEl = document.getElementById('clothing-progress');

  if (clothingProgEl) {
    clothingProgEl.innerHTML = `
      <div class="clothing-progress-bar">
        <div class="clothing-progress-fill" style="width:${((topicsCount % 5) / 5) * 100}%"></div>
      </div>
      <div class="clothing-progress-label">${topicsCount % 5}/5 topics — ${nextClothing} more for next reward 👗</div>
    `;
  }

  if (clothingEl) {
    if (clothingItems.length === 0) {
      clothingEl.innerHTML = '<div class="no-rewards">Complete 5 topics to unlock 👗</div>';
    } else {
      clothingEl.innerHTML = clothingItems.map((item, i) => `
        <div class="reward-card ${item.redeemed ? 'redeemed' : ''}">
          <div class="reward-emoji">👗</div>
          <div class="reward-info">
            <div class="reward-reason">${item.reason}</div>
            <div class="reward-date">${item.unlockedAt?.toDate ? item.unlockedAt.toDate().toLocaleDateString('en-IN') : ''}</div>
          </div>
          ${!item.redeemed
            ? `<button class="redeem-btn" data-type="clothing" data-index="${i + foodItems.length}">Redeem</button>`
            : '<span class="redeemed-label">Redeemed ✓</span>'}
        </div>
      `).join('');
    }
  }

  // Wire redeem buttons
  document.querySelectorAll('.redeem-btn').forEach(btn => {
    btn.onclick = () => redeemReward(parseInt(btn.dataset.index));
  });

  // Badges grid
  const badgesEl = document.getElementById('badges-grid');
  if (badgesEl) {
    const earnedIds = userData.badges || [];
    badgesEl.innerHTML = BADGES.map(b => `
      <div class="badge-card ${earnedIds.includes(b.id) ? 'earned' : 'locked'}"
        ${earnedIds.includes(b.id) ? `style="border-color:${TRACK_COLORS.frontend}44"` : ''}>
        <div class="badge-emoji">${earnedIds.includes(b.id) ? b.emoji : '🔒'}</div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-condition">${b.condition}</div>
      </div>
    `).join('');
  }
}

async function redeemReward(index) {
  const uid = getCurrentUid();
  if (!uid || !state.rewardsData?.items) return;

  const items = [...state.rewardsData.items];
  if (!items[index]) return;
  items[index] = { ...items[index], redeemed: true, redeemedAt: new Date() };

  const { doc, updateDoc } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'rewards', uid), { items });

  state.rewardsData.items = items;
  showToast('Reward redeemed! Enjoy! 🎉', 'success');
  renderRewards();
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// GAMIFICATION
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

async function addPoints(amount, reason) {
  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc, increment } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'users', uid), {
    totalPoints: increment(amount)
  });
  if (state.userData) state.userData.totalPoints = (state.userData.totalPoints || 0) + amount;
}

async function addJar(amount) {
  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc, increment } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await Promise.all([
    updateDoc(doc(db, 'users', uid),   { jarBalance: increment(amount) }),
    updateDoc(doc(db, 'rewards', uid), { jarBalance: increment(amount) })
  ]);
  if (state.userData)    state.userData.jarBalance    = (state.userData.jarBalance    || 0) + amount;
  if (state.rewardsData) state.rewardsData.jarBalance = (state.rewardsData.jarBalance || 0) + amount;
}

async function unlockFoodReward(topicName) {
  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc, arrayUnion, serverTimestamp } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const reward = {
    type: 'food',
    reason: `🍕 Completed "${topicName}" — food reward unlocked!`,
    unlockedAt: new Date(),
    redeemed: false
  };
  await updateDoc(doc(db, 'rewards', uid), { items: arrayUnion(reward) });
  if (state.rewardsData) state.rewardsData.items = [...(state.rewardsData.items || []), reward];
}

async function checkClothingReward() {
  const uid = getCurrentUid();
  if (!uid) return;

  const { doc, updateDoc, arrayUnion, increment } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  const rewardsRef = doc(db, 'rewards', uid);
  const count = (state.rewardsData?.topicsCompletedCount || 0) + 1;

  await updateDoc(rewardsRef, { topicsCompletedCount: increment(1) });
  if (state.rewardsData) state.rewardsData.topicsCompletedCount = count;

  if (count % 5 === 0) {
    const reward = {
      type: 'clothing',
      reason: `👗 ${count} topics done — clothing reward unlocked!`,
      unlockedAt: new Date(),
      redeemed: false
    };
    await updateDoc(rewardsRef, { items: arrayUnion(reward) });
    if (state.rewardsData) state.rewardsData.items = [...(state.rewardsData.items || []), reward];
    showToast('👗 Clothing reward unlocked!', 'success');
  }
}

async function checkAndAwardBadge(badgeId) {
  const uid = getCurrentUid();
  if (!uid) return;
  const earned = state.userData?.badges || [];
  if (earned.includes(badgeId)) return; // already earned

  const { doc, updateDoc, arrayUnion } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'users', uid), { badges: arrayUnion(badgeId) });
  if (state.userData) state.userData.badges = [...earned, badgeId];

  const badge = BADGES.find(b => b.id === badgeId);
  if (badge) {
    state.session.sessionBadges.push(badge);
    showToast(`${badge.emoji} Badge unlocked: ${badge.name}!`, 'success');
  }
}

async function checkProgressBadges() {
  const { progressData, userData } = state;
  if (!progressData) return;

  // Frontend progress
  const feProg = getTrackProgress('frontend', progressData);
  if (feProg.percent >= 50)  await checkAndAwardBadge('frontend_50');
  if (feProg.percent >= 100) await checkAndAwardBadge('frontend_100');

  // AI progress
  const aiProg = getTrackProgress('ai', progressData);
  if (aiProg.percent >= 50) await checkAndAwardBadge('ai_50');

  // Points
  const pts = userData?.totalPoints || 0;
  if (pts >= 1000) await checkAndAwardBadge('points_1000');
  if (pts >= 5000) await checkAndAwardBadge('points_5000');

  // First topic
  if (countCompletedTopics(progressData) >= 1) await checkAndAwardBadge('first_topic');
}

async function checkRevisionBadge() {
  const { progressData } = state;
  if (!progressData) return;
  let count = 0;
  for (const track of CURRICULUM) {
    const tp = progressData[track.id];
    if (!tp) continue;
    for (const topic of track.topics) {
      for (const sub of topic.subtopics) {
        if (tp[topic.id]?.subtopics?.[sub.id]?.revisedAt) count++;
      }
    }
  }
  if (count >= 10) await checkAndAwardBadge('revision_hero');
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SETTINGS
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

async function saveNotificationSettings() {
  const uid = getCurrentUid();
  if (!uid) return;

  const time  = document.getElementById('notif-time-input')?.value || '21:00';
  const email = document.getElementById('notif-email-input')?.value?.trim() || '';

  const { doc, updateDoc } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
  await updateDoc(doc(db, 'users', uid), {
    notificationTime: time,
    notificationEmail: email
  });

  if (state.userData) {
    state.userData.notificationTime  = time;
    state.userData.notificationEmail = email;
  }

  // Schedule browser notification
  scheduleNotification(time);

  showToast('Settings saved ✅', 'success');
}

// ─── Notifications ────────────────────────────────────────────

function scheduleNotification(timeStr) {
  // Request permission
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  const [hours, minutes] = timeStr.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1); // schedule for tomorrow if time passed
  }

  const msUntil = target - now;

  setTimeout(() => {
    fireNotification();
    // Repeat every 24 hours
    setInterval(fireNotification, 24 * 60 * 60 * 1000);
  }, msUntil);
}

function fireNotification() {
  const name = state.userData?.name?.split(' ')[0] || 'Shivangi';
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('MyStudyPlanner 📚', {
      body: `Time to study, ${name}! Your streak is waiting.`,
      icon: '/favicon.ico'
    });
  }

  // EmailJS backup
  const emailjsKey     = state.userData?.emailjsPublicKey;
  const emailjsService = state.userData?.emailjsServiceId;
  const emailjsTemplate = state.userData?.emailjsTemplateId;
  const toEmail        = state.userData?.notificationEmail;

  if (emailjsKey && emailjsService && emailjsTemplate && toEmail && window.emailjs) {
    window.emailjs.init(emailjsKey);
    window.emailjs.send(emailjsService, emailjsTemplate, {
      to_email: toEmail,
      message: `Time to study, ${name}! Open MyStudyPlanner and hit your goals today.`
    }).catch(err => console.error('EmailJS failed:', err));
  }
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SHARE WITH CLAUDE
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

async function shareWithClaude() {
  await loadAllData();
  const { userData, progressData, sessionLogs, rewardsData } = state;
  if (!userData || !progressData) {
    showToast('No data to share yet', 'error');
    return;
  }

  const today = new Date().toLocaleDateString('en-IN');

  let text = `=== MyStudyPlanner Progress ===\n`;
  text += `Date: ${today}\n`;
  text += `Total Points: ${(userData.totalPoints || 0).toLocaleString()}\n`;
  text += `Jar Balance: ₹${(rewardsData?.jarBalance || 0).toLocaleString()}\n\n`;

  for (const track of CURRICULUM) {
    const prog = getTrackProgress(track.id, progressData);
    const colorNames = { frontend: 'Lavender', ai: 'Creamy Blue', java: 'Rose Pink' };
    text += `${TRACK_NAMES[track.id]} (${colorNames[track.id]}) — ${prog.percent}% complete\n`;
    text += `Current: ${prog.currentTopicName || 'Complete!'} → ${prog.currentSubtopicName || ''}\n`;

    const lastLog = sessionLogs.find(l => l.track === track.id);
    if (lastLog?.createdAt) {
      const d = lastLog.createdAt.toDate ? lastLog.createdAt.toDate() : new Date(lastLog.createdAt);
      text += `Last studied: ${d.toLocaleDateString('en-IN')}\n`;
    }
    text += '\n';
  }

  const recentLogs = sessionLogs.slice(0, 7);
  if (recentLogs.length > 0) {
    text += `Recent Sessions (last ${recentLogs.length}):\n`;
    recentLogs.forEach(log => {
      const d = log.createdAt?.toDate ? log.createdAt.toDate() : new Date(log.createdAt || 0);
      text += `${d.toLocaleDateString('en-IN')}: ${TRACK_NAMES[log.track]} — ${formatDuration(log.durationMins)}\n`;
    });
  }

  text += `================================`;

  try {
    await navigator.clipboard.writeText(text);
    showToast('📋 Copied! Paste into your Claude chat.', 'success');
  } catch {
    // Fallback for browsers that block clipboard
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('📋 Copied! Paste into your Claude chat.', 'success');
  }
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// EXPORT / IMPORT
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

async function exportData() {
  await loadAllData();
  const exportObj = {
    exportedAt: new Date().toISOString(),
    userData:    state.userData,
    progressData: state.progressData,
    rewardsData:  state.rewardsData,
    sessionLogs:  state.sessionLogs
  };

  const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `mystudyplanner-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported ⬇️', 'success');
}

function importData() {
  const input = document.createElement('input');
  input.type  = 'file';
  input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      showToast('Import found. Restoring to Firestore…', 'info');
      const uid = getCurrentUid();
      if (!uid) return;

      const { doc, setDoc } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

      await Promise.all([
        data.progressData && setDoc(doc(db, 'progress', uid), data.progressData),
        data.userData     && setDoc(doc(db, 'users', uid),    data.userData),
        data.rewardsData  && setDoc(doc(db, 'rewards', uid),  data.rewardsData)
      ]);

      await loadAllData();
      showToast('Data imported successfully ✅', 'success');
    } catch {
      showToast('Invalid backup file', 'error');
    }
  };
  input.click();
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// UTILITIES
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

function statusEmoji(status) {
  switch (status) {
    case 'done':       return '✅';
    case 'in_progress': return '🔵';
    case 'revision':   return '🔖';
    default:           return '⬜';
  }
}

function showToast(msg, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast toast-${type} show`;
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───
// SETTINGS MODAL BINDINGS
// ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───

document.addEventListener('DOMContentLoaded', () => {

  // Populate settings inputs when modal opens
  document.getElementById('avatar-btn')?.addEventListener('click', () => {
    const timeInput  = document.getElementById('notif-time-input');
    const emailInput = document.getElementById('notif-email-input');
    if (timeInput  && state.userData?.notificationTime)  timeInput.value  = state.userData.notificationTime;
    if (emailInput && state.userData?.notificationEmail) emailInput.value = state.userData.notificationEmail;
  });

  // Save settings on time or email change
  document.getElementById('notif-time-input')?.addEventListener('change', saveNotificationSettings);
  document.getElementById('notif-email-input')?.addEventListener('blur', saveNotificationSettings);

  // Share with Claude
  document.getElementById('share-claude-btn')?.addEventListener('click', () => {
    closeSettingsModal();
    shareWithClaude();
  });

  // Export
  document.getElementById('export-data-btn')?.addEventListener('click', () => {
    closeSettingsModal();
    exportData();
  });

  // Import
  document.getElementById('import-data-btn')?.addEventListener('click', () => {
    closeSettingsModal();
    importData();
  });

  // Schedule notification on page load if settings exist
  window.addEventListener('userLoggedIn', async () => {
    await loadAllData();
    if (state.userData?.notificationTime) {
      scheduleNotification(state.userData.notificationTime);
    }
  });
});

// ─── Expose for path view "Start Here" onclick ────────────────
window.__startFromNode = function(trackId, subtopicId) {
  const track = CURRICULUM.find(t => t.id === trackId);
  if (!track) return;
  for (const topic of track.topics) {
    const sub = topic.subtopics.find(s => s.id === subtopicId);
    if (sub) {
      const subSubTopic = sub.subSubTopics[0];
      const nextSub = {
        trackId,
        topicId: topic.id,
        topicName: topic.name,
        subtopicId: sub.id,
        subtopicName: sub.name,
        subSubTopicId: subSubTopic?.id,
        subSubTopicName: subSubTopic?.name
      };
      startSessionSetup(trackId, nextSub, false);
      return;
    }
  }
};
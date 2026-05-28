// scheduler.js — MyStudyPlanner
// Auto-scheduling logic (4-2-1 split), next subtopic finder,
// track progress calculator. Pure logic — no DOM, no Firebase.

import { CURRICULUM } from './curriculum.js';

// ─── Default Weekly Schedule ──────────────────────────────────
// Frontend 4 days, AI 2 days, Java 1 day.
export const DEFAULT_SCHEDULE = {
  mon: 'frontend',
  tue: 'frontend',
  wed: 'ai',
  thu: 'frontend',
  fri: 'frontend',
  sat: 'ai',
  sun: 'java'
};

// Day index → key mapping (0 = Sunday in JS Date)
const DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// ─── Get Track For Today ──────────────────────────────────────
// Returns 'frontend' | 'ai' | 'java' based on today's day
// and the user's weeklyOverride (if set).

export function getTrackForToday(weeklyOverride = {}) {
  const dayKey = DAY_KEYS[new Date().getDay()];
  return weeklyOverride[dayKey] || DEFAULT_SCHEDULE[dayKey];
}

// ─── Get Track For Specific Day ───────────────────────────────
// Used by Week Planner to render all 7 days.
// dayIndex: 0 = Sunday ... 6 = Saturday (JS Date convention)

export function getTrackForDay(dayIndex, weeklyOverride = {}) {
  const dayKey = DAY_KEYS[dayIndex];
  return weeklyOverride[dayKey] || DEFAULT_SCHEDULE[dayKey];
}

// ─── Get Next Subtopic ────────────────────────────────────────
// Finds the next sub-subtopic to study in sequence.
// Returns { trackId, topicId, topicName, subtopicId, subtopicName,
//           subSubTopicId, subSubTopicName } or null if track complete.

export function getNextSubtopic(trackId, progressData) {
  if (!progressData || !progressData[trackId]) return null;

  const track = CURRICULUM.find(t => t.id === trackId);
  if (!track) return null;

  const trackProgress = progressData[trackId];

  for (const topic of track.topics) {
    const topicProgress = trackProgress[topic.id];
    if (!topicProgress) continue;

    // Skip fully completed topics
    if (topicProgress.status === 'done') continue;

    for (const subtopic of topic.subtopics) {
      const subtopicProgress = topicProgress.subtopics?.[subtopic.id];
      if (!subtopicProgress) continue;

      // Skip fully completed subtopics
      if (subtopicProgress.status === 'done') continue;

      // Find first not_started sub-subtopic
      for (const sub of subtopic.subSubTopics) {
        const subProgress = subtopicProgress.subSubtopics?.[sub.id];
        if (!subProgress || subProgress.status === 'not_started') {
          return {
            trackId,
            topicId: topic.id,
            topicName: topic.name,
            subtopicId: subtopic.id,
            subtopicName: subtopic.name,
            subSubTopicId: sub.id,
            subSubTopicName: sub.name
          };
        }
      }
    }
  }

  // Track fully complete
  return null;
}

// ─── Get Track Progress ───────────────────────────────────────
// Returns percentage complete + current topic/subtopic names.
// { percent, currentTopicName, currentSubtopicName, totalDone, totalItems }

export function getTrackProgress(trackId, progressData) {
  if (!progressData || !progressData[trackId]) {
    return { percent: 0, currentTopicName: '', currentSubtopicName: '', totalDone: 0, totalItems: 0 };
  }

  const track = CURRICULUM.find(t => t.id === trackId);
  if (!track) return { percent: 0, currentTopicName: '', currentSubtopicName: '', totalDone: 0, totalItems: 0 };

  const trackProgress = progressData[trackId];
  let totalItems = 0;
  let totalDone = 0;
  let currentTopicName = '';
  let currentSubtopicName = '';

  for (const topic of track.topics) {
    const topicProgress = trackProgress[topic.id];
    if (!topicProgress) continue;

    for (const subtopic of topic.subtopics) {
      const subtopicProgress = topicProgress.subtopics?.[subtopic.id];
      if (!subtopicProgress) continue;

      for (const sub of subtopic.subSubTopics) {
        totalItems++;
        const subProgress = subtopicProgress.subSubtopics?.[sub.id];
        if (subProgress?.status === 'done') {
          totalDone++;
        } else if (!currentTopicName) {
          // First not-done item = current position
          currentTopicName = topic.name;
          currentSubtopicName = subtopic.name;
        }
      }
    }
  }

  const percent = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  return { percent, currentTopicName, currentSubtopicName, totalDone, totalItems };
}

// ─── Get Topic Progress ───────────────────────────────────────
// Returns completion % for a single topic (used in topic tree).

export function getTopicProgress(trackId, topicId, progressData) {
  if (!progressData?.[trackId]?.[topicId]) return 0;

  const track = CURRICULUM.find(t => t.id === trackId);
  const topic = track?.topics.find(t => t.id === topicId);
  if (!topic) return 0;

  const topicProgress = progressData[trackId][topicId];
  let total = 0;
  let done = 0;

  for (const subtopic of topic.subtopics) {
    const subtopicProgress = topicProgress.subtopics?.[subtopic.id];
    for (const sub of subtopic.subSubTopics) {
      total++;
      if (subtopicProgress?.subSubtopics?.[sub.id]?.status === 'done') done++;
    }
  }

  return total > 0 ? Math.round((done / total) * 100) : 0;
}

// ─── Count Completed Topics ───────────────────────────────────
// Returns total fully-completed topics across all 3 tracks.
// Used for clothing reward trigger (every 5 topics).

export function countCompletedTopics(progressData) {
  if (!progressData) return 0;
  let count = 0;

  for (const track of CURRICULUM) {
    const trackProgress = progressData[track.id];
    if (!trackProgress) continue;

    for (const topic of track.topics) {
      const topicProgress = trackProgress[topic.id];
      if (topicProgress?.status === 'done') count++;
    }
  }

  return count;
}

// ─── Is Subtopic Complete ─────────────────────────────────────
// Checks if all sub-subtopics of a subtopic are done.

export function isSubtopicComplete(trackId, topicId, subtopicId, progressData) {
  const track = CURRICULUM.find(t => t.id === trackId);
  const topic = track?.topics.find(t => t.id === topicId);
  const subtopic = topic?.subtopics.find(s => s.id === subtopicId);
  if (!subtopic) return false;

  const subtopicProgress = progressData?.[trackId]?.[topicId]?.subtopics?.[subtopicId];
  if (!subtopicProgress) return false;

  return subtopic.subSubTopics.every(
    sub => subtopicProgress.subSubtopics?.[sub.id]?.status === 'done'
  );
}

// ─── Is Topic Complete ────────────────────────────────────────
// Checks if all subtopics of a topic are done.

export function isTopicComplete(trackId, topicId, progressData) {
  const track = CURRICULUM.find(t => t.id === trackId);
  const topic = track?.topics.find(t => t.id === topicId);
  if (!topic) return false;

  const topicProgress = progressData?.[trackId]?.[topicId];
  if (!topicProgress) return false;

  return topic.subtopics.every(subtopic =>
    isSubtopicComplete(trackId, topicId, subtopic.id, progressData)
  );
}

// ─── Get Week Plan ────────────────────────────────────────────
// Returns array of 7 day objects for the Week Planner screen.
// Each: { dayKey, dayName, date, track, trackColor, subtopicName,
//         isToday, isCompleted }

export function getWeekPlan(weeklyOverride = {}, progressData = {}, sessionLogs = []) {
  const today = new Date();
  const todayDayIndex = today.getDay(); // 0 = Sun

  // Get Monday of current week
  const monday = new Date(today);
  const diffToMonday = (todayDayIndex === 0) ? -6 : 1 - todayDayIndex;
  monday.setDate(today.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  // Track colors lookup
  const trackColors = {
    frontend: '#c4b5fd',
    ai: '#a8d4f5',
    java: '#fda4af'
  };

  const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // Week starts Monday (index 0 = Mon in our display)
  const DISPLAY_DAY_KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const weekPlan = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    const dayKey = DISPLAY_DAY_KEYS[i];
    const track = weeklyOverride[dayKey] || DEFAULT_SCHEDULE[dayKey];

    // Find next subtopic for this track
    const nextSub = getNextSubtopic(track, progressData);

    // Check if this date has any session logged
    const dateStr = date.toDateString();
    const hasSession = sessionLogs.some(log => {
      if (!log.createdAt) return false;
      const logDate = log.createdAt.toDate ? log.createdAt.toDate() : new Date(log.createdAt);
      return logDate.toDateString() === dateStr;
    });

    // Is today
    const isToday = date.toDateString() === today.toDateString();

    // Is past (before today)
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    weekPlan.push({
      dayKey,
      dayName: DAY_NAMES[i],
      date,
      dateStr: date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      track,
      trackColor: trackColors[track] || '#c4b5fd',
      subtopicName: nextSub?.subtopicName || 'All done! 🎉',
      topicName: nextSub?.topicName || '',
      isToday,
      isPast,
      isCompleted: isPast && hasSession
    });
  }

  return weekPlan;
}

// ─── Get Streak Data ─────────────────────────────────────────
// Returns { thisWeek: boolean[7], daysStudied: number }
// for the current Mon-Sun week.

export function getStreakData(sessionLogs = []) {
  const today = new Date();
  const todayDayIndex = today.getDay(); // 0 = Sun

  // Get Monday of current week
  const monday = new Date(today);
  const diffToMonday = (todayDayIndex === 0) ? -6 : 1 - todayDayIndex;
  monday.setDate(today.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const thisWeek = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    const dayStr = day.toDateString();

    const studied = sessionLogs.some(log => {
      if (!log.createdAt) return false;
      const logDate = log.createdAt.toDate ? log.createdAt.toDate() : new Date(log.createdAt);
      return logDate.toDateString() === dayStr;
    });

    thisWeek.push(studied);
  }

  const daysStudied = thisWeek.filter(Boolean).length;
  return { thisWeek, daysStudied };
}

// ─── Get Heatmap Data ─────────────────────────────────────────
// Returns a map of dateStr → totalMinutes for the past 365 days.
// Used by the canvas heatmap in History screen.

export function getHeatmapData(sessionLogs = []) {
  const heatmap = {};

  for (const log of sessionLogs) {
    if (!log.createdAt || !log.durationMins) continue;
    const logDate = log.createdAt.toDate ? log.createdAt.toDate() : new Date(log.createdAt);
    const key = logDate.toDateString();
    heatmap[key] = (heatmap[key] || 0) + (log.durationMins || 0);
  }

  return heatmap;
}

// ─── Format Duration ─────────────────────────────────────────
// Converts minutes → readable string. Used across screens.

export function formatDuration(mins) {
  if (!mins) return '0m';
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

// ─── Get Session Duration Options ────────────────────────────
// Returns the duration buttons shown on the Session start screen.

export const SESSION_DURATIONS = [
  { label: '30 min', value: 30 },
  { label: '1 hr',   value: 60 },
  { label: '2 hrs',  value: 120 },
  { label: '3 hrs',  value: 180 },
  { label: '4 hrs',  value: 240 },
  { label: 'Custom', value: 'custom' }
];
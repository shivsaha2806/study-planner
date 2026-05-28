// auth.js — MyStudyPlanner
// Google Sign-in, Sign-out, Auth state observer.
// Triggers seedCurriculum on first login.
// Shows/hides UI chrome (top-bar, bottom-nav).

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

import { auth, googleProvider, seedCurriculum } from './firebase.js';

// ─── Exported current user (reactive) ─────────────────────────
// app.js reads this to know who is logged in.
export let currentUser = null;

// ─── Sign In ──────────────────────────────────────────────────
export async function signInWithGoogle() {
  const btn = document.getElementById('google-signin-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Signing in...';
  }

  try {
    await signInWithPopup(auth, googleProvider);
    // onAuthStateChanged handles everything after this
  } catch (err) {
    console.error('Sign-in failed:', err);
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Continue with Google';
    }
    if (err.code !== 'auth/popup-closed-by-user') {
      showAuthError('Sign-in failed. Please try again.');
    }
  }
}

// ─── Sign Out ─────────────────────────────────────────────────
export async function signOutUser() {
  try {
    await signOut(auth);
    // onAuthStateChanged handles redirect to #login
  } catch (err) {
    console.error('Sign-out failed:', err);
  }
}

// ─── Auth State Observer ──────────────────────────────────────
// Runs on every auth change (login, logout, page refresh).
// This is the single source of truth for auth state.

onAuthStateChanged(auth, async (user) => {
  currentUser = user;

  if (user) {
    // ── Logged in ─────────────────────────────────────────────
    showAppChrome(user);

    // Update avatar
    const avatar = document.getElementById('user-avatar');
    if (avatar && user.photoURL) {
      avatar.src = user.photoURL;
      avatar.alt = user.displayName || 'User';
    }

    // Update settings user info
    const settingsInfo = document.getElementById('settings-user-info');
    if (settingsInfo) {
      settingsInfo.innerHTML = `
        <img src="${user.photoURL || ''}" alt="avatar" class="settings-avatar">
        <div>
          <div class="settings-name">${user.displayName || 'User'}</div>
          <div class="settings-email">${user.email || ''}</div>
        </div>
      `;
    }

    // Seed curriculum if first login (firebase.js checks internally)
    try {
      await seedCurriculum(user.uid, user);
    } catch (err) {
      console.error('Seed error:', err);
    }

    // Navigate to dashboard (or keep current hash if already on a screen)
    const hash = window.location.hash;
    const validHashes = ['#dashboard', '#session', '#topics', '#week', '#history', '#rewards'];
    if (!hash || hash === '#login' || !validHashes.includes(hash)) {
      navigate('#dashboard');
    } else {
      navigate(hash);
    }

    // Dispatch event so app.js can load data
    window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: user }));

  } else {
    // ── Logged out ────────────────────────────────────────────
    currentUser = null;
    hideAppChrome();
    navigate('#login');
  }
});

// ─── Navigation Helper ────────────────────────────────────────
// Central navigate function — show correct screen, update hash,
// highlight active nav item.

export function navigate(hash) {
  // Normalise
  if (!hash.startsWith('#')) hash = '#' + hash;

  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

  // Show target screen
  const target = document.querySelector(hash);
  if (target) {
    target.classList.add('active');
  } else {
    // Fallback to dashboard
    const dash = document.querySelector('#dashboard');
    if (dash) dash.classList.add('active');
    hash = '#dashboard';
  }

  // Update browser hash without triggering hashchange loop
  if (window.location.hash !== hash) {
    history.replaceState(null, '', hash);
  }

  // Update bottom-nav active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === hash) {
      item.classList.add('active');
    }
  });

  // Update top-bar title
  const titles = {
    '#dashboard': 'MyStudyPlanner',
    '#session':   'Study Session',
    '#topics':    'Topics',
    '#week':      'Week Planner',
    '#history':   'History',
    '#rewards':   'Rewards'
  };
  const titleEl = document.getElementById('top-bar-title');
  if (titleEl) titleEl.textContent = titles[hash] || 'MyStudyPlanner';

  // Dispatch event so app.js can render the screen
  window.dispatchEvent(new CustomEvent('screenChanged', { detail: { hash } }));
}

// ─── Show / Hide App Chrome ───────────────────────────────────

function showAppChrome(user) {
  const topBar = document.getElementById('top-bar');
  const bottomNav = document.getElementById('bottom-nav');
  if (topBar) topBar.classList.remove('hidden');
  if (bottomNav) bottomNav.classList.remove('hidden');
}

function hideAppChrome() {
  const topBar = document.getElementById('top-bar');
  const bottomNav = document.getElementById('bottom-nav');
  if (topBar) topBar.classList.add('hidden');
  if (bottomNav) bottomNav.classList.add('hidden');
}

// ─── Error Display ─────────────────────────────────────────────

function showAuthError(msg) {
  const el = document.getElementById('login-error');
  if (el) {
    el.textContent = msg;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 4000);
  }
}

// ─── Wire up login button ──────────────────────────────────────
// Runs after DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
  // Login button
  const signinBtn = document.getElementById('google-signin-btn');
  if (signinBtn) {
    signinBtn.addEventListener('click', signInWithGoogle);
  }

  // Logout button (inside settings modal)
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      closeSettingsModal();
      await signOutUser();
    });
  }

  // Avatar button → open settings modal
  const avatarBtn = document.getElementById('avatar-btn');
  if (avatarBtn) {
    avatarBtn.addEventListener('click', openSettingsModal);
  }

  // Settings close button
  const settingsCloseBtn = document.getElementById('settings-close-btn');
  if (settingsCloseBtn) {
    settingsCloseBtn.addEventListener('click', closeSettingsModal);
  }

  // Close settings modal on overlay click
  const settingsModal = document.getElementById('settings-modal');
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) closeSettingsModal();
    });
  }

  // Bottom nav links
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      if (href) navigate(href);
    });
  });

  // Hash change (browser back/forward)
  window.addEventListener('hashchange', () => {
    if (currentUser) {
      navigate(window.location.hash || '#dashboard');
    }
  });
});

// ─── Settings Modal ───────────────────────────────────────────

export function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('hidden');
}

export function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
}
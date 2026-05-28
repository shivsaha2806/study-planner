// firebase.js — MyStudyPlanner
// Firebase init + Firestore seed on first login.
// Imported by auth.js and app.js.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { CURRICULUM } from './curriculum.js';

// ─── Firebase Config ──────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCqN0pNGlkluhG1FTzjW6OWoid5oYiv7wA",
  authDomain: "gen-ai-roadmap.firebaseapp.com",
  projectId: "gen-ai-roadmap",
  storageBucket: "gen-ai-roadmap.firebasestorage.app",
  messagingSenderId: "788228079112",
  appId: "1:788228079112:web:18b43b6905848e36b45bbd",
  measurementId: "G-GW9L0DQLES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// ─── Seed Curriculum ─────────────────────────────────────────
// Called once on first Google login.
// Checks if progress/{userId} exists → if not → seeds default data.
// Never overwrites existing progress.

export async function seedCurriculum(userId, user) {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    // Already seeded — skip
    if (progressSnap.exists()) return;

    // ── Build progress object from CURRICULUM ─────────────────
    const progressData = {};

    for (const track of CURRICULUM) {
      progressData[track.id] = {};

      for (const topic of track.topics) {
        const subtopicsData = {};

        for (const subtopic of topic.subtopics) {
          const subSubTopicsData = {};

          for (const sub of subtopic.subSubTopics) {
            subSubTopicsData[sub.id] = {
              status: 'not_started',
              completedAt: null
            };
          }

          subtopicsData[subtopic.id] = {
            status: 'not_started',
            needsRevision: false,
            completedAt: null,
            revisedAt: null,
            subSubtopics: subSubTopicsData,
            customResources: [],
            personalNote: ''
          };
        }

        progressData[track.id][topic.id] = {
          status: 'not_started',
          completedAt: null,
          subtopics: subtopicsData
        };
      }
    }

    // ── Default weekly schedule ───────────────────────────────
    const defaultWeeklyOverride = {
      mon: 'frontend',
      tue: 'frontend',
      wed: 'ai',
      thu: 'frontend',
      fri: 'frontend',
      sat: 'ai',
      sun: 'java'
    };

    // ── Write all 3 documents in parallel ────────────────────
    await Promise.all([

      // progress/{userId}
      setDoc(progressRef, progressData),

      // users/{userId}
      setDoc(doc(db, 'users', userId), {
        name: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        totalPoints: 0,
        jarBalance: 0,
        notificationTime: '21:00',
        notificationEmail: user.email || '',
        emailjsPublicKey: '',
        emailjsServiceId: '',
        emailjsTemplateId: '',
        weeklyOverride: defaultWeeklyOverride,
        streak: {
          thisWeek: [false, false, false, false, false, false, false],
          lastStudied: null
        },
        badges: [],
        createdAt: serverTimestamp()
      }),

      // rewards/{userId}
      setDoc(doc(db, 'rewards', userId), {
        jarBalance: 0,
        topicsCompletedCount: 0,
        items: []
      })

    ]);

    console.log('✅ Curriculum seeded successfully for', userId);

  } catch (err) {
    console.error('❌ Seed failed:', err);
    throw err;
  }
}

// ─── Firestore Helpers ────────────────────────────────────────
// Reusable getDoc/setDoc shortcuts used by app.js

export async function getUserData(userId) {
  const snap = await getDoc(doc(db, 'users', userId));
  return snap.exists() ? snap.data() : null;
}

export async function getProgressData(userId) {
  const snap = await getDoc(doc(db, 'progress', userId));
  return snap.exists() ? snap.data() : null;
}

export async function getRewardsData(userId) {
  const snap = await getDoc(doc(db, 'rewards', userId));
  return snap.exists() ? snap.data() : null;
}

export async function getSessionLogs(userId) {
  // Import collection + getDocs only when needed (lazy)
  const { collection, getDocs, orderBy, query, limit } =
    await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

  const logsRef = collection(db, 'sessions', userId, 'logs');
  const q = query(logsRef, orderBy('createdAt', 'desc'), limit(50));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
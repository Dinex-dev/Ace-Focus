import * as firebase from 'firebase/app';
import 'firebase/auth';

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_APP_FIREBASE_APIKEY,
  authDomain: env.VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_FIREBASE_APP_ID,
}

const app = firebase.initializeApp(firebaseConfig);

export default app;
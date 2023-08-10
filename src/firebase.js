import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAuth } from 'firebase/auth'; 

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA0TTL5P0Qs_BXJki_yiU8agnNWeLXw8wQ',
  authDomain: 'auth-development-72e77.firebaseapp.com',
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = getAuth()
export default app

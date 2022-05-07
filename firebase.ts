// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXQPef9vhYKH1Ac4sAR5ONrgVrKhI9GSQ',
  authDomain: 'netflix-build-18975.firebaseapp.com',
  projectId: 'netflix-build-18975',
  storageBucket: 'netflix-build-18975.appspot.com',
  messagingSenderId: '352060653422',
  appId: '1:352060653422:web:709d4b8d131603e3b3cb7f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

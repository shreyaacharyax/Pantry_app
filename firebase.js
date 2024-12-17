import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA9_m0ZjR1pamGyzCFvz0daRhc6Oo1txT8",
  authDomain: "newnewpantry.firebaseapp.com",
  projectId: "newnewpantry",
  storageBucket: "newnewpantry.firebasestorage.app",
  messagingSenderId: "127602558374",
  appId: "1:127602558374:web:ed7fc6191038a4ba04bb67",
  measurementId: "G-Q6P7YWSK43"
};
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore }


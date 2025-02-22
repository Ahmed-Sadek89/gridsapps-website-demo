import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';

const projectConfig = {
  apiKey: "AIzaSyAZ88lt21QzbWyVMDkaFUxX5ZTEcv_pCZs",
  authDomain: "mo-briefs.firebaseapp.com",
  projectId: "mo-briefs",
  storageBucket: "mo-briefs.appspot.com",
  messagingSenderId: "207215276550",
  appId: "1:207215276550:web:9ce1387a974f5df6bc8987",
}

const app = initializeApp(projectConfig);
const db = getFirestore(app);

export async function loadStyles() {
  const docRef = await getDoc(doc(db, 'scripts', 'gridsapps'));
  return docRef.data();
}

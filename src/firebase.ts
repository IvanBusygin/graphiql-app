import { FirebaseError, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const handleError = (err: FirebaseError) => {
  const errorCode = err.code.substring(5);
  const result = () => {
    switch (errorCode) {
      case 'email-already-in-use':
        return 'emailAlreadyInUse';
      case 'invalid-email':
        return 'invalidEmail';
      case 'user-not-found':
        return 'userNotFound';
      case 'wrong-password':
        return 'wrongPassword';
      case 'user-token-expired':
        return 'userTokenExpired';
      case 'too-many-requests':
        return 'tooManyRequests';
      case 'user-disabled':
        return 'userDisabled';
      default:
        return 'default';
    }
  };
  throw result();
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    handleError(err as FirebaseError);
  }
};

const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    handleError(err as FirebaseError);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    handleError(err as FirebaseError);
  }
};

const logout = () => {
  try {
    signOut(auth);
  } catch (err) {
    handleError(err as FirebaseError);
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

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
        return 'Этот адрес электронной почты уже зарегистрирован в системе.';
      case 'invalid-email':
        return 'Некорректный формат адреса электронной почты.';
      case 'user-not-found':
        return 'Пользователь с таким адресом электронной почты не найден в системе.';
      case 'wrong-password':
        return 'Неверный пароль пользователя.';
      case 'user-token-expired':
        return 'Срок действия токена пользователя истек.';
      case 'too-many-requests':
        return 'Превышено количество запросов. Попробуйте позже.';
      case 'user-disabled':
        return 'Пользователь отключен в системе.';
      default:
        return 'Что-то пошло не так ¯\\_(ツ)_/¯';
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

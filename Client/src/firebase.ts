import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNG_qGMvTHCFwOaD-ae0n5jiZtke54Dvo',
  authDomain: 'elpahtronics.firebaseapp.com',
  projectId: 'elpahtronics',
  storageBucket: 'elpahtronics.appspot.com',
  messagingSenderId: '201919317104',
  appId: '1:201919317104:web:3743db4228e1e20c6ba0b5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

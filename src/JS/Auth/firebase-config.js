import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBfHUBTXEtMYyClrSoLU0xO72yblPjOiXA',
  authDomain: 'bookshelf-b5148.firebaseapp.com',
  projectId: 'bookshelf-b5148',
  storageBucket: 'bookshelf-b5148.appspot.com',
  messagingSenderId: '955761870858',
  appId: '1:955761870858:web:48b2843de993f88216f7f3',
};

export const app = initializeApp(firebaseConfig);

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// https://firebase.google.com/docs/web/setup#available-libraries
import '../Forms/handleForm';

import { app as firebase } from './firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Notify } from 'notiflix';
import { signedUserUI } from './signedUserUI';
import { unsignedUserUI } from './unsignedUserUI';
import { closeModalStart } from '../modal-start';

Notify.init({
  position: 'center-top',
});

// Get a list of books from your database
const db = getFirestore(firebase);

async function getBooks(db) {
  const booksCol = collection(db, 'books');
  const bookSnapshot = await getDocs(booksCol);
  const bookList = bookSnapshot.docs.map(doc => doc.data());
  return bookList;
}

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

const signUpForm = document.querySelector('.form-sign-up');
const signInForm = document.querySelector('.form-sign-in');
const logOutBtn = document.querySelector('.btn-logout');
const logOutBtnMobile = document.querySelector('.mobile-btn-log');

signUpForm.addEventListener('submit', handleSignUp);
signInForm.addEventListener('submit', handleSignIn);
logOutBtn.addEventListener('click', signOutUser);
logOutBtnMobile.addEventListener('click', signOutUser);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('user logged in');
    signedUserUI();
    return;
  }

  unsignedUserUI();
  console.log('user not logged in');
});

const signUpUser = async () => {
  const email = inputEmail.value;
  const password = inputPassword.value;

  const user = await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

function handleSignUp(e) {
  e.preventDefault();

  const name = signUpForm.elements.name.value;
  const email = signUpForm.elements.email.value;
  const password = signUpForm.elements.password.value;

  console.log(name, email, password);

  signUp(email, password);
}

function handleSignIn(e) {
  e.preventDefault();

  const name = signInForm.elements.name.value;
  const email = signInForm.elements.email.value;
  const password = signInForm.elements.password.value;

  console.log(name, email, password);

  signIn(email, password);
}

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Handle successful sign-up
      const user = userCredential.user;
      Notify.success('Signed up!');
      closeModalStart();
    })
    .catch(error => {
      // Handle sign-up error
      // console.log('Sign-up error:', error.code);
      Notify.failure(error.code);
    });
}

export function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Handle successful sign-in
      const user = userCredential.user;
      // console.log('Signed In:', user);
      Notify.success('Signed In!');
      closeModalStart();
    })
    .catch(error => {
      // Handle sign-up error
      console.log('Sign-up error:', error);
      Notify.failure(error.code);
    });
}

export function signOutUser() {
  signOut(auth)
    .then(() => {
      Notify.success('Logged Out!');
    })
    .catch(error => {
      Notify.failure(error.code);
      // console.error('Logout error:', error);
    });
}

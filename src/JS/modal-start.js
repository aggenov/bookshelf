// import { parsData, USER_KEY } from './autorisation';

const btnOpenStart = document.querySelector('.btn-signup');
const btnOpenStartMobile = document.querySelector('.btn-signup-mobile-menu');
const backdropStart = document.querySelector('.backdrop-start');
const btnCloseStart = document.querySelector('.btn-close-modal');

btnOpenStart.addEventListener('click', openModalStart);
btnOpenStartMobile.addEventListener('click', openModalStart);

// import { USER_KEY } from './autorisation';
backdropStart.addEventListener('click', event => {
  if (event.target.matches('.backdrop-start')) {
    closeModalStart();
  }
});
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeModalStart();
  }
});

function openModalStart() {
  backdropStart.classList.remove('is-hidden');
  btnCloseStart.addEventListener('click', closeModalStart);
}
export function closeModalStart() {
  form.reset();
  backdropStart.classList.add('is-hidden');
  btnCloseStart.removeEventListener('click', closeModalStart);
}

// //
const form = document.querySelector('.form-start');
// const { name, email, password, button } = form;

// //______________________________________________
// const USER_DATA = {
//   name: 'Alex',
//   email: 'user@mail.com',
//   password: 'secret',
// };
// //______________________________________________
// if (parsData) {
//   form.elements.name.value = parsData.userName;
//   form.elements.email.value = parsData.userEmail;
//   form.elements.password.value = parsData.userPassword;
// }

// // form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();
//   if (JSON.parse(localStorage.getItem(USER_KEY))) {
//     //

//     // form.reset();
//     return;
//   }
//   if (
//     form.elements.name.value !== USER_DATA.name ||
//     form.elements.email.value !== USER_DATA.email ||
//     form.elements.password.value !== USER_DATA.password
//   ) {
//     alert('Введіть правільні данні');
//     return;
//   }

//   const formInput = {
//     userName: form.elements.name.value,
//     userEmail: form.elements.email.value,
//     userPassword: form.elements.password.value,
//   };
//   localStorage.setItem(USER_KEY, JSON.stringify(formInput));
// }

const form = document.querySelector('.form-start');

const btnOpenStart = document.querySelector('.btn-signup');
const backdropStart = document.querySelector('.backdrop-start');
const btnCloseStart = document.querySelector('.btn-close-modal');
btnOpenStart.addEventListener('click', openModalStart);

function openModalStart() {
  backdropStart.classList.remove('is-hidden');
  btnCloseStart.addEventListener('click', closeModalStart);
}
function closeModalStart() {
  backdropStart.classList.add('is-hidden');
  btnCloseStart.removeEventListener('click', closeModalStart);
}

const USER_KEY = 'USER_KEY';
const { name, email, password, button } = form;
const starData = localStorage.getItem(USER_KEY);
const parsData = JSON.parse(starData);
//______________________________________________

// if (parsData) {
//   form.elements.email.value = parsData.userEmail;
//   form.elements.password.value = parsData.userPassword;
//   form.elements.email.disabled = true;
//   form.elements.password.disabled = true;
//   form.elements.button.textContent = 'logout';
// }

// form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();
//   if (JSON.parse(localStorage.getItem(LOCAL_KEY))) {
//     form.elements.email.disabled = false;
//     form.elements.password.disabled = false;
//     form.elements.button.textContent = 'login';

//     localStorage.removeItem(LOCAL_KEY);
//     form.reset();
//     return;
//   }
//   if (
//     form.elements.email.value !== USER_DATA.email ||
//     form.elements.password.value !== USER_DATA.password
//   ) {
//     alert('Введіть правільні данні');
//     return;
//   }
//   const formInput = {
//     userEmail: form.elements.email.value,
//     userPassword: form.elements.password.value,
//   };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formInput));
//   form.elements.email.disabled = true;
//   form.elements.password.disabled = true;
//   form.elements.button.textContent = 'logout';
// }

//______________________________________________
// const formInput = document.querySelector('.form-imput');

form.addEventListener('submit', onclickInput);

function onclickInput(evt) {
  evt.preventdefault();
  console.dir(form);
}

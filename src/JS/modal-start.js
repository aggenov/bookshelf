const btnOpenStart = document.querySelector('.btn-signup');
const backdropStart = document.querySelector('.backdrop-start');
const btnCloseStart = document.querySelector('.btn-close-modal');

btnOpenStart.addEventListener('click', openModalStart);
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
function closeModalStart() {
  backdropStart.classList.add('is-hidden');
  btnCloseStart.removeEventListener('click', closeModalStart);
}

const form = document.querySelector('.form-start');

const USER_KEY = 'USER_KEY';
const { name, email, password, button } = form;
const starData = localStorage.getItem(USER_KEY);
const parsData = JSON.parse(starData);
//______________________________________________
const USER_DATA = {
  name: Alex,
  email: 'user@mail.com',
  password: 'secret',
};
//______________________________________________
if (parsData) {
  form.elements.name.value = parsData.userName;
  form.elements.email.value = parsData.userEmail;
  form.elements.password.value = parsData.userPassword;
  form.elements.name.disabled = true;
  form.elements.email.disabled = true;
  form.elements.password.disabled = true;
  // form.elements.button.textContent = 'logout';
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  if (JSON.parse(localStorage.getItem(USER_KEY))) {
    form.elements.name.disabled = false;
    form.elements.email.disabled = false;
    form.elements.password.disabled = false;
    form.elements.button.textContent = 'login';

    localStorage.removeItem(USER_KEY);
    form.reset();
    return;
  }
  if (
    form.elements.name.value !== USER_DATA.name ||
    form.elements.email.value !== USER_DATA.email ||
    form.elements.password.value !== USER_DATA.password
  ) {
    alert('Введіть правільні данні');
    return;
  }
  const formInput = {
    userName: form.elements.name.value,
    userEmail: form.elements.email.value,
    userPassword: form.elements.password.value,
  };
  localStorage.setItem(USER_KEY, JSON.stringify(formInput));
  form.elements.name.disabled = true;
  form.elements.email.disabled = true;
  form.elements.password.disabled = true;
  form.elements.button.textContent = 'logout';
}

//______________________________________________
// const formInput = document.querySelector('.form-imput');

// form.addEventListener('submit', onclickInput);

// function onclickInput(evt) {
//   evt.preventdefault();
//   console.dir(form);
// }

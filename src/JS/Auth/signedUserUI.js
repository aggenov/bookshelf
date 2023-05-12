const headerNav = document.querySelector('.header-nav');
const signUpBtn = document.querySelector('.btn-signup');
const userBtn = document.querySelector('.btn-user');

export function signedUserUI() {
  headerNav.style.display = 'flex';
  signUpBtn.style.display = 'none';
  userBtn.style.display = 'flex';
}

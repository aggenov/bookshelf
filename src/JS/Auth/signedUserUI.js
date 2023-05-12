const headerNav = document.querySelector('.header-nav');
const signUpBtn = document.querySelector('.btn-signup');
const userBtn = document.querySelector('.btn-user');
const logOutBtnMobile = document.querySelector('.mobile-btn-log');
const mobileNavList = document.querySelector('.mobile-nav-list')
const mobileSignUp = document.querySelector('.btn-signup-mobile-menu')

export function signedUserUI() {
  headerNav.style.display = 'flex';
  signUpBtn.style.display = 'none';
  userBtn.style.display = 'flex';
  mobileNavList.style.display = 'flex'

  logOutBtnMobile.style.display = 'flex'
  mobileSignUp.style.display = 'none'
}

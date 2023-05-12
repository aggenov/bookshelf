const headerNav = document.querySelector('.header-nav');
const signUpBtn = document.querySelector('.btn-signup');
const userBtn = document.querySelector('.btn-user');
const logOutBtnMobile = document.querySelector('.mobile-btn-log');
const mobileNavList = document.querySelector('.mobile-nav-list')
const mobileSignUp = document.querySelector('.btn-signup-mobile-menu')

export function unsignedUserUI() {
  headerNav.style.display = 'none';
  signUpBtn.style.display = 'flex';
  userBtn.style.display = 'none';
  logOutBtnMobile.style.display = 'none';
  mobileNavList.style.display = 'none'
  mobileSignUp.style.display = 'flex'
}

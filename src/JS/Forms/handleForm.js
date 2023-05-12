const signUpForm = document.querySelector('.form-sign-up');
const signInForm = document.querySelector('.form-sign-in');

document.addEventListener('click', e => {
  if (e.target.matches('.sign-up')) {
    const ref = e.target;
    ref.classList.add('sign-is-active');
    ref.nextElementSibling.classList.remove('sign-is-active');

    signUpForm.style.display = 'flex';
    // signInForm.style.display = 'none';
    signInForm.classList.add('display-none');

    return;
  }

  if (e.target.matches('.sign-in')) {
    const ref = e.target;
    ref.classList.add('sign-is-active');
    ref.previousElementSibling.classList.remove('sign-is-active');

    signUpForm.style.display = 'none';
    // signInForm.style.display = 'flex';
    signInForm.classList.remove('display-none');

    return;
  }
});

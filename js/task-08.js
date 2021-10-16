const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log('submit');

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formValue = `Email: ${email.value}, Password: ${password.value}`;
  console.log(formValue);
  event.currentTarget.reset();
}

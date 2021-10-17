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
  const formValue = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log('formValue:', formValue);
  event.currentTarget.reset();
}

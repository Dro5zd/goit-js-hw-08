import _ from 'lodash';

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const submitBtn = document.querySelector('button[type = submit]');

const savedSettings = localStorage.getItem('feedback-form-state');

try {
  const parsedSettings = JSON.parse(savedSettings);
  emailInput.value = parsedSettings.email;
  messageInput.value = parsedSettings.message;
} catch (error){
  console.log(error.email);
  console.log(error.message);
}
// if (savedSettings !== null && savedSettings !== '') {
//   const parsedSettings = JSON.parse(savedSettings);
//   emailInput.value = parsedSettings.email;
//   messageInput.value = parsedSettings.message;
// }

let obj = {
  email: '' || emailInput.value,
  message: '' || messageInput.value,
};

if (emailInput.value === '' || messageInput.value === '') {
  submitBtn.setAttribute('disabled', 'disabled');
}

function onChangeHandler(event) {
  obj[event.target.name] = event.target.value;

  if (emailInput.value !== '' && messageInput.value !== '') {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onSubmitHandler(event) {
  event.preventDefault();
  console.log(obj);
  localStorage.setItem('feedback-form-state', '');
  event.currentTarget.reset();
}

form.addEventListener('input', _.throttle(onChangeHandler, 500));
form.addEventListener('submit', onSubmitHandler);

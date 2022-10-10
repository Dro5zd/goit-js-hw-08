import _ from 'lodash';

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const submitBtn = document.querySelector('button[type = submit]');

let obj = {
  email: '',
  message: '',
};

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings) || obj;
emailInput.value = parsedSettings.email;
messageInput.value = parsedSettings.message;

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

import _ from 'lodash';

const form = document.querySelector('form');
const emailInput = document.querySelector('[name = email]');
const messageInput = document.querySelector('[name = message]');
// const submitBtn = document.querySelector('button[type = submit]');

let obj = {
  email: '',
  message: '',
};

const savedSettings = localStorage.getItem('feedback-form-state');

if (savedSettings !== '') {
  const parsedSettings = JSON.parse(savedSettings);
  emailInput.value = parsedSettings.email;
  messageInput.value = parsedSettings.message;
}

function onChangeHandler() {
  obj.email = emailInput.value;
  obj.message = messageInput.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function onSubmitHandler(event) {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(obj);
  localStorage.setItem('feedback-form-state', '');
  event.currentTarget.reset();
}


form.addEventListener('input', _.throttle(onChangeHandler, 500));
form.addEventListener('submit', onSubmitHandler);

import throttle from 'lodash.throttle';

const form = document.querySelector('#feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const formInput = {};

function onSubmit(event) {
  event.preventDefault();
  console.log(formInput);
  event.currentTarget.reset(); //reset
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  event.preventDefault();
  formInput[event.target.name] = event.target.value;

  if (event.target.value === '' || localStorage.getItem(STORAGE_KEY) === '') {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
  }
}

function saveInput() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    const email = data.email;
    const message = data.message;
    document.querySelector('input[name="email"]').value = email;
    document.querySelector('textarea[name="message"]').value = message;
  }
}
saveInput();

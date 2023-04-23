import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
console.log(formEl);
console.log(document);

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

const formInput = {};

function onSubmit(event) {
  event.preventDefault();
  console.log(formInput);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all the fields!');
  }
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

if (localStorage.getItem(STORAGE_KEY)) {
  saveInput();
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

function checkLocalStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
      const email = data.email;
      const message = data.message;
      document.querySelector('input[name="email"]').value = email;
      document.querySelector('textarea[name="message"]').value = message;
    }
  }
}

checkLocalStorage();

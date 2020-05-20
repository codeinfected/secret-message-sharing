const form = document.querySelector('form');
const messageForm = document.querySelector('#message-form');
const messageShow = document.querySelector('#message-show');

const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  messageForm.classList.add('hide');
  messageShow.classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  messageForm.classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});

const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  if (username == 'admin' && password == 'admin') {

    window.location.href = 'user.html';
  } else {

    errorMessage.textContent = 'Login ou senha incorretos.';
  }
});

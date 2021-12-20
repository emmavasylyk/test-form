const buttonSubmit = document.getElementById('button-submit');
buttonSubmit.addEventListener('click', func);
let result;

function func(e) {
  e.preventDefault();
  const number1 = Number(document.getElementById('number1').value);
  const number2 = Number(document.getElementById('number2').value);
  const operator = document.getElementById('operator').value;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 === 0 || number1 === 0) {
        return alert('На ноль делить нельзя!');
      } else {
        result = number1 / number2;
      }
      break;

    default:
      break;
  }
  document.getElementById('result').innerHTML = Math.round(result);
  clear();
}

function clear() {
  document.getElementById('number1').value = '';
  document.getElementById('number2').value = '';
}

// Вызов модального окна

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

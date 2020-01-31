console.log('hola')

var log = (message) => console.log(message)

var inputs = document.querySelectorAll('input');

var inputs = document.querySelectorAll('.input-wraper::before');


var modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', (e) => {
  log(e);
  const modal = e.target.parentNode
  modal.parentNode.removeChild(modal);
})

'use strict';
let allModels = document.querySelectorAll('.show-modal');
let cancleBtn = document.querySelector('.close-modal');
let modalMain = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
const showModal = () => {
  modalMain.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modalMain.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < allModels.length; i++) {
  allModels[i].addEventListener('click', showModal);
}
cancleBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalMain.classList.contains('hidden')) {
    closeModal();
  }
});

// const pug = require('pug');
// const compiledFunction = pug.compileFile('index.pug');
// pug.renderFile('template.pug');

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const gearType = document.getElementById('gearType');
const bodyType = document.getElementById('bodyType');

const optionsContainer = document.querySelectorAll('.options-container');
const optionsList = document.querySelectorAll('.option');

optionsList.forEach((i) => {
  i.addEventListener('click', () => {
    console.log(i);
    selected.innerHTML = i.querySelector('label').innerHTML;
    optionsContainer.forEach((el) => {
      el.addEventListener('onClick', () => {});
    });
  });
});

function toggleSelect(item) {
  console.log(item);
  item.addEventListener('click', () => {
    console.log(item.querySelector('.options-container'));
  });
  // optionsContainer.classList.toggle('active');
}
toggleSelect(gearType);
toggleSelect(bodyType);

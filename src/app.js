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

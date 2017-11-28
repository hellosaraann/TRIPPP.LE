var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('open sesame!');
  document
  .querySelector('body')
  .classList
  .toggle('js-nav-open');
});

var closeButton = document.querySelector('.js-close-nav');
closeButton.addEventListener('click', function(){
  console.log('tidy time!');
  document
    .querySelector('body')
  .classList
  .toggle('js-nav-open')
});

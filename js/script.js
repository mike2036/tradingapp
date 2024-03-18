let slides = document.querySelectorAll(
  '.reviews .flex .slides-container .slide'
);
let index = 0;

const nextCard = () => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
};

const previousCard = () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

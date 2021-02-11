
function initCarousel() {

  let position = 0;
  let slide_focus = 1;
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let slides = document.querySelector('.carousel__inner');

  if(slide_focus === 1) {
    left.style.display = 'none';
  } else {
    left.style.display = '';
  }

  let slides_num = 4;
  let width = slides.offsetWidth;

  left.onclick = function() {
    slide_focus--;
    position += width;
    if(slide_focus < 2) {
      left.style.display = 'none'
    } else {
      left.style.display = ''
    }

    slides.style.transform = `translateX(${position}px)`;
  };
  
  right.onclick = function() {
    slide_focus++;
    position -= width;

    if(slide_focus === (slides_num)) {
      right.style.display = 'none'
    } else {
      right.style.display = ''
    }

    slides.style.transform  = `translateX(${position}px)`;
  }
}
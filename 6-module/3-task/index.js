import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;


    this.elem = document.createElement('div');
    this.elem.className = 'carousel';
    
    let carousel_inner = document.createElement('div');
    carousel_inner.className = 'carousel__inner';

    for(let i = 0; i < this.slides.length; i++) {
         
    let element_slide = document.createElement('div');
    element_slide.className = 'carousel__slide';
    element_slide.dataId = 'penang-shrimp';

    element_slide.innerHTML = `
    <img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
    <span class="carousel__price">€${slides[i].price.toFixed(2)}</span>
    <div class="carousel__title">${slides[i].name}</div>
    <button type="button" class="carousel__button">
    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
    </div>
    `;

    this.onClick()
    
    // carousel_inner.innerHTML += element_slide;
    carousel_inner.append(element_slide);

    console.log(carousel_inner);

    }
    
    this.elem.append(carousel_inner);
    document.body.append(this.elem);

    // console.log(this.elem);

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

  let slides_num = this.slides.length;
  let width = slides.offsetWidth;

  left.onclick = function() {
    slide_focus--;
    position += width;
    if(slide_focus === 1) {
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

  onClick = () => {
    let event = new CustomEvent("product-add", {bubbles: true, detail: slides[i].id});
    element_slide.querySelector('.carousel__button').addEventListener('click', (e) => {
      this.elem.dispatchEvent(event);
    })
  }
}

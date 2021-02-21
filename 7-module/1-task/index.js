import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.className = 'ribbon';

    this.innerRender();
    this.categoryClick();
    this.buttonsClick();

  }
  innerRender = () => {
    let ribInner = document.createElement('nav');
    ribInner.className = 'ribbon__inner';
    for(let el of this.categories) {
      ribInner.innerHTML += `<a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>`
    }
    this.elem.append(ribInner);
  }

  categoryClick = () => {
    let items = this.elem.querySelectorAll('.ribbon__item');
    let element = this.elem;

    function catClick(e) {
      let event = new CustomEvent('ribbon-select', { 
        detail: this.dataset.id,
        bubbles: true
      })
      e.preventDefault();
      element.dispatchEvent(event);

      for(let el of items) {
        el.removeAttribute('.ribbon__item_active');
      }

      this.classList.toggle('.ribbon__item_active');
    }

    for(let el of items) {
      el.addEventListener('click', catClick);
    }

  }

  buttonsClick = () => {

    let ribInner = this.elem.querySelector('.ribbon__inner');

    this.elem.insertAdjacentHTML('afterbegin', `
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `)

    this.elem.insertAdjacentHTML('beforeend', `
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `)

    let scrollWidth = ribInner.scrollWidth;
    let scrollLeft = ribInner.scrollLeft;
    let clientWidth = ribInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth

    this.elem.querySelector('.ribbon__arrow_left').classList.toggle('ribbon__arrow_visible');

    this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', () => {
      ribInner.scrollBy(350, 0);
    })
    this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', () => {
      ribInner.scrollBy(-350, 0);
    })
  }
}

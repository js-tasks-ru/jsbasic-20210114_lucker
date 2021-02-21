import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.elem.className = 'card';
    this.elem.innerHTML = `
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `
    this.onClick()
  }
  onClick = () => {
      let event = new CustomEvent("product-add", {bubbles: true, detail: this.product.id})
      this.elem.querySelector('.card__button').addEventListener('click', (e) => {
      this.elem.dispatchEvent(event);
    });
  }
}

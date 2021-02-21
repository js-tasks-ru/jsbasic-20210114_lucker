import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.className = 'modal';
    this.elem.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
      </div>
    </div>
  </div>`

    this.keyDown();
  }
  keyDown = () => {
    document.body.addEventListener('keydown', (e) => {
      if(e.code === 'Escape') {
        this.close();
      }
    })
    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    })
  }

  open = () => {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }

  setTitle = (title) => {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }
  setBody = (node) => {
    this.elem.querySelector('.modal__body').append(node);
  }
  close = () => {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.elem.className = 'slider';
    this.elem.innerHTML = `
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>`

    this.steps = steps;
    this.value = value;

    this.stepsRender();
    this.onClick()
  }

  stepsRender = () => {
    let slideSteps = document.createElement('div');
    slideSteps.className = 'slider__steps';
    for(let i = 0; i < this.steps; i++) {
      let span = document.createElement('span');
      slideSteps.append(span);
    }
    this.elem.append(slideSteps);

    slideSteps.querySelector('span').className = 'slider__step-active';
  }

  onClick = () => {
    this.elem.addEventListener('click', (e) => {
      let left = e.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');

      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      let event = new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
      })
      this.elem.dispatchEvent(event);

      let spans = this.elem.querySelectorAll('span');

      for(let i = 0; i < spans.length; i++) {
        spans[i].classList.remove('slider__step-active');
      }

      spans[this.value].classList.add('slider__step-active')

    })
  }
}

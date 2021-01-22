let calculator = {
  numbers: {
    '1': 1,
    '2': 1,
  },
  read(one, two) {
    this.numbers['1'] = one;
    this.numbers['2'] = two;
  },
  sum() {
    return this.numbers['1'] + this.numbers['2'];
  },
  mul() {
    return this.numbers['1'] * this.numbers['2'];
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

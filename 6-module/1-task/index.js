/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 * 
 * 
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */

import createElement from "../../assets/lib/create-element";

export default class UserTable {
  constructor(rows) {

      let table = document.createElement('table');
      let tbody = document.createElement('tbody');
      table.innerHTML = `
      <thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
      </thead>`;

      for(let i = 0; i < rows.length; i++) {
           
      let element_tr = createElement('tr');

      element_tr.innerHTML = `
      <th>${rows[i].name}</th>
      <th>${rows[i].age}</th>
      <th>${rows[i].salary}</th>
      <th>${rows[i].city}</th>
      <th><button>X</button></th>`;


      tbody.innerHTML += element_tr;
      this.onClick();
      }
      table.append(tbody);
      document.body.append(table);
      this.elem = table;
  }
  onClick = () => {
    element_tr.querySelector('button').addEventListener('click', () => {
      this.closest('tr').remove();
    })
  }
  
}

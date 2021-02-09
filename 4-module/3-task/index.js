/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    // let table_DOM = table;
    // let tr_arr = table_DOM.querySelectorAll('tr');
    // for(let el of tr_arr) {
    //     if(!tr_arr[el].data-available.hasAttribute) {
    //         tr_arr[el].hidden = 'hidden';
    //     }
    //     else if(tr_arr[el].data-available) {
    //         tr_arr[el].classList.toggle('available');
    //     } else {
    //         tr_arr[el].classList.toggle('unavailable');
    //     }
    //     if(tr_arr[el].data-available) {
    //         tr_arr[el].classList.toggle('available');
    //     } else {
    //         tr_arr[el].classList.toggle('unavailable');
    //     }
    // }
    let table_DOM = table;
    let row = table_DOM.querySelectorAll('tr');
    let positionGender;
  let positionAge;
  let positionStatus;

  let classes = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable'
  }

  for (let i = 0; i < row[0].children.length; i++) {
    if (row[0].children[i].innerHTML === 'Age') {
      positionAge = i;

    }
    if (row[0].children[i].innerHTML === 'Gender') {
      positionGender = i;

    }
    if (row[0].children[i].innerHTML === 'Status') {
      positionStatus = i;

    }
  };

  for (let k = 1; k < row.length; k++) {
    let classGender = row[k].children[positionGender];
    
    classGender.parentNode.classList.toggle(classes[classGender.innerHTML]);

    let classAge = row[k].children[positionAge].innerHTML;
    
    if (classAge < 18) {
      classGender.parentNode.setAttribute('style', 'text-decoration: line-through');
    }

    let classStatus = row[k].children[positionStatus];
    
    if (classStatus.hasAttribute('data-available')) {
      let elem = classStatus.getAttribute('data-available');
      
      classStatus.parentNode.classList.toggle(classes[elem]);
    } else {
      classStatus.parentNode.hidden = true;
    }
  }

}


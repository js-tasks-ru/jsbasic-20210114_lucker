/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let table_DOM = table;
    let tr_arr = table_DOM.querySelectorAll('tr')
    let i = 0;
    for(let el in tr_arr) {
        try {
        let td_arr = tr_arr[el].querySelectorAll('td');
        td_arr[i].style.backgroundColor = 'red';
        i++
        } catch{}
    }
}

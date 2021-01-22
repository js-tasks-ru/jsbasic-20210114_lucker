/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {

    let salaries_sum = 0;
    for(let key in salaries) {
      if((typeof salaries[key]) === 'number' && !isNaN(salaries[key]) && salaries[key] !== Infinity && salaries[key] !== -Infinity) {
        salaries_sum += salaries[key];
      }
    }

    return salaries_sum;
}

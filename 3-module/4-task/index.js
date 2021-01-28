/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let string = ``;
  let str = users.filter((user) => {
    return user.age <= age;
  })
  str = str.map((user) => {
    return user.name + ', ' + user.balance;
  })
  string = str.join(`\n`);
  return string;
}

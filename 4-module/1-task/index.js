/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let DOM = document.createElement('ul');
  for(let el in friends) {
    DOM.innerHTML += `<li>${friends[el].firstName + ' ' + friends[el].lastName}</li>`;
  }
  return DOM;
}

/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let array = users.map((num, index) => {
      return num.name;
    })

    return array;
}

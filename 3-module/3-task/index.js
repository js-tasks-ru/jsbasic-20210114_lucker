/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let goodString = str.split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');;
    
    return goodString;
}

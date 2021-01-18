/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let toLowStr = str.toLowerCase();
  if (toLowStr.indexOf('1xbet') !== -1 || toLowStr.indexOf('xxx') !== -1) {
    return true;
  } else {
    return false;
  }
}

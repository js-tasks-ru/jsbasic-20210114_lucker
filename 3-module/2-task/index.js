/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let array = arr.filter((num) => {
    return (num >= a && num <= b);
  })

  return array;
}

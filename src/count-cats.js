const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const flatArr = matrix.flat()
  const catCount = flatArr.reduce((acc, el) => {
    if(el === '^^') {
      acc++
    }
    return acc
  },0)
  return catCount
}

module.exports = {
  countCats
};

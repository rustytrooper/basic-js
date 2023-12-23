const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let sumBelowZero = 0;
  let arrLength;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i].length == 1) {
        arrLength = 1;
      }
      else if (matrix[i].length > matrix.length) {
        arrLength = matrix.length + 1;
      } else if (matrix.length === matrix[i].length) {
        arrLength = matrix.length;
      }
    }
  }

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break
      } else {
        sumBelowZero += matrix[j][i]
      }
    }
  }
  return sumBelowZero
}

module.exports = {
  getMatrixElementsSum
};

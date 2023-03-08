/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  // find sum of primary
  // find sum of secondary
  let left = 0, right = mat[0].length - 1, sum = 0, matIndex = 0;

  while (matIndex < mat.length) {
    // if pointer intersect
    if (left === right) {
      sum += mat[matIndex][left];
    } else {
      sum += mat[matIndex][left];
      sum += mat[matIndex][right];
    }
    left++;
    right--;
    matIndex++;
  }

  return sum;
};


let mat =  [
            [-1, -1, 0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]
            ];

console.log(diagonalSum(mat));
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


let mat = [[1,2,3],
           [4,5,6],
           [7,8,9]]

console.log(diagonalSum(mat));
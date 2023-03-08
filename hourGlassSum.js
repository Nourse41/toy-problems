function hourglassSum(mat) {
  let sum = 0;
  let flag = true;

  for (var i = 0; i < mat.length - 2; i++) {
      for (var j = 0; j < mat[i].length - 2; j++) {
        let hg = mat[i][j] + mat[i][j+1] + mat[i][j+2] +
        mat[i+1][j+1] + mat[i+2][j] + mat[i+2][j+1] + mat[i+2][j+2];

        if (flag) {
          flag = false;
          sum = hg;
        }
        sum = Math.max(sum, hg)
      }
  }
  return sum;
}

console.log(hourglassSum([
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]]
  ));



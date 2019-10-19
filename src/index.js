module.exports = function solveSudoku(matrix) {

  let checkRow = (matrix, row, num) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] === num) return false;
    }
    return true;
  };

  let checkColumn = (matrix, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][col] === num) return false;
    }
    return true;
  };

  let checkSection = (matrix, row, col, num) => {
    let startRow = row < 3 ? 0 : row < 6 ? 3 : 6;
    let startCol = col < 3 ? 0 : col < 6 ? 3 : 6;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (matrix[i][j] === num) return false;
      }
    }
    return true;
  }

  let combinedCheck = (matrix, row, col, num) => {
    if (!checkRow(matrix, row, num)) return false;
    if (!checkColumn(matrix, col, num)) return false;
    if (!checkSection(matrix, row, col, num)) return false;
    return true;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] !== 0) continue;
      for (let num = 1; num < 10; num++) {
        if (combinedCheck(matrix, i, j, num)) {
          matrix[i][j] = num;
          if (solveSudoku(matrix)) return matrix;
        }
      }
      matrix[i][j] = 0;
      return false;
    }
  }
  return true;
}

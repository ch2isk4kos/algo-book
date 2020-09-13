function hourglassSum(matrix) {
  const listOfSums = [];
  let maxHourglass = 0;

  for (let row = 0; row <= 3; row++) {
    console.log(matrix[row]);
    console.log("row: ", row);

    for (let col = 0; col <= 3; col++) {
      let sum = 0;

      sum += matrix[row][col];              // 1  2  3  4
      sum += matrix[row][col + 1];          // 3  5  7  9
      sum += matrix[row][col + 2];          // 6  9  12 15
      sum += matrix[row + 1][col + 1];      // 14 18 22 26
      sum += matrix[row + 2][col];          // 27 32 37 42
      sum += matrix[row + 2][col + 1];      // 41 47 53 59
      sum += matrix[row + 2][col + 2];      // 56 63 70 77

      console.log("sum: ", sum);

      listOfSums.push(sum);
      // console.log('list:', listOfSums);
    }
  }

  // loop over listOfSums and return greatest value
  maxHourglass = Math.max(...listOfSums);
  console.log("maxHourglass:", maxHourglass);

  return maxHourglass;
}

// 1 2 3
//   4
// 5 6 7

// [
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
// ]

hourglassSum([
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
]);

// 35

hourglassSum([
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
]);

// 203

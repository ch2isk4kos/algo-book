// **********************************************************
// ******************     SOLUTION 1    *********************
// **********************************************************

function jumpingOnClouds(array) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (i + 2 < array.length && array[i + 2] == 0) {
      i++;
    }
    count++;
  }

  console.log("count:", count);
  return count;
}

// **********************************************************
// ******************     SOLUTION 2    *********************
// **********************************************************

function jumpingOnClouds2(array) {
  let count = 0;
  let i = 0;

  while (true) {
    if (i + 2 < array.length && array[i + 2] == 0) {
      i += 2;
    } else if (i + 1 < array.length) {
      i++;
    } else {
      break;
    }
    count++;
  }

  console.log("count:", count);
  return count;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);   // 4
jumpingOnClouds([0, 0, 1, 1, 1, 1, 0]);   // 5
jumpingOnClouds([0, 0, 1, 1, 1, 1, 1]);   // 6
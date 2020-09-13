function minimumBribes(array) {
  let count = 0;

  for (let i = array.length - 1; i > -1; i--) {
    const correctNumber = i + 1;
    if (array[i] !== correctNumber) {
      if (i - 1 >= 0 && array[i - 1] === correctNumber) {
        array[i - 1] = array[i];
        array[i] = correctNumber;
        ++count;
      } else if (i - 2 > -1 && array[i - 2] === correctNumber) {
        array[i - 2] = array[i - 1];
        array[i - 1] = array[i];
        array[i] = correctNumber;
        count += 2;
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }
  console.log(count);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);    // 7
minimumBribes([1, 2, 3, 4, 5]);             // 0
minimumBribes([5, 4, 3, 2, 1]);             // Too chaotic
minimumBribes([2, 4, 6, 8, 10]);            // Too chaotic
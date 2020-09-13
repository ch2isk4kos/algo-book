function minimumSwaps(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(`ITERATION ${i}`);
    console.log("array before swap: ", array);

    const current = array[i];
    const compare = i + 1;

    if (current !== compare) {
      let swap;

      for (let j = i + 1; j < array.length; j++) {
        console.log(array, array[i], array[j]);

        if (array[j] === compare) {
          console.log("value to swap: ", array[j]);

          swap = j;
          break;
        }
      }
      console.log(`${array[swap]} swapped with: ${current}`);

      // swapping
      array[swap] = current;
      array[i] = compare;
      ++count;

      console.log(`swaps: ${count} | array after swap: [${array}]`);
      console.log("");
    }
  }
  return count;
}

minimumSwaps([4, 3, 1, 2]);     // 3
minimumSwaps([2, 3, 4, 1]);     // 3
minimumSwaps([3, 4, 1, 2]);     // 2
minimumSwaps([4, 1, 2, 3]);     // 3
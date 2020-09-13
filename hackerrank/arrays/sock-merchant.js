function sockMerchant(n, array) {
  let sorted = array.sort();
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    console.log(sorted[i], sorted[i + 1])

    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i++;
    }

    console.log('pairs ', pairs)
    console.log('********')
  }
  return `You have ${pairs} pairs of socks`;
}

sockMerchant(9, colors);                    // You have 3 pairs of socks
sockMerchant(10, colors2);                  // You have 4 pairs of socks
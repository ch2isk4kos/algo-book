function countingValleys(steps, string) {
  let valleys = 0;
  let seaLevel = 0;
  let status = false;

  for (let i = 0; i < steps - 1; i++) {
    console.log('step', string[i]);

    string[i] === 'U' ? seaLevel++ : seaLevel--;

    if (seaLevel < 0 && !status) {
      valleys++
      status = true;
    } else if (seaLevel >= 0 && status) {
      status = false;
    }
  }
  return valleys;
}

// U = Uphill
// D = Downhill
countingValleys(8, 'UDDDUDUU');     // 1
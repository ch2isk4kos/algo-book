function repeatedString(string, numOfChars) {
  let strArr = string.split('');
  let count = 0;

  for (let i = 0; strArr.length < numOfChars; i++) {
    strArr.push(strArr[i])
    // if (strArr[i] === 'a') ++count
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'a') {
      count++;
    }
  }
  return count;
}

console.log(repeatedString("aba", 10));
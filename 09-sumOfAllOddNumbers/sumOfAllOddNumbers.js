function sumOfAllOddNumbers(nums) {
  let numOdd = 0; 
  for (num of nums) {
    if (num % 2 != 0) {
      numOdd++;
    }
  }
  return numOdd;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
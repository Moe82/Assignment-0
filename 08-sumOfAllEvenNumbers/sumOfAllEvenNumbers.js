function sumOfAllEvenNumbers(nums) {
  let numEven = 0; 
    for (num of nums) {
      if (num % 2 == 0) {
        numEven++;
      }
    }
  return numEven;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
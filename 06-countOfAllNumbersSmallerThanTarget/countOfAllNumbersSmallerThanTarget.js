function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for (num of nums) {
    if (num < target) {
      count += 1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
function sumOfMinimumAndMaximum(nums) {
  let low = nums[0];
  let high = nums[1];
  for (index in nums) {
    if (nums[index] < low) {
      low = nums[index];
    }
	else if (nums[index] > high) {
	  high = nums[index];
	}
  }
  return low + high;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
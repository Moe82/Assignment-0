class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var mid = Math.floor(nums.length/2)
    if (nums.length > 1) {
      if (nums[mid] < target) {
      	var newNums = nums.slice(mid, nums.length);
        return this.binarySearch(newNums, target);
      }
      else if (nums[mid] > target) {
        var newNums = nums.splice(0, mid);
        return this.binarySearch(newNums, target);
      }
      else if (nums[mid] == target) {
        return true;
      } 
    }
    if (nums[0] == target) {
      return true;
    } else {
      return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
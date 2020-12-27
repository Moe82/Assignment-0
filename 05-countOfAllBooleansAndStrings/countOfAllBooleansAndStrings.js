function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for (element of arr) {
    if (typeof element === 'boolean' || typeof element === 'string') {
	  count +=1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
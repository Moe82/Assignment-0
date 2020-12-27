function countOfAllBooleans(arr) {
  let count = 0;
    for (element of arr){
	  if (typeof element === 'boolean') {
	    count +=1;
	  }
	}
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
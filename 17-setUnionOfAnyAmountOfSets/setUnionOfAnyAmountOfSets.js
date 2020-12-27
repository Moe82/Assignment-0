function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  for (set of args) {
    for (element of set) {
      union.add(element);
    }
  }
  return union; 
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
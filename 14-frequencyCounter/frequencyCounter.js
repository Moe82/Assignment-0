function frequencyCounter(word) {
  let dict = {};
  for (index in word) {
    if (word[index] in dict) {
      dict[word[index]] += 1;
  } else {
    dict[word[index]] = 1;
  }
  }
  return dict;
}

// Do not edit this line;
module.exports = frequencyCounter;
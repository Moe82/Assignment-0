function isPalindrome(word) {
  for (let x = 0; x < word.length / 2; x++) {
    if (word[x] != word[word.length - x - 1]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
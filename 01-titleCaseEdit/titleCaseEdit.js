function titleCaseEdit(title) {
  let words = title.split(" ");
  for (index in words) {
  	words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1,words[index].length);
  }
  return words.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
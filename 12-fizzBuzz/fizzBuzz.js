function fizzBuzz(start, end) {
  let arr = [];
  for (let x = start; x <= end; x++) {
    if (x % 3 == 0 && x % 5 == 0)
      arr.push("FizzBuzz")
    else if (x % 5 == 0)
      arr.push("Buzz")
    else if (x % 3 == 0)
      arr.push("Fizz")
    else
      arr.push(x)
  }
  return arr
}

// Do not edit this line;
module.exports = fizzBuzz;
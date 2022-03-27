// Summing a number's digits
function sumDigits(number) {
    // The input is made absolute using this method.
    number = Math.abs(number);
    // Returns an array for the given input
    let numsArr = Array.from(number.toString()).map(Number)
    // sums the elements in the array.
    return numsArr.reduce( (sum, current) => sum += current, 0 );
  }
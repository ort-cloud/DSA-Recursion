// 1. Counting Sheep
function numberOfSheep(input) {
  // Base case
  if (input === 0) {
    return input + "All sheep jumped over the fence";
  }
  // General case
  return (
    `${input}: Another sheep jumps over the fence ` + numberOfSheep(input - 1)
  );
}

console.log(numberOfSheep(3));

// 2. Power Calculator
function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1);
}
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));

// 3. Reverse String
function reverseString(str) {
  if (str.length <= 1) {
    return "Not a string";
  }
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("Pineapple"));

// 4. nth Triangular Number
function nth(nDots) {
  if (nDots === 1) {
    return nDots;
  }
  return nDots + nth(nDots - 1);
}

console.log(nth(9));

// 5. String Splitter
function stringSplitter(str) {}

// 6. Fibonacci
function fibonacci(num) {
  if (num === 1) {
    return [0, 1];
  }
  let s = fibonacci(num - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
}

console.log(fibonacci(8));

// 7. Factorial
function factorial(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

// 8. Find a way out of the maze

// 9. Find ALL the ways out of the maze

// 10. Anagrams

// 11. Organization Chart

// 12. Binary Representation

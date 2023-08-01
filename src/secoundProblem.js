function sum(arr) {
  if (!Array.isArray(arr)) {
    return console.log("Input is not an array.");
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return console.log("Array contains non-integer values.");
    }
    total += arr[i];
  }
  return total;
}

let array = [1, 2, 3, 4, 5]
let result = sum(array);

console.log(result);

// write command node secondProblem.js
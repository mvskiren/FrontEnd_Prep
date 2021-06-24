// Since all functions in javascript are first class objects it would accept/return functions

//Uses Eaiser, readable, easy to debug, less reptitive

// The function we pass in is a callback function and outer function that are takes out the our passed callback(baby) is Higher order function

// excersie : Can you write a naive approach for different operations

function doArthimeticOperation(arr, operation) {
  // higher order function
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(operation(arr[i]));
  }
  return output;
}
const addition = num => {
  return num + 2;
};
const substraction = num => {
  return num - 2;
};
const multiply = num => {
  return num * 2;
};
// Test
const multiplyCheck = doArthimeticOperation([1, 2, 3, 4, 5], multiply);
const additionCheck = doArthimeticOperation([1, 2, 3, 4, 5], addition);
const substractionCheck = doArthimeticOperation([1, 2, 3, 4, 5], substraction);
console.log(multiplyCheck, additionCheck, substractionCheck);

// Arrow function shortcut calling
const multiplyCheck = doArthimeticOperation(
  [1, 2, 3, 4, 5],
  input => input * 2
);

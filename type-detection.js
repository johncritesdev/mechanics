//detecting types 
//typeof is a function that doesn't need parenthesis
//JS has week typing

let myNum = "123";

if (typeof myNum === 'number') {
  console.log("It's a number");
} else if (typeof myNum === 'string') {
  console.log("it's a string");
}

//typeof does not work on reference types
const myArray = [1, 2, 3];

console.log(typeof myArray);

if (typeof myArray === 'array') {
  console.log("it's an array");
}

//the correct way is
if (Array.isArray(myArray)) {
  console.log("It's an array");
}

console.log(Array.isArray(myArray));

console.log(isNaN(NaN));

//converting types

if (typeof myNum !== 'number') {
  myNum = Number(myNum);
}

console.log(typeof myNum);

if (typeof myNum !== 'string') {
  // myNum = String(myNum);
  myNum = myNum.toString();
}

console.log(typeof myNum);
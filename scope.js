const firstName = "Jay";
const lastName = "Jack";

if (firstName && lastName) {

  const fullName = `${firstName} ${lastName}`;
};

//not available in the global scope
console.log(fullName);

//however reassign the variable inside of the block

let fullName;

if (firstName && lastName) {

  fullName = `${firstName} ${lastName}`;
};

console.log(fullName);
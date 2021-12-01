//undefined has no value, what you're looking for doesn't exist
let name;
console.log(name);

//null we explicitly set the absence of a value, kind of a placeholder value
const user = {
  name: "Jay",
  age: null
};

console.log(user.age);

//NaN when you try to perform an operation with an undefined value.
console.log(10 + name);
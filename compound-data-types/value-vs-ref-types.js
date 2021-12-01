const users = [
  {
    name: "Jason",
    age: 21,
    tags: ['new-user', 'javascript']
  },
  {
    name: "Shelly",
    age: 24,
    tags: ['javascript']
  },
  {
    name: "Jay",
    age: 30,
    tags: []
  }
];
//this is called by-value assignment (making a copy - not affecting the original)
const age = 27;
let age2 = age;
age2 = 28;

console.log(age, age2);

//this is called by-reference (using compound datatypes, they're all the same array under the hood)
const name = ["Jay"]
let name2 = name
name2.push('Jan')

console.log(name, name2);
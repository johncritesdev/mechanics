//objects

const user = {
  name: "jay",
  age: 31,
  employed: true,
  socialMedia: {
    twitter: "tweet",
    fb: "",
    github: ""
  }
};

//dot syntax
console.log(user.name);
console.log(user.age);
console.log(user.employed);

//string literal indexing
console.log(user['name']);
console.log(user['age']);
console.log(user['employed']);

//variable syntax
const key = 'name'

console.log(user[key]);

//change
user.age = 28
console.log(user.age);

//chaining
console.log(user.socialMedia.twitter);
//this is a basic truthy
if (true) {
  console.log("this is true");
} else {
  console.log("this is false");
}

//undefined is a falsey
if (undefined) {
  console.log("this is true");
} else {
  console.log("this is false");
}
//null is a falsey
if (null) {
  console.log("this is true");
} else {
  console.log("this is false");
}
//NaN is a falsey
if (NaN) {
  console.log("this is true");
} else {
  console.log("this is false");
}
//the number 0 is a falsey, the rest are truthy
if (0) {
  console.log("this is true");
} else {
  console.log("this is false");
}


//empty arrays and objects are truthy
if ([]) {
  console.log("this is true");
} else {
  console.log("this is false");
}

//change it to a falsey by making it equal 0
let array = [].length;

if (array) {
  console.log("this is true");
} else {
  console.log("this is false");
}


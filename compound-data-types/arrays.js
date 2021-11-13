const nums = [1, 2, 3];
//length not 0 based index
console.log(nums.length);
console.log(nums[1]);

//add to the back
nums.push(4);
console.log(nums);
//remove from the back
nums.pop();
console.log(nums);

//store the last index in a variable
const last = nums.pop();
console.log(last);

console.log(nums);

//edit
nums[0] = 'hello';

console.log(nums);


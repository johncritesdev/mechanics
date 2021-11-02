//numbers
const myMoney = 300;
const myFriendsMoney = 200 + 20;//primitive datatypes
const totalMoney = myMoney + myFriendsMoney;

//remainder -> modulo
const change = totalMoney % 100;


console.log(change);

//booleans
const iHaveMoreMoney = myMoney > myFriendsMoney; //comparison yields a bool

if (iHaveMoreMoney) {
  console.log('Im rich');
} else if (myMoney >= 200) {
  console.log('im doing ok');
} else {
  console.log('im poor');
}
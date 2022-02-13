//array

const nums = [1, 23, 45, 56, 64, 102];
const midNums = nums.slice(2, -2);
console.log(midNums);
// Expected output: [45,56]

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);
//Expected output: Lemon,Apple

//string 
let text = "Hello world!";
let result = text.slice(4);
//o/p--- o world!,startIndex nai mane 0 count krbe,r 4 means 4 index er aag prjonto hbe
console.log(result);
const numbers = [4, 3, 2, 1, 5, 7, 6, 8, 9];
const sortedNumber = numbers.sort();
// console.log(sortedNumber);

const friends = ['kodom', 'bokul', 'dalia', 'chameli', 'beli'];
// const sortedFriend = friends.sort();
const sortedFriend = friends.sort().reverse();
// console.log(sortedFriend);

const test = [12, 54, 67, 34, 23, 98, 68];
const result = test.sort(function (a, b) {
    return b - a;
});
console.log(result);
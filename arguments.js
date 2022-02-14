function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const numbers = addNumbers(22, 43, 54, 65, 76);
// console.log(numbers);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
let name = getFullName('zannatul', 'binta', 'bahar', 'reya');
console.log(name);

const task = "Practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");
// console.log(index);
const str1 = 'Bangladesh is a beautiful country.';
console.log(str1.endsWith("country"));
// for (let i== 0; i < 10; i++) { } syntax error
const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());



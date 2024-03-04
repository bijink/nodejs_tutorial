var read = require('readline-sync')

var num1 = read.question("Enter first number: ")
var num2 = read.question("Enter second number: ")

if (num1 === num2) {
  console.log("Two numbers are same");
}else if (num1 > num2) {
  console.log(`${num1} is largest`);
} else {
  console.log(`${num2} is largest`);
}
// const readline = require('readline');
// const { CLIENT_RENEG_LIMIT } = require('tls');
// let msg = require('./a')
// module.exports = function (msg) {

// } 
// const PI = 3.14;
// module.exports.PI = PI;

// const myArray = [1, 2, 3];
// let maxElement = myArray[0];

// for (let i = 1; i < arrayLength; ++i) {
//     if (myArray[i] > maxElement) {
//         maxElement = myArray[i];
//     }
// }
// console.log(maxElement);

// exports.floor = (number) => Math.floor(number)
// exports.sqrt = (number) => Math.sqrt(number);
// exports.round = (number) => Math.round(number);
// exports.abs = (number) => number < 0? (-number) : number
// exports.max = (number) => Math.max(...number)

// exports.

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const { platform} = require("os");
// const { exec } = require("child_process");

// let args = process.argv.slice[2]

// console.log('hello Arguments');
// console.log(args);

  
// args.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });
// const chalk = require("chalk");
// const { platform } = require("os");
// const { exec } = require("child_process");



// const args = process.argv;
// args.forEach((e,i) => {
//     if (e === "-c") {
//         console.log(chalk.blue("blue color"))
//       } else if (e === "-bg") {
//         console.log(`
//         White: ${chalk.whiteBright("This is white.")}
//         Green: ${chalk.greenBright("This is green.")}
//         Red: ${chalk.redBright("This is red.")}
//         `);
//       }
//         else if (e === "-bg2") {
//         const welcome = chalk.green
//         console.log(welcome("green ") + chalk.blue('world ') + chalk.red('!'))
//       }
//       else if (e === "-b") {
//         const name = 'Temuujin'
//         console.log(chalk.blue.bold("My name's "), chalk.bgCyan(name))
//       }
// })


// console.log(chalk.red("xexe"))

// console.log(chalk.red.underline("xexe"))
// console.log(chalk.red.underline.bold("xexe"))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// let arr = [5, 2, 6, 3, 1]

// let odds = arr.filter(n => n%2 )
// let even = arr.filter(n => n % 2 === 0)
//     // if(n%2 == 0)
//     //  even += parseInt(n)
// console.log(odds)
// console.log(even)

// rl.questionz("2 too oruul: ", (answer) )
// ===================================
function add(x, y) {
    return x + y
}
let sum = add;
console.log(sum(5, 3))
// ====================================
function add(x, y) {
    return x + y
}
console.log(add(2, 8))
// ====================================

double = (x) => x * 2;
result = double(20);

console.log(result);


// ====================================

const allow = (x) => {
    if(x == true) {
        return 'allowed'
    }
    else 
        return 'not allowed'
}
console.log(allow)

// ====================================
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

// ====================================

var greet = function(){
    return function(){
    console.log(chalk.red("Welcome to class"));
    }
}
greet()();

// ==================




// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// else {
//     console.log("The number is odd.");
// }


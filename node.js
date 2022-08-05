// / let array = [5, 6, -1, 2, 12, -5, 27, 3]
// let sum = 0;
// for (i = 0; i < array.length; i++) {
//     sum += array[i];
//     console.log(sum);
// }
// console.log(sum);

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let answer;
// let array = [];
// rl.question('Garaas utga oruulah: ', (answer) => {

// });

// console.log(Oruulsan utga: ${answer});

// rl.close();

// const readline = debounce('readline');
// const fs = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // rl.question('reverse is: ', (answer) => {
// //     let array = answer.split(' ');
// //     let sum = 0;
// //     array.forEach((el) =>)
// // });

// rl.question('Toonuud: ', (answer) => {
//     let array = answer.split(' ');
//     let sum = 0;
//     array.forEach((el) => {
//         sum += parseInt(el);
//     });
//     console.log(sum);
//     // array.reduce((a, b) =>
//     //     +a + +b);
//     // // console.log(array)

//     console.log('Niilber: ', answer);
//     rl.close();
// });

// const fs = require('fs');

// let txt = "You guys can do it";

// fs.writeFile("note.txt", txt, (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log(fs.readFileSync("note.txt", "utf8"));
//     }
// });

// const fs = require('fs');

// fs.appendFileSync('note.txt', 'Keep doing it...');



const http = require("http");


const myURL = new URL('http://127.0.0.1:5500/index.html');
console.log(myURL.href);




const server = http.createServer(function(req, res) {

   res.writeHead(200, {'Content-Type': 'text/plain'});

    req.url =='' 
        profile => shidii
        readFileSync
   res.end('hello world');
});


server.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})

// const readline = require('readline');
// const math = require('./math.js');

// const max = 

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question(`garaas utga toonuud oruul: `, (radius) => {
//     console.log('Answer: ', 2* math.PI * Number(radius));
//     rl.close();
// });
// var msg = require('./max.js');
// msg.log(max);

// const readline = require('readline');
// const msg = require('./max.js');

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question(`Neree oruul: `, (msg) => {
//     console.log(msg);
//     rl.close();
// });

// const readline = require('readline')
// const chatBot = require('./max.js')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('What is your name: ', (input) => {
//   console.log(chatBot.hello(input))
//   rl.question('Choice date or time? ', (answer) => {
//     if (answer == 'Date') return console.log(chatBot.choice(answer))
//     if (answer == 'Time') return console.log(chatBot.choice(answer))
//     rl.close()
//   })
// })


// module.exports = chat(function (request) {
//   return 'Thanks for sending ' + request.text;
// });
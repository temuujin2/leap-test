const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name : ", (name) => {
  console.log(`Hello ${name}, i am ChBot`);
  rl.question("Choice date or time? ", (answer) => {

    const date = new Date();
    if (answer == "date") console.log(date.toLocaleDateString()); 
    else if(answer == "time") console.log(date.toLocaleTimeString());
    rl.close();
  });
});
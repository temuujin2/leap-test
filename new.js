// function teacher(){
//     return "Teacher";
// }
  
// function student(){
//     return "Student";
// }
  
// function greet(user){
//     console.log("Welcome", user());    
// }
  
// // Prints "Welcome Teacher"
// var message = greet(teacher);
  
// // Prints "Welcome Student" 
// var message = greet(student);

// // =================================
// const add = (x) => (y) => x+y;

// const add1 = (x) => {
//     return (y) => {
//         return x + y;
//     };
// };

// let ajiluulah = add(3)(5);

// console.log(ajiluulah);
// ===========

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question('Give num: ', (answer) => {
//     console.log(answer.split(' ')
//                       .map(num => parseInt(num))
//                       .filter(num => num % 2 == 1)
//                       .reduce((acc, cur) => acc * cur));
//     console.log(answer.split(' ')
//                       .map(Number)
//                       .filter(num => num % 2 ==0)
//                       .reduce((acc, cur) => acc + cur));
//     rl.close();
// });

// const a = [1, 2, 3, 4]
// const hariu = a.map(num => num * 2);
// console.log(hariu)
// // console.log(a.map(num => num * 2));

// const bithYear = [1994, 1997, 2003, 1993, 2001]

// const nas = bithYear.map(num => 2022 - num)
// console.log(nas)
// // ===============================
// let array = [10, 20, 30, 40];

// const dahin = array.map((value, index) => {
//     return value * 2;
// });
// console.log(dahin);

// // ==============================
// let array2 = [12, 23, 35, 43, 34];

// const dahin2 = array2.map((value, index) => { // value 12, index 0
//     if(value % 2 ===0) {
//         return value * 2;
//     } else {
//         return value * 3;
//     }
    
// });
// console.log(dahin2);

// const persons = [
//                 { id: 1, name: "Dorj", age: 19 },
//                 { id: 2, name: "Bold", age: 13 },
//                 { id: 3, name: "Baldan", age: 15 },
//                 { id: 4, name: "Tsetseg", age: 20 },
//                 { id: 5, name: "Dulmaa", age: 23 }
// ]
// const adult = persons.filter((a) => a.age >= 18)

// console.log(adult)

// function multiple(a, b, c) {
//     return a * b * c
// }
// let result = multiple(5, 3, 2);

// console.log(result)

// const multiples = (a) => (b) => (c) => a * b * c
// console.log(multiples(2)(3)(4))

// // function discount(price, discount) {
// //     return price * discount
// // }
// // console.log(discount)

// let total = (price) => (discount) => price - price * discount;
// console.log(total(1500)(0.10))

// let total2 = (price) => (discount) => price - price * discount;
// console.log(total2(2000)(0.10))

// let total3= (price) => (discount) => price - price * discount;
// console.log(total3(50)(0.10))

// let total4 = (price) => (discount) => price - price * discount;
// console.log(total4(5000)(0.10))
// // ============================================
// const chalk = require("chalk");
// const chocolates = [
//     {"dark":true, "flavour":"strawberry"},
//     {"dark":false, "flavour":"strawberry"},
//     {"dark":false, "flavour":"almond"},
//     {"dark":true, "flavour":"almond"},
//     {"dark":false, "flavour":"lemon"}
// ];
// // bodolt ========= 1 ============
// const checkProperty = (a) => (b) => (checkProperty) => checkProperty[a] == b;

// // const darkChocolates = chocolates.filter(checkProperty("dark")(true));
// console.log(chocolates.filter(checkProperty("dark")(true)));

// // bodolt ============== 2 ===========
// const check = (prop) => {
//     return (val) => {
//         return (arr) => {
//             return arr[prop] == val;
//         }
//     }
// }
// const darkChocolates = chocolates.filter(check("dark")(true));
// console.log(darkChocolates);

// const almondChocolates = chocolates.filter(check("flavour")("almond"));
// console.log(almondChocolates);

// // zadargaa bagshiin bichsen =========== 3 =================
// const checkProper = (key) => (val) => (obj) => {
//     return obj[key] == val;
// };

// console.log(chocolates.filter(checkProper("dark")(false)));

// const obj = {a: 1, b:2};

// obj.b = 3;
// const arr = ["a", "b"];

// arr.push("c");
// arr[1] = "d";

// console.log(arr)
// console.log(obj)

// const a = {a: 3, b: 2};

// a.a = 10

// console.log(a)
// //  ====================

// // const data = { field: "alpha" };
// // const copyData = data;
// // copyData.field = "beta";
// // copyData.foo = "bar";

// const myObject = { field: 'alpha' };
// const otherObject = myObject;

// otherObject.field = 'beta';

// console.log(otherObject.field);

// // ===============================================
// // const initialObject = { field: 'alpha' };
// // const referenceCopy = initialObject;
// // initialObject.field = 'beta';
// // const isTheSameObject = initialObject === referenceCopy;
// // console.log(isTheSameObject);

// const initialObject = { field: 'alpha' };

// function changeSomethingInObject (input) {
//     const newObject = {};
    
//     Object.assign(newObject, input);
//     newObject.field = 'beta';
//     newObject. foo = 'bar';
//     return newObject;
// }

// var newObject = changeSomethingInObject(initialObject);
// var isTheSameObject = (initialObject === newObject);
// console.log(initialObject);
// console.log(newObject); 
// console.log(isTheSameObject);

// function add(a, b, c) {
//     return a + b + c
// }
// let sum = add(5, 3, 2)

// console.log(sum)
// const sum = (n) => {
//     if (n == 0) return 0;
//     return n + sum(n -1)
// }
// sum(5);
// function fib(n) {
//        if(n == 0)
//          return 0;
//        if(n == 1 || n == 2)
//           return 1;
//        else
//           return fib(n-1) + fib(n-2);
//     }
// let n = 5;
// console.log("ugugdsun too " + n + " bol " +fib(n));
// for(let i = 0; i < n; i++) {
//     console.log(fib(i) + "")
// }
// ------------------------------------------
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question('N toog ug: ', (answer) => {
//    const fib1 = (a) => {
//     if(a <= 1) {
//         return a;
//     } else {
//         return fib1(a - 1) + fib1(a - 2)
//     }
//    }
//     console.log(`${answer} f(n)`,fib1(answer))
//     // console.log(`${answer} toonii niilber bol`, recursive(parseInt(answer)));
//     rl.close();
// });
//  ========================================
// let n = 9;
// function fib(n) {
//     if(n <= 1) 
//         return n;
//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(n));


// const whereIsWaldo = (arr) => {
//     if(arr[0][0] != arr[0][2] || arr[0][0] != arr[1][0]) return [1,1]
//     let ans;
//     arr.forEach((el,i) => {
//         el.filter((val,j) => {
//             if(val != arr[0][0]){
//                 ans = [i+1,j+1];
//             }
//             return false;
//         })
//     });
//     return ans
// };
// const cord = [
//   ["A", "A", "A"],
//   ["A", "A", "A"],
//   ["A", "B", "A"],
// ];
// console.log(whereIsWaldo(cord));
// const cord1 = [
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["P", "O", "O"],
//     ["O", "O", "O"],
//   ];
//   console.log(whereIsWaldo(cord1));
//   const cord2 = [
//     ["d", "c", "c", "c"],
//     ["c", "c", "c", "c"],
//   ];
//   console.log(whereIsWaldo(cord2));
// =================================================================
// const whereIsWaldo = (arr) => {
//     if(arr[0][0] != arr[0][2] || arr[0][0] != arr[1][0]) return [1,1]
//     let ans;
//     arr.forEach((el,i) => {
//         el.filter((val,j) => {
//             if(val != arr[0][0]){
//                 ans = [i+1,j+1];
//             }
//             return false;
//         })
//     });
//     return ans
// };
// const cord = [
//   ["A", "A", "A"],
//   ["A", "A", "A"],
//   ["A", "B", "A"],
// ];
// console.log(whereIsWaldo(cord));
// const cord1 = [
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["O", "O", "O"],
//     ["P", "O", "O"],
//     ["O", "O", "O"],
//   ];
//   console.log(whereIsWaldo(cord1));
//   const cord2 = [
//     ["d", "c", "c", "c"],
//     ["c", "c", "c", "c"],
//   ];
//   console.log(whereIsWaldo(cord2));

//   ======================================

// const willIGetNewPhone = new Promise(function (resolve, reject) {
//     let time = Math.round(Math.random() * 7) * 1000;
//     setTimeout(() => {
//       let isMomHappy = Math.round(Math.random());
//       if (isMomHappy) {
//         const phone = {
//           brand: "iPhone",
//           color: "black",
//         };
//         resolve(phone); // fulfilled
//       } else {
//         const reason = new Error("mom is not happy");
//         reject(reason); // reject
//       }
//     }, time);
//   });
  
//   // call our promise
//   let askMom = () => {
//     return willIGetNewPhone
//       .then((fulfilled) => {
//         // yay, you got a new phone
//         console.log(fulfilled);
//         // output: { brand: ‘Iphone', color: 'black' }
//       })
//       .catch((error) => {
//         // oops, mom don't buy it
//         console.log(error.message);
//         // output: 'mom is not happy'
//       });
//   };
  
//   const askMom1 = async () => {
//     try {
//       const response = await willIGetNewPhone;
//       console.log(response);

//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
// //   console.log("asking: ", askMom());
//   console.log("asking: ", askMom1());

// // ==========================================
// const askMomNewCase = new Promise((res, rej) => {
//     res("awj ugiidoo");
// })
// // async function willGetNewCase() {
// //     return askMomNewCase;
// // }
// // function no() {
// //     return Promise.resolve(askMomNewCase)
// // }

// const newCase = async () => {
//     try {
//         const response = await willIGetNewPhone;
//         try {
//             const response1 = await askMomNewCase;
//             console.log("Case awj uguhuu shiideh: ", response1)
//         } catch (error) {
//             console.log("Case awj uguhgvi: ", error.message)
//         }
//         return response;
//     } catch (error) {
//         console.log(error.message)
//     }
// };
// console.log("case awj uguhuu shiideh: ",newCase())

// ==============================================================
// const data = x => new Promise((resolve, reject) => {  
//   setTimeout(() => {
//   if (x % 2 === 0) {
//     resolve(`${x} is an even number`);
//   } else {
//     reject("NaN");
//   }
//   }, 1000);
// });
// const data1 = new Promise((res, rej) => {
//   res();
// })
// const data2 = async () => {
//   try {
//     const response1 = await data;
//     console.log("number is: ", response1)
//   }
//   catch (error)  {
//     console.log(error);
//   }
// };
// console.log(data2());
    
// ===============================================================
// function sanitise(x) {
//   if (isNaN(x)) {
//     return NaN;
//   }
//   return x;
// }

// console.log(sanitise('6'));

// console.log(sanitise('NotANumber'));
    
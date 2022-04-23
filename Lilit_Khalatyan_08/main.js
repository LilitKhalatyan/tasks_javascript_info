/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week05.Meeting07    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 05-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/


//                               ** * **  
// What is the weekday of DOB ? 
// option 1
function getWeekDay(date) {
    
    let days = ['Su', 'M', 'Tu', 'W', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
   // return days.getDay();
}
let date = new Date(1980, 6, 3) 
console.log( 'It was ', getWeekDay(date) );



// What is the weekday of DOB ? 
// option 2
function getWeekDay2(date) {

    return (new Intl.DateTimeFormat('default', {
        // weekday: 'narrow',         // T
        // weekday: 'short',          // Thu
        weekday: 'long',              // Thursday
      }).format(date))
}


let date2 = new Date(1980, 6, 3)
console.log( 'It was ', getWeekDay2(date) );
weekday: 'narrow' 



//                               ** * **
console.log('====== 6.3 Variable scope, closure ======');
console.log('------ 6.3 Task 1/10');
// What will be the outcome 

let name631 = "John";
function sayHi() {
  console.log("Hi, " + name631);
}
name631 = "Pete";
sayHi();                            // Hi, Pete


console.log('------ 6.3 Task 2/10');
// what will it show?

function makeWorker() {
    let name632 = "Pete";
  
    return function() {
      console.log(name632);
    };
} 
let name632 = "John";
let work = makeWorker();
  
work();                             // Pete



console.log('------ 6.3 Task 3/10');
// What will be the result ??

let phrase = "Hello";
if (true) {
  let user = "John";

    function sayHi() {
    console.log(`${phrase}, ${user}`);
    }
}
sayHi();                           // Hello, John




console.log('------ 6.3 Task 4/10');

function sum(a) {
    return function(b) {
      return a + b;
    };
}
console.log( sum(1)(2) );           // 3
console.log( sum(5)(-1) );          // 4



//                               ** * **
console.log('====== 6.5 Global object ======');
if (!window.Promise) {
    console.log("Your browser is really old!"); // it's not old:)
  }

//                               ** * **
console.log('====== 6.6 Function object, NFE ======');
console.log('------ 6.6 Task 1/2');
// Modify the code of makeCounter() so that the counter can also decrease and set the number:

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

function makeCounter() {

    let count = 0;
    
    function counter() {
        return ++count;
    }
    counter.set = value => count = value;
    counter.decrease = () => --count;
    return counter;
}

let mycounter = makeCounter();
console.log( mycounter() );               // 1
console.log( mycounter() );               // 2
console.log( mycounter.set(5) );          // 5
console.log( mycounter.decrease() );      // 4



console.log('------ 6.6 Task 2/2');         // not solved
// Write function sum that would work like this: 

// [???]

// function sum2(a) {
//     let sum = a;
//     while (b) {
//         return function(b) {
//             sum += b
//             return sum;
//         }
//     }
// }
// console.log( sum2(1)(2) );   
// console.log( sum2(1)(2) ); 
// console.log( sum(1)(2)(3) ); 
// console.log (sum(5)(-1)(2) ); 
// console.log( sum(6)(-1)(-2)(-3) ); 
// console.log( sum(0)(1)(2)(3)(4)(5) ); 


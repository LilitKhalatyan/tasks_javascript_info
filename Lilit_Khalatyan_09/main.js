/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week06.Meeting10    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 09-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                                  *  
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


//                               ** * **

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




//                                  *  
//                               ** * **

console.log('====== 6.1 Recursion and stack ======');
console.log('//------ 6.1 Task 1/5');
// ** * **      Sum all numbers till the given one
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

// *1 / Using a for loop
function sumLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return (`For loop sum is ${sum}`);
}
console.log( sumLoop(10) );                               // 55


//                               ** * ** 

// *2 /Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumRecursion(n) {
    if (n === 1) {
      return 1;
    }
    return (n + sumRecursion(n - 1));
}
console.log(`Recursion sum is`,  sumRecursion(10) );      // 55


// *3 /Using the arithmetic progression formula. sum = n(a1+an)/2
function sumArithmetic(n) {
  return (n * (1 + n) / 2);
}
console.log(`Arithmetic sum is`,  sumArithmetic(10) );     // 55


//                               ** * **

console.log('//------ 6.1 Task 2/5');
// ** * **   Calculate factorial

function factorialRecursion(n) {
  if (n === 1) {
    return 1;
  }
  return (n * factorialRecursion(n - 1));
}

console.log(`10 ! is equal to `,  factorialRecursion(10) );  // 3628800


//                               ** * **

console.log('//------ 6.1 Task 3/5');
// ** * **   Fibonacci numbers   /Fn = Fn-1 + Fn-2
// Write a function fib(n) that returns the n-th Fibonacci number.

function fibonaccilRecursion(n) {
  if (n <= 1) {
    return n;
  }
  return ((fibonaccilRecursion(n - 1) + fibonaccilRecursion(n - 2)));
}
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(1) );  // 1
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(2) );  // 1
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(3) );  // 2
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(4) );  // 3
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(5) );  // 5
console.log(`Fibonacci number is equal to `,  fibonaccilRecursion(6) );  // 8


//                               ** * ** 

console.log('------ 6.1 Task 4/5');
// ** * **   Output a single-linked list
// *1 / using a loop 

let list614 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function outputListItems(list) {
  let tempList = list;
  while (tempList)
  {
    console.log( '/ *1 / using a loop', tempList.value);
    tempList = tempList.next;
  }
}
outputListItems(list614);


//                               ** * ** 

// *2 /using a recursion.
function outputListItemsRecursion(list) {
  if (!list) {
    return (null);
  }
  console.log( '/ *2 / recursion', list.value);
  if (list.next) {
    outputListItemsRecursion(list.next);
  }
}

let list11 = {};
outputListItemsRecursion(list614) ;
outputListItemsRecursion(list11) ;


//                               ** * ** 

console.log('------ 6.1 Task 5/5'); 
// ** * **   Output a single-linked list in the reverse order
// *1 / using a loop 

function outputListItemsReversed(list) {
  let tempList = list;
  let arr = [];
  while (tempList)
  {
    arr.push(tempList.value);
    tempList = tempList.next;
  }
  // console.log(arr);                     // [1, 2, 3, 4]
  arr.reverse();
  // console.log(arr);                     // [4, 3, 2, 1]
  for (let val of arr) {
    console.log( '/ *1 / REVERSED - using a loop', val);
  }
}
outputListItemsReversed(list614);


//                               ** * ** 

// *2 /using a recursion.

function outputListItemsRecRev(list) {
  if (!list) {
    return (null);
  }
  if (list.next) {
    outputListItemsRecRev(list.next);
  }
  console.log( '/ *2 / REVERSED - recursion', list.value);
}
outputListItemsRecRev(list614);



//                                  *  
//                               ** * **  [no task]
// console.log('====== 6.2 Rest parameters and spread syntax ======');



//                                  *  
//                               ** * **
console.log('====== 6.3 Variable scope, closure ======');
console.log('------ 6.3 Task 1/10');
// ** * **  Does a function pickup latest changes?

let name631 = "John";
function sayHi() {
  console.log("Hi, " + name631);
}
name631 = "Pete";
sayHi();                            // Hi, Pete


//                               ** * **

console.log('------ 6.3 Task 2/10');
// ** * **   Which variables are available?

function makeWorker() {
    let name632 = "Pete";
  
    return function() {
      console.log(name632);
    };
}
let name632 = "John";
let work = makeWorker();
  
work();                             // Pete


//                               ** * **

console.log('------ 6.3 Task 3/10');
// ** * **  Are counters independent? 

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() );     // 0
console.log( counter() );     // 1

console.log( counter2() );    // 0
console.log( counter2() );    // 1 They are independent



//                               ** * **


console.log('------ 6.3 Task 4/10');
// ** * **   Counter object
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let docount = new Counter();

console.log( docount.up() );      // 0++ ==> 1
console.log( docount.up() );      // 1++ ==> 2
console.log( docount.down() );    // 2-- ==> 1


//                               ** * **

console.log('------ 6.3 Task 5/10');
// ** * **   Function in if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();                          // Hello John 


//                               ** * **

console.log('------ 6.3 Task 6/10');
// ** * **   Sum with closures

function sum(a) {
    return function(b) {
      return a + b;
    };
}
console.log( sum(1) );              //ƒ (b) {return a + b;}
console.log( sum(1)(2) );           // 3
console.log( sum(5)(-1) );          // 4


//                               ** * **

console.log('------ 6.3 Task 7/10');
// ** * **   Is variable visible ? 
// let x = 1;
// function func() {
//   console.log(x); // ?
//   let x = 2;
// }
// func();       /// it's not visible


//                               ** * **

console.log('------ 6.3 Task 8/10');
// ** * **   Filter through function
/** We have a built-in method arr.filter(f) for arrays. 
 * It filters all elements through the function f. 
 * If it returns true, then that element is returned in the resulting array. 
 * Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3]. */ 


function inBetween(a, b) {
  return function(x) {
    return (x >= a && x <= b);
  }
}

arr6381 = [5, 8, 1, 2, 4, 56, 42, 3];
console.log (arr6381.filter(inBetween(3, 6)) );      // (3) [5, 4, 3]


//                               ** * **        [???]

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

arr6 = [5, 8, 1, 2, 4, 56, 42, 3];
console.log( arr6.filter(inArray([1, 42, 77])) );     // (2) [1, 42]


//                               ** * **

console.log('------ 6.3 Task 9/10');
// ** * **   Sort by field
// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName).

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;    
  }
} 

let users = [
{ name: "John", age: 20, surname: "Johnson" },
{ name: "Pete", age: 18, surname: "Peterson" },
{ name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('age')));        // 18, 19, 20



//                               ** * **


console.log('------ 6.3 Task 10/10');
// Army of functions



// //                                  *  
// //                               ** * **  [no task]
// console.log('====== 6.4 The old "var" ======');



// //                                  *  
// //                               ** * **  [no task]
// console.log('====== 6.5 Global object ======');
// if (!window.Promise) {
//     console.log("Your browser is really old!"); // it's not old:)
//   }



// //                               ** * **
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



console.log('------ 6.6 Task 2/2');         // [???]

// console.log( sum2(1)(2) );   
// console.log( sum2(1)(2) ); 
// console.log( sum(1)(2)(3) ); 
// console.log (sum(5)(-1)(2) ); 
// console.log( sum(6)(-1)(-2)(-3) ); 
// console.log( sum(0)(1)(2)(3)(4)(5) ); 
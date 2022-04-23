/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week06.Meeting11    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 12-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                                  *  
//                               ** * **  
// Find nested object task 
const obj = {
    a: {
      aname: null,
      aname2: undefined,
      b: {
        bname: 'b_bname',
        c: {
          d: {
            name: 'd_name'
          }
        }
      }
    },
    k: {
      name: 'k_name'
    }
  }
  
function getKey(obj, str) {
  
  let keysArr = str.split('.');

  // let tmp = {};
  // let temp = obj;
  let tmp = Object.assign({}, obj);
  
  for (let item in keysArr) {
    tmp = tmp[keysArr[item]];
  }
  return tmp;
  // console.log(tmp);
  // console.log(obj);
  // console.log(tmp == obj);
}
  
console.log(getKey(obj, 'a'));                // {aname: null, aname2: undefined, b: {…}}

console.log(getKey(obj, 'a.b.bname'));        // b_bname
console.log(getKey(obj, 'a.b.c'));            // {d: {…}}
console.log(getKey(obj, 'a.b.c.d.name'));     // d_name
console.log(getKey(obj, 'a.b.c.d.home'));     // undefined
console.log(getKey(obj, 'a.f'));              // undefined
console.log(getKey(obj, 'a[0]'));             // undefined
           // k_name


console.log(getKey(obj, 'a'));                // {aname: null, aname2: undefined, b: {…}}
  


//                                  *  
//                               ** * **  
console.log('====== 6.8 Scheduling: setTimeout and setInterval ======');
console.log('------ 6.8 Task 1/2'); 
// ** * **   Output every second
// Write a function printNumbers(from, to) that outputs a number every second, 
// starting from from and ending with to.

// * Version using setInterval.
function printNumbers(from, to) {
    
    let timerId681 = setInterval( function() {
        console.log(from);
        if (from === to) {
            clearInterval(timerId681);
        }
        from++;
    }, 1000);
}
printNumbers(5, 10);



//                               ** * **  


// *** Version using nested setTimeout.

function printNum(from, to) {
    
    setTimeout (function call() {
        console.log('Timeout', from);
        if (from < to) {
            setTimeout(call, 1000);
        }
        from++;
    }, 1000);
}
printNum(5, 10);


//                               ** * **  


console.log('------ 6.8 Task 1/2'); 
// ** * **   What will setTimeout show?

let i = 0;

setTimeout(() => console.log('Line 109', i), 100); // 100000000 this is JS

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
console.log('Line 115', i); // 100000000 



//                            End of Homework
//                               ** * **
//                                  *  







// let timerIdNested = setTimeout(function tick() {
//   console.log('*nested*');
//   timerIdNested = setTimeout(tick, 2000);
// }, 2000);

// setTimeout( () => clearInterval(timerIdNested), 20000 );


// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// No brackets () after the function
/* The syntax to cancel: 
          let timerId = setTimeout(...);
          clearTimeout(timerId);
*/


// function sayHi() {
//   console.log('Hello');
// }
// setTimeout(sayHi, 1000);

// function sayHiNamed(firstName, secondName) {
//   console.log('Hello ' + firstName + ' ' + secondName);
// }
// let saveToCancel = setTimeout(sayHiNamed, 1000, 'Cait', 'Balfe');
// //setTimeout(sayHiNamed, 1000, 'Cait', 'Balfe');


// setTimeout(() => console.log('This is JavaScript'), 5000); 

// clearTimeout(saveToCancel);


// // let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// // The syntax to cancel: clearInterval(timerId).

// let timerIdForInterval  = setInterval(() => console.log('interesting'), 1000);

// setTimeout( () => clearInterval(timerIdForInterval), 10000 );

// // Nested setTimeout

// let timerIdNested = setTimeout(function tick() {
//   console.log('*nested*');
//   timerIdNested = setTimeout(tick, 2000);
// }, 2000);

// setTimeout( () => clearInterval(timerIdNested), 20000 );



// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (start + 100 < Date.now()) console.log(times); 
//   else setTimeout(run); 
// });
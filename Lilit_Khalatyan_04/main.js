/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week02.Meeting04    *
 * Done by --------------- Lilit Khalatyan     *
 * Date ------------------ 12-02-2022          *
/**********************************************/

console.log('====== 2.15 Functions ======');
console.log('------ 2.15 Task 1/4');
// ------ 2.15 Task 1/4
// Is "else" required? -- No
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed? -- No
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}


console.log('------ 2.15 Task 2/4');
// ------ 2.15 Task 2/4
// Rewrite the function using '?' or '||'
// Rewrite it, to perform the same, but without if, in a single line.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

console.log('------ 2.15 Task 3/4');
// ------ 2.15 Task 3/4
// Function min(a, b)
function min(a, b) {
  return (a <= b) ? a : b;
}
console.log(`The min of (2, -1) is`, min(2, -1) );

console.log('------ 2.15 Task 4/4');
// '------ 2.15 Task 4/4'
// Function pow(x,n) // n>1
function pow(x, n) {
  let result = x;
  while (--n) {
    result = result * x;
  }
  return (result);
}
console.log(`2 to the power of 5 is `, pow(2, 5) );

console.log('====== 2.16 Function expressions ======');
// Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// ask("Do you agree?", showOk, showCancel);
// or
ask(
  "Do you agree?",
  function() { console.log("You agreed."); },
  function() { console.log("You canceled the execution."); }
);


console.log('====== 2.17 Arrow functions, the basics ======');
// ====== 2.17 Arrow functions, the basics ======
// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };
//  // same as
// let func = (arg1, arg2, ..., argN) => expression;

//rewriting ------ 2.15 Task 3/4
let min2 = (a, b) => (a <= b) ? a : b;
console.log(min2(1, 5))

console.log('------ 2.17 Task 1/1');
//------ 2.17 Task 1/1
// Rewrite with arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
ask(
  "Do you agree?",
  () => console.log('You agreed.'),
  () => console.log('You canceled the execution.')
);


// summary of JS fundamentals
console.log('====== 2.18 JavaScript specials ======'); 



console.log('====== 3.2 Coding Style ======'); /// done
console.log('------ 3.2 Task 1/1 ');
// ------ 3.2 Task 1
// Bad style -- to fix the code

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// // let x=prompt("x?",''), n=prompt("n?",'')
// // if (n<=0)
// // {
// //   console.log(`Power ${n} is not supported, please enter an integer number greater than zero`);
// // }
// // else
// // {
// //   console.log(pow(x,n))
// // }

//----- corrected 
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n ; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ''); 
let n = prompt("n?", '');

if (n <= 0) {
  console.log(`
  Power ${n} is not supported, 
  please enter an integer number greater than zero
  `);
} else {
  console.log( pow(x, n) );
}

// console.log('====== 3.3 Comments ======');

// /* [future check]
// there are tools like JSDoc 3 that can generate HTML-documentation f
// rom the comments. You can read more information about JSDoc 
// at http://usejsdoc.org/.
// */

console.log('====== 4.1 Objects ======');
// ====== 4.1 Objects ======
// // let user = new Object(); // "object constructor" syntax
// // let user = {};  // "object literal" syntax

console.log('------ 4․1 Task 1/4 ');
// ------ 4․1 Task 1/4

let object1 = {};           // Create an empty object user.
object1.name = 'John';      // Add the property name with the value John.
object1.surname = 'Smith';  // Add the property surname with the value Smith.
object1.name = 'Pete';      // Change the value of the name to Pete.
delete object1.name;        // Remove the property name from the object.
console.log(object1);

console.log('------ 4․1 Task 2/4 ');
// ------ 4․1 Task 2/4
// Write the function isEmpty(obj) 
// which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let object2 = {}; 
console.log( isEmpty(object1) ); //false
console.log( isEmpty(object2) ); //true

console.log('------ 4․1 Task 3/4 ');
// ------ 4․1 Task 3/4
// Write the code to sum all salaries and store in the variable sum. 
// Should be 390 in this example.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log('The sum is = ', sum); // 390

// If salaries is empty, then the result must be 0.
let sum2 = 0;
for (let key in object2) {
  sum2 += salaries[key];
}
console.log('The sum of empty object is = ', sum2); // 0

console.log('------ 4․1 Task 4/4 ');
// ------ 4․1 Task 4/4
// Create a function multiplyNumeric(obj) that 
// multiplies all numeric property values of obj by 2.


// before the call
let menu = {
  width: 200,       // 400 after the call
  height: 300,      // 600 after the call 
  title: "My menu"
};

function multiplyNumeric(anyobj) {
  for (let key in anyobj) {
    if (typeof anyobj[key] == 'number') {
      anyobj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);

//console.log('====== 4.2 Object references and copying ======');
// ====== 4.2 Object references and copying ======

//console.log('====== 4.3 Garbage collection ======');
// ====== 4.3 Garbage collection ======

/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week02.Meeting03.V2 *
 * Done by --------------- Lilit Khalatyan     *
 * Date ------------------ 09-02-2022          *
/**********************************************/

console.log('====== 2.7 String Conversion results ======');

const myNum = 125;
console.log(typeof(myNum));             // number
console.log(typeof(String(myNum)));     // string


console.log('====== 2.7 Numeric Conversion results ======');

let myString = '123';
console.log(typeof(myString));          // string
myString = Number(myString);
console.log(typeof(myString));          // number

myString = '12 hours';
myString = Number(myString);            // becomes NaN
console.log(typeof(myString));          // number

myString = '';
console.log(Number(myString));          // 0

myString = undefined;
console.log(Number(myString));          // NaN

myString = true;
console.log(Number(myString));          // 1
myString = false;
console.log(Number(myString));          // 0



console.log('====== 2.7 Boolean Conversion results ======');

console.log(Boolean(1));                // true
console.log(Boolean(0));                // false
console.log(Boolean(NaN));              // false

console.log(Boolean('None empty String'));  // true
console.log(Boolean(' '));                  // true
console.log(Boolean(''));                   // false

console.log(Boolean(undefined));        // false



console.log('====== 2.8 Basic operators, maths ======');
// Learnings 1: 5 * 2 ==> 5 & 2 are operands /arguments/
// Learnings 2: single operand is called unary / 
let x = 1; 
x = -x;
console.log(x);
// Learnings 3: when operator has 2 operands, is's called binary 
let y = 2; z = 11;
console.log(y + z, y - z, y * z, y / z, Math.floor(z / y), z % y, z ** 2); 

console.log('====== 2.8 String concatenation with binary + ======');

console.log('String 1 ' + 'concatinated to ' + 'String 2'); 
console.log('11' + 2, 2 + '11');
console.log(' 2 + 2 + `11` ==> ', 2 + 2 + `11` );
console.log(' `11` + 2 + 2 ==> ', `11` + 2 + 2 );
console.log(' `258` / 2    ==> ', '258' / 2 );

console.log('====== 2.8 Numeric conversion, unary + ======');
// no effect on numbers
let a = 5;
console.log(+a); 
//console.log(-a);
a = -8;
console.log(+a);

// Converts non-numbers
console.log(' true ==> ', true);            // true
console.log('+true ==> ', +true);           // 1
console.log("   '' ==> ", '');              //
console.log("  +'' ==> ", +'');             // 0

console.log(" '1' + '2'  ==> ", '1' + '2' );    // 12
console.log("+'1' + +'2' ==> ", +'1' + +'2' ); // 3
console.log("Number('1') + Number('2') ==> ", Number('1') + Number('2') ); // 3

// console.log('====== 2.8 Operator precedence, ++/--, +=, *= ======');
/** For later 
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

console.log('====== 2.8 Comma ======');
// only result of the last expression will be returned
let a2 = (1 + 2, 2 + 3, 3 + 4, 4 + 5); // 9
console.log(a2);
// usage example: for (a = 1, b = 3, c = a * b; a < 10; a++) 

console.log('------ 2.8 Task 1 ');
//What are the final values of all variables a, b, c and d after the code below?
let a3 = 1, b3 = 1;

let c = ++a3; // 2
let d = b3++; // 1
console.log(c, d);

console.log('------ 2.8 Task 2 ');
// What are the values of a and x after the code below?
let a4 = 2;

let b4 = 1 + (a4 *= 2); // 5
console.log(b4);

console.log('------ 2.8 Task 3 ');
// What are results of these expressions?
 
"" + 1 + 0      // 10
"" - 1 + 0      // -10
true + true     // 2
true + false    // 1
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // 9px
"$" + 4 + 5     // $45
"4" - 2         // 2
"4px" - 2       // NaN
"  -9" + 5      //   -95 // string
"  -9  " + 5    //   -95
"  -9  " - 5    // -14
null + 1        // 1
undefined + 1   // NaN
" \t \n" - 2    // -2     !!
console.log(" \t \n" - 2 );

console.log('------ 2.8 Task 4 ');
// Learnings 1:  for undefined and null Equalit check (==) is done without any conversions 
// Fix the addition
// let a1 = prompt("First number?", 1);
// let b1 = prompt("Second number?", 2);

// console.log(a1 + b1); // Number(a) + Number(b) or +a + +b

console.log('====== 2.9 Comparisons ======');
console.log(null == null, null == undefined, undefined == null); // all true
console.log(undefined > 0, undefined < 0, undefined == 0); // all false

console.log('------ 2.9 Task 1 ');
// What will be the result for these expressions?

5 > 4                   // true
'apple' > 'pineapple'   // false
'2' > '12'              // false
undefined == null       // true
undefined === null      // false
null == '\n0\n'         // false
null === +'\n0\n'       // false

console.log('====== 2.10 Conditional branching: if, `?` ======');
console.log('------ 2.10 Task 1 ');
// Q: Will alert be shown?
// A: Yes (because we have string there)

// if ("0") {
//     alert( 'Hello' );
//   }

console.log('------ 2.10 Task 2 ');
//  The name of JavaScript

//let visitorAnswer = prompt('What is the “official” name of JavaScript?', '');
let visitorAnswer = 'aa';
if (visitorAnswer == 'ECMAScript') {
    console.log('Right!');
  } else {
    console.log("You don\'t know? \n “ECMAScript”!"); // or
    console.log(`You don\'t know?
“ECMAScript”!`);
}

console.log('------ 2.10 Task 3 ');
// Rewrite "if" into "?"
let result;
let a5 = 1;
let b5 = 2;

if (a5 + b5 < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
console.log(result);
(a5 + b5 < 4) ? result = 'Below' : result = 'Over';
console.log(result);

console.log('------ 2.10 Task 4 ');
// Rewrite "if else" into "?"
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = 'Director';
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : ''; // 9 to 3

console.log(message);

console.log('====== 2.11 Logical operators ======');
// Learnings 1 : The precedence of NOT ! is the highest of all logical operators, 
// so it always executes first, before && or ||.
// Learnings 2:Operator && has a higher precedence than ||


console.log('------ 2.11 Task 1 ');
//What is the code below going to output?
//alert( null || 2 || undefined );
console.log("alert( null || 2 || undefined )" + " Code will output 2");

console.log('------ 2.11 Task 2 ');
// What is the code below going to output?
//alert( alert(1) || 2 || alert(3) ); // will output 1 and 2

//console.log('------ 2.11 Task 3 ');
//What is the code below going to show?
//alert( 1 && null && 2 ); // null

//console.log('------ 2.11 Task 4 ');
//What is the code below going to show?
// alert( alert(1) && alert(2) ); // will print 1 and return undefined 


//console.log('------ 2.11 Task 5 ');
//What will the result be?
//alert( null || 2 && 3 || 4 ); // 3


console.log('------ 2.11 Task 6 ');
// Check the range between
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.

let age;
if (age >= 14 && age <= 90);

console.log('------ 2.11 Task 7 ');
// A question about "if"
//Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) console.log( 'first' );          // inside if is truthly value
if (-1 && 0) console.log( 'second' );         // will do nothing
if (null || -1 && 1) console.log( 'third' );  // 1


//      ====== 2.12 Nullish coalescing operator '??'s ======  
// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0

console.log('====== 2.13 Loops: while and for ======');
//      ====== 2.13 Loops: while and for ======  
console.log('------ 2.13 Task 1 ');
// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  console.log( i-- );
}; // will print 3, 2, 1 and will not enter the loop

console.log('------ 2.13 Task 2 ');
// Which values does the while loop show?
// Both loops alert the same values, or not?
// 1
let i1 = 0;
while (++i1 < 5) console.log( "i1 = " + i1 ); // 1, 2, 3, 4

//2 
let i2 = 0;
while (i2++ < 5) console.log( "i2 =  " + i2 ); // 1, 2, 3, 4, 5


console.log('------ 2.13 Task 3 ');
// Which values get shown by the "for" loop?
// 1
for (let i = 0; i < 5; i++) console.log( i ); // 0, 1, 2, 3, 4 

//2
for (let i = 0; i < 5; ++i) console.log( "2nd " + i ); // 0, 1, 2, 3, 4


console.log('------ 2.13 Task 4 ');
// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10. 

for (let i = 2; i <= 10; i++) (i % 2 == 0) ? console.log(i) : '' ; 

console.log('------ 2.13 Task 5 ');
// Replace "for" with "while"
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  //alert( `number ${i}!` );
  console.log( `number ${i}!` );
} // 0, 1, 2

let j = 0;
while (j < 3) {
  console.log( `number (while loop) ${j}!` );
  j++;
}; // 0, 1, 2

console.log('------ 2.13 Task 6 ');
// Repeat until the input is correct
/**
Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters 
a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. 
There’s no need to implement a special handling for a non-numeric input in this task.
 */

while (true) {
  let userInput = prompt("Please enter a number", 0);
  //if (userInput > 100 || userInput === '' || userInput === null) // or
  if (userInput > 100 || !userInput) 
    break;
};

console.log('------ 2.13 Task 7 ');

// Output prime numbers
/**
Write the code which outputs prime numbers in the interval from 2 to n.
*/
let n = 15;

// if (n === 2) {
//   console.log(n);
//   break;
printPrimeNumbers:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue printPrimeNumbers;
    }
  }
  console.log(i);
};

console.log(`====== 2.14 The 'switch' statement ======`);
//      ====== 2.14 The 'switch' statement ======  


console.log('------ 2.14 Task 1 ');
// Rewrite the "switch" into an "if"
// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

const browser = 'Safari';

if (browser === 'Edge') {
  console.log(`You've got the Edge!`);
} else if (
  browser === 'Chrome' || 
  browser === 'Firefox' || 
  browser === 'Safari' || 
  browser === 'Opera'
  ) {
    console.log( 'Okay we support these browsers too' );
} else {
    console.log( 'We hope that this page looks ok!' );
}

console.log('------ 2.14 Task 2 ');
// Rewrite the code below using a single switch statement:

let aA = +prompt('a?', '');

// if (aA == 0) {
//   alert( 0 );
// }
// if (aA == 1) {
//   alert( 1 );
// }

// if (aA == 2 || aA == 3) {
//   alert( '2,3' );
// }

switch (aA) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log('2,3');
    break;

  default:
    break;
}
/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week03.Meeting05.V2 *
 * Done by --------------- Lilit Khalatyan     *
 * Date ------------------ 19-02-2022          *
/**********************************************/

/** Աշխատավարձի հաշվարկ
 * Մաքուր աշխատավարձը ստանալու համար պետք է գրանցված աշխատավարձից հանել եկամտային հարկը, 
սոց․ վճարը, դրոշմանիշային վճարը 

- եկամտային հարկը, 
    --- 2022 թվականի հունվարի 1-ից եկամտային հարկի դրույքաչափը կկազմի 21%

- սոց․ վճարը, ՊԵԿ-ի էջից https://www.petekamutner.am/Content.aspx?itn=tsTISocialSecurityPayment
  2022 թվականի հունվարի 1-ից դեկտեմբերի 31-ը ներառյալ՝ սոցիալական վճարը հաշվարկվում է հետևյալ կերպ.
    --- 4․5 տոկոսի չափով, եթե աշխատավարձի ամսական չափը չի գերազանցում 500 000 դրամը,
    --- 10 տոկոսի և 27 500 դրամի տարբերության չափով, եթե աշխատավարձի ամսական չափը գերազանցում է 500 000 դրամը,

- Դրոշմանիշային վճար
    ---  Մինչև 100 000 դրամ հաշվարկման բազայի դեպքում	 1500 դրամ
    ---  100 001-ից մինչև 200 000 դրամ հաշվարկման բազայի դեպքում	 3000 դրամ
    ---  200 001-ից մինչև 500 000 դրամ հաշվարկման բազայի դեպքում	 5500 դրամ
    ---  500 001-ից մինչև 1 000 000 դրամ հաշվարկման բազայի դեպքում	 8500 դրամ
    ---  1 000 001 դրամ և ավելի հաշվարկման բազայի դեպքում	 15 000 դրամ
 */

function incomeTax(amount) {
  return amount * 0.21;
}

function socialFee(amount) {
  if (amount < 500000) {
    return amount * 0.045;
  }
  return amount * 0.1 - 27500;
}

function stamp(amount) {
  if (amount < 100000) {
    return 1500;
  } else if (amount <= 200000) {
      return 3000;
  } else if (amount <= 500000) {
      return 5500;
  } else if (amount <= 1000000) {
      return 8500;
  }
  return 15000;
}

function taxCollector(amount) {
  return incomeTax(amount) + socialFee(amount) + stamp(amount);
}

function salaryCalculator(gross) {
  return gross - taxCollector(gross);
}

let test = 1200000;
console.log( salaryCalculator(test) );
console.log( incomeTax(test) );
console.log( socialFee(test) );
console.log( stamp(test) );

//
console.log('====== 4.4 Object methods, "this" ======');
console.log('------ 4.4 Task 1/3');
// 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
console.log( user.ref.name );     //undefined

// 2
function makeUser2(){
  return this; 
}
console.log( makeUser2().name );  // undefined

// 3
function makeUser3() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}
let user3 = makeUser3();
console.log( user3.ref().name );  // John


console.log('------ 4.4 Task 2/3');
/** Create an object calculator with three methods:

* read() prompts for two values and saves them as object properties.
* sum() returns the sum of saved values.
* mul() multiplies saved values and returns the result.
*/

let calculator = {
  read() {
    this.val1 = +prompt('Enter Value 01', 0);
    this.val2 = +prompt('Enter Value 02', 0);
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  }
};

calculator.read();
console.log( 'Sum = ', calculator.sum() );
console.log( 'Mul = ', calculator.mul() );
//

console.log('------ 4.4 Task 3/3');
// Modify the code of up, down and showStep to make the calls chainable,like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log( this.step );
    return this;
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep()
// end of 3/3

console.log('====== 4.5 Constructor, operator "new" ======');
console.log('------ 4.5 Task 2/3');
// Create new Calculator
// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator2() {
  this.read = function() {
    this.v1 = +prompt('Enter 1st val', 0);
    this.v2 = +prompt('Enter 2nd val', 0);
  },
  this.sum = function() {
    return this.v1 + this.v2;
  },
  this.mul = function() {
    return this.v1 * this.v2;
  }
};

let calculator2 = new Calculator2();

calculator2.read();
console.log('Sum is = ', calculator2.sum() );
console.log( 'Mul is = ', calculator2.mul() );
// end of 2/3

console.log('------ 4.5 Task 3/3');

function Accumulator(startingValue) {             // Create a constructor function Accumulator(startingValue).
  this.value = startingValue,                     // Store the “current value” in the property value. 
  this.read = function() {                        // the value property is the sum of all user-entered values 
    this.value += +prompt('Enter new number', 0); // with the initial value startingValue.
  }
};

let accumulator = new Accumulator(1);
accumulator.read(); // 5 
accumulator.read(); // 9
console.log(accumulator.value);                   // 15 is returned, which is result of 1 + 5 + 9 
//

// console.log('====== 4.6 Optional chaining `?.` ======');

// console.log('====== 4.7 Symbol type ======');

//console.log('====== 4.8 Object to primitive conversion ======');


console.log('====== 5.1 Methods of primitives ======');
/** Learnings
 There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
 Primitives except null and undefined provide many helpful methods. 
 << let num = Number("123") >> should be used instead of << new Number(123) >> 
 */

console.log('------ 5.1 Task 1/1');
/** ------ 5.1 Task 1/4 ** Can I add a string property?
 Consider the following code:
 How do you think, will it work? What will be shown?
 */

let str = "Hello";
str.test = 5;
console.log(str.test); // I've got undefined
// end of 1/1


console.log('====== 5.2 Numbers ======');

console.log( 7.3e9, 7300000000, 7_300_000_000);
console.log( 1e-3, 0.001);

// ***** Hex, binary and octal numbers
// 255 /10/ === 0xff=0XFF /Hex/ === 0b11111111 /binary/ === 0o377 /octal/ 

// ***** method toString()                        // num.toString(base)
console.log(255..toString(2));                    // 11111111
console.log(255..toString(32));                   // ==> 7v
console.log((255).toString(32));                  // ==> 7v

// ***** Rounding
console.log( 'Math.floor 3.1 is = ', Math.floor(3.1) );
console.log( 'Math.ceil 3.1 is = ',Math.ceil(3.1) );
console.log( 'Math.round 3.4 and 3.8 is =  ', Math.round(3.4), ' and ', Math.round(3.8) );
console.log( 'Math.trunc 3.1 is = ',Math.trunc(3.1) );

// ***** method toFixed(n) -- always returns a string.
let num = 1.25;
console.log( 'method toFixed(n)', num.toFixed(1), num.toFixed(5) ); // 1 , 1.25000

// ***** 0.1 + 0.2 !== 0.3   case
console.log( 'method toFixed(n)', (0.1).toFixed(20) ); // 1 , 0.10000000000000000555
// avoid this
let sum = 0.1 + 0.2;
console.log( sum.toFixed(4) );                // 0.3000
console.log( sum.toFixed(1) == 0.3);          // true
console.log( sum.toFixed(1) === 0.3);         // falce
console.log( typeof(sum.toFixed(1)));         // is String !!
console.log( typeof(0.3));                    // number
// other option
console.log( (0.1 * 10 + 0.2 * 10) / 10 );    // 0.3

// there are exactly 64 bits to store a number: 
// -- 52 of them are used to store the digits, 
// -- 11 of them store the position of the decimal point (they are zero for integer numbers), 
// -- and 1 bit is for the sign. ==>> 0 & -0

//  empty or a space-only string is treated as 0 in all numeric functions including isFinite
// parseInt/parseFloat

console.log('------ 5.2 Task 1/6');
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let num1 = +prompt('Enter first number', 0);
let num2 = +prompt('Enter second number', 0);

console.log('The sum is = ', num1 + num2);
// end of 1/6

console.log('------ 5.2 Task 2/6');
// 6.35.toFixed(1) == 6.3
// so that result will be 6.4

let number = Math.round(6.35 * 10);   // 64
console.log(number);
console.log(number / 10);             // 6.4
// end of 2/6

console.log('------ 5.2 Task 3/6');
// 3
// Create a function readNumber which prompts for a number 
// until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
// In that case, the function should return null.

function readNumber() {
  while (true) {
    let userInput = prompt('Please enter a number', 0);
    if (userInput === ' ' || userInput === '' || userInput === null) {
      return null;
    } else if (isFinite(userInput)) {
      return +userInput;
    }
    break;
  }
};
// alert (readNumber());
// end of 3

console.log('------ 5.2 Task 4/6');
// 4
// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }                    // because 0.2 + 0.2 !== 0.4 and so with 10
// end of 4

console.log('------ 5.2 Task 5/6');
// 5
// Write the function random(min, max) to generate a random 
// floating-point number from min to max (not including max).

function random(min, max) {
  return (Math.random() * (max - min) + min);
};

console.log(random(1, 5));
// end of 5

console.log('------ 5.2 Task 6/6');
// 6
// Create a function randomInteger(min, max) that generates a random 
// integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability.

function randomInteger(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

console.log(randomInteger(1, 5));
// end of 6 -- never get 5 -- solved


console.log('====== 5.3 Strings ======');
// let str = 'Widget with id';
// console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// console.log( str.indexOf("id") );     // 1, "id" is found at the position 1 (..idget with id)
// console.log( str.indexOf('id', 2) )   // 12

console.log('------ 5.3 Task 1/4');
// 1
// Write a function ucFirst(str) that returns the string str with the uppercased first character
function ucFirst(str) {
  let str1 = '';
  str1 = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    str1 = str1 + str[i];
  }
  return str1;
};

console.log( ucFirst('lilit') );
// end of 1

console.log('------ 5.3 Task 2/4');
//2
// Write a function checkSpam(str) that returns 
// true if str contains ‘viagra’ or ‘XXX’, otherwise false.

function checkSpam(str) {
  let str2 = str.toLowerCase();
  return str2.includes('viagra') || str2.includes('xxx');
};

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xx') );
// end of 2

console.log('------ 5.3 Task 3/4');
// 3

// Create a function truncate(str, maxlength) that checks the length of the str 
// and, if it exceeds maxlength – replaces the end of str with the ellipsis 
// character "…", to make its length equal to maxlength.
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }
  return str;
};

console.log( truncate('What I\'d like to tell on this topic is:', 20) );
// end of 3


console.log('------ 5.3 Task 4/4');
// 4
// We have a cost in the form "$120". 
// That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that 
// would extract the numeric value from such string and return it.


function extractCurrencyValue(str) {
  return +str.slice(1)
};

console.log( extractCurrencyValue('$120') === 120 );
// end of 4


console.log('====== 5.4 Arrays ======');
console.log('------ 5.4 Task 1/5');
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log( fruits.length ); // 4
// end of 1/4

console.log('------ 5.4 Task 2/5');
// Let’s try 5 array operations.

let styles = ['Jazz', 'Blues'];                     // Create an array styles with items “Jazz” and “Blues”.
styles.push('Rock-n-Roll');                         // Append “Rock-n-Roll” to the end.
//console.log (Math.floor(styles.length / 2));
styles[Math.floor(styles.length / 2)] = 'Classics'; // Replace the value in the middle by “Classics”.
styles.shift();                                     // Strip off the first value of the array and show it.
styles.unshift('Rap', 'Reggae');                    // Prepend Rap and Reggae to the array.
console.log(styles);
// end of 2/5

console.log('------ 5.4 Task 3/5');
// What is the result? Why?

let arr = ['a', 'b', 'c'];

arr.push(function() {
  alert( this );
})

arr[3]()  // a,b,c,function()}{alert(this);}

console.log('------ 5.4 Task 4/5');
// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput() {
  // returning sum of given array
  function sum(arr) {
    let sum = 0;
    for (let val of arr) {
      sum += +val;
    }
    return sum;
  };
  // building array from input
  let array = [];

  while (true) {
    let userInput = prompt('Please enter a number', 0);
    if ( !isFinite(userInput) || userInput === '' || userInput === null) {
      break;
    }
    array.push(+userInput);
  }
  return ( sum(array) );
};
console.log( sumInput() );
// end of 4/5

console.log('------ 5.4 Task 5/5'); // ***** Kadane's algorithm *****

// The input is an array of numbers, e.g. arr = [1, -2, 3, -9].
// The task is: find the contiguous subarray of arr with 
// the maximal sum of items.

function getMaxSubSum(arr){
  let best_sum = 0
  let current_sum = 0
  for (let num of arr) {
    current_sum = Math.max(0, current_sum + num);
    best_sum = Math.max(best_sum, current_sum);
  }
  return best_sum;
}
console.log( getMaxSubSum([-1, 2, 3, -9]) );      // 5
console.log( getMaxSubSum([-1, -2, -3]) );        // 0
console.log( getMaxSubSum([2, -1, 2, 3, -9]) );   // 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );  // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) );      // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) );           // 6
// end of 5/5
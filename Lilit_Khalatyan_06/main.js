/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week04.Meeting06    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 26-02-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

console.log('====== 5.5 Array methods ======');
console.log('------ 5.5 Task 1/13');
// ***** Write the function camelize(str) that changes 
// dash-separated words like “my-short-string” into camel-cased “myShortString”.

// Solution #1
function camelize(str) {
    let result = '';
    for (let i = 0; i < str.length; i++ ) {
        if (str[i] === '-') {
            result += str[i + 1].toUpperCase();
            i++;
        } else {
            result += str[i];
        }
    }
    return result;
};

// Solutuin #2
function camelize2(str) {
    return str
      .split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      ).join('');
  }

console.log( camelize("background-color") );          // 'backgroundColor';
console.log( camelize("list-style-image") );          // 'listStyleImage';
console.log( camelize("-webkit-transition") );        // 'WebkitTransition';

console.log( camelize2("background-color") );          // 'backgroundColor';
console.log( camelize2("list-style-image") );          // 'listStyleImage';
console.log( camelize2("-webkit-transition") );        // 'WebkitTransition';
// end of 1/13



console.log('------ 5.5 Task 2/13');
// ***** Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements with values higher or equal to a and lower or equal to 
// b and return a result as an array.

// The function should not modify the array. It should return the new array. 

function filterRange(arr, a, b) { // a = min, b = max
    filteredArray = arr.filter(i => (i >= a && i <= b));
    return filteredArray;
}

let arr = [5, 3, 8, 1];
console.log( filterRange(arr, 1, 4) ); // 3,1
console.log( arr );                    // 5,3,8,1
// end of 2/13




console.log('------ 5.5 Task 3/13');
// ***** Write a function filterRangeInPlace(arr, a, b) 
// that gets an array arr and removes from it all values 
// except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < a || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}
// [???]
// function filterRangeInPlace(array, a, b) {
//     array.filter((arr) => arr < a || arr > b)
// }

let array = [5, 3, 8, 1, 11, 2 , 7, 2.5];
filterRangeInPlace(array, 1, 4);
console.log( array );                       // [3, 1, 2, 2.5]
// end of 3/13




console.log('------ 5.5 Task 4/13');
// ***** Sort in decreasing order

let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => a - b);
console.log(arr4);                          // [-10, 1, 2, 5, 8]
// end of 4/13




console.log('------ 5.5 Task 5/13');
// ***** Copy and sort array
// Create a function copySorted(arr)

function copySorted(arr) {
    return arr.slice().sort();
}

let arr5 = ["HTML", "JavaScript", "CSS"];
let sortedArray5 = copySorted(arr5) ;
console.log( arr5 );                        //['HTML', 'JavaScript', 'CSS']
console.log( sortedArray5 );                //['CSS', 'HTML', 'JavaScript']
// end of 5/13

console.log('------ 5.5 Task 6/13');
// ***** Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

// ** Part 1
// implement the method calculate(str) that takes a string like "1 + 2" in 
// the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
// Should understand plus + and minus -.

// ** Part 2
// Then add the method addMethod(name, func) that teaches the calculator a new operation. 
// It takes the operator name and the two-argument function func(a,b) that implements it.  


function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    
    this.calculate = function(str) {
        
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }                                                 // [???]
        if (!(this.methods[op] === "-" ||
        this.methods[op] === "+" ||
        this.methods[op] === "/" ||
        this.methods[op] === "*" ||
        this.methods[op] === "**" ) || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result6 = powerCalc.calculate("2 + 3");
console.log( result6 );                         // NaN
// end of 6/13




console.log('------ 5.5 Task 7/13');
// ***** You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users7 = [ john, pete, mary ];

let names7 = users7.map(item => item.name);

console.log( names7 );                      // John, Pete, Mary

// end of 7/13




console.log('------ 5.5 Task 8/13');
// ***** You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with 
// id and fullName, where fullName is generated from name and surname.

// *** you need to map one array of objects to another. Try using => here. There’s a small catch.

let john8 = { name: "John", surname: "Smith", id: 1 };
let pete8 = { name: "Pete", surname: "Hunt", id: 2 };
let mary8 = { name: "Mary", surname: "Key", id: 3 };

let users8 = [ john8, pete8, mary8 ];

let usersMapped = users8.map(item => ({
    id: item.id, 
    fullName: `${item.name} ${item.surname}`
}));

console.log( usersMapped ) 
console.log( usersMapped[0].id )        // 1
console.log( usersMapped[0].fullName )  // John Smith

// end of 8/13



console.log('------ 5.5 Task 9/13');
// ***** Sort users by age
// Write the function sortByAge(users) that gets an array of objects 
// with the age property and sorts them by age.

let john9 = { name: "John", age: 25 };
let pete9 = { name: "Pete", age: 30 };
let mary9 = { name: "Mary", age: 28 };

let arr9 = [ pete9, john9, mary9 ];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

sortByAge(arr9);

console.log( arr9 );                // now: [john, mary, pete]
console.log(arr9[0].name);          // John
console.log(arr9[1].name);          // Mary

// end of 9/3




console.log('------ 5.5 Task 10/13                          *** skipped this one');
// ***** Shuffle an array

console.log('------ 5.5 Task 11/13');
// ***** Get average age

// Write the function getAverageAge(users) that 
// gets an array of objects with property age and returns the average age.

let john11 = { name: "John", age: 25 };
let pete11 = { name: "Pete", age: 30 };
let mary11 = { name: "Mary", age: 29 };

let arr11 = [ john, pete, mary ];

function getAverageAge(users) {
    let len1 = users.length;
    let ageSum = users.reduce((prev, user) => prev + user.age, 0 );
    return ageSum / len1;
}

console.log( getAverageAge(arr11) );                // 27.666666666666668

// end of 11/13



console.log('------ 5.5 Task 12/13');
// ***** Filter unique array members

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return [...new Set(arr)];
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );               //   ['Hare', 'Krishna', ':-O']

// end f 12/13



console.log('------ 5.5 Task 13/13');
// ***** Create keyed object from array

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

function groupById(arr) {
    return arr.reduce((array, item) => (array[item.id] = item, array), {})              // it also sorting, why?? 
}

let users13 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users13);
  console.log(usersById);
  
  /*
  // after the call
  
  usersById = {
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    john: {id: 'john', name: "John Smith", age: 20},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

// end of 13/13
// end of 5.5

//                               ** * **
console.log('====== 5.6 Iterables ======');

// let range = {                                                [???]
//     from: 1,
//     to: 5
// }
// for (let num of range){
//     console.log(num);
// }
for (let i of '12345') {
    console.log(i);
}

for (let char of 'HELLO') {
    console.log(char);
}


//                               ** * **
console.log('====== 5.7 Map and Set ======');



console.log('------ 5.7 Task 1/3');
// ***** Filter unique array members
// Create a function unique(arr) that should return an array with unique items of arr.

function uniqueArray(arr) {
    return Array.from(new Set(arr));
}

let values571 = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( uniqueArray(values571) ); // Hare, Krishna, :-O
// end of 1/3



console.log('------ 5.7 Task 2/3');
// ***** Filter anagrams
// Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split('').sort().join('');
      map.set(sorted, word);
    }
    return Array.from(map.values());
}
  
let arr572 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr572) );


console.log('------ 5.7 Task 3/3');
// ***** Iterable keys                                        [???]

let map573 = new Map();

map573.set("name", "John");

let keys = Array.from(map573.keys());    // replaced
console.log( keys );
keys.push("more");                       // wrong,     
console.log( map573 );




//                               ** * **
console.log('====== 5.9 Object.keys, values, entries ======');
console.log('------ 5.9 Task 1/2');
// ***** Sum the properties
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns 
// the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( Object.values(salaries) );
console.log( sumSalaries(salaries) );
// end of 1/2




console.log('------ 5.9 Task 2/2');
// ******* Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};
  
console.log( count(user) );
// end of 2/2

// //                               ** * **
// console.log('====== 5.10 Destructuring assignment ======');
// console.log('------ 5.10 Task 1/2');




// //                               ** * **
console.log('====== 5.11 Date and timet ======');
console.log('------ 5.11 Task 1/8');
// ****** Create a Date object for the date: 
// Feb 20, 2012, 3:12am. The time zone is local.

let date1 = new Date(2012, 1, 20, 3, 12);
console.log( date1 );             

// Mon Feb 20 2012 03:12:00 GMT+0400 (Armenia Standard Time)




console.log('------ 5.11 Task 2/8');
// ****** Show a weekday
// Write a function getWeekDay(date) to show the weekday in 
// short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
let date = new Date(2022, 2, 14)
console.log( getWeekDay(date) );




console.log('------ 5.11 Task 3/8');
// ***** European weekday               

function getLocalDay(date) {

    let eudays = [7, 1, 2, 3, 4, 5, 6];
    return eudays[date.getDay()];
}
let date511 = new Date(2022, 2, 14)
console.log( getLocalDay(date511) );



console.log('------ 5.11 Task 4/8');
// ***** Which day of month was many days ago?
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}
let date11 = new Date(2022, 2, 14)
console.log( getDateAgo(date11, 2) ); // 12



console.log('------ 5.11 Task 5/8');
// ***** Last day of month?

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
console.log( getLastDayOfMonth(2022, 0) );
console.log( getLastDayOfMonth(2022, 1) );



console.log('------ 5.11 Task 6/8');
// ***** How many seconds have passed today?

function getSecondsToday() {
    let getDay = new Date();
    let timeSeconds = getDay.getHours() * 3600 + 
                    getDay.getMinutes() * 60 + 
                    getDay.getSeconds();
    return timeSeconds;
}
console.log( getSecondsToday() );



console.log('------ 5.11 Task 7/8');
// ***** How many seconds till tomorrow?

function getSecondsToTomorrow() {
    let now = getSecondsToday();
    return 86400 - now;
}
console.log( getSecondsToTomorrow() );



console.log('------ 5.11 Task 8/8');
// ***** Format the relative date

function formatDate(date) {
    let sec = date.getHours() * 3600 + 
                date.getMinutes() * 60 + 
                date.getSeconds();

    if (sec < 1) {
        return 'right sec';
    } else if (sec < 60) {
        return `${sec} sec. ago`;
    } else if (sec < 3600) {
        let min = Math.round(sec / 60);
        return `${min} * min. ago`;
    }
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}`;                      // 5.3.2022 1:2 [???]
}
console.log( formatDate(new Date()) ); 

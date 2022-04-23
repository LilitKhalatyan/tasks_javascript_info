/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week1.Meeting2      *
 * Done by --------------- Lilit Khalatyan     *
 * Date ------------------ 06-02-2022          *
/**********************************************/

/** V A R I A B L E S 
 * ==== #1 Working with variables ====
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
 */
let admin;
let name;

name = "John"; // 'name' is deprecated.ts(6385) warning here. 
admin = name;

console.log(admin);

/** V A R I A B L E S 
 * ==== #2 Giving the right name ====
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
 */

let ourPlanetName = "Earth";
let currentVisitorName;

/** Data types 
 * ==== #1 What is the output of the script? ====
 */

let name1 = "Ilya";

console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name1"}` ); // hello name
console.log( `hello ${name1}` ); // hello Ilya

// other 

console.log("The type of 12 is ", typeof (12)); 
console.log("The type of 'Տեքստ' is ", typeof ("Տեքստ"));
console.log("Doing maths is “safe” in JavaScript ", (-5 / 0));
console.log("The type of +-Infinity is ", typeof (5 / 0));
let a;
let b = undefined;
console.log("The type of an undefined variable is ", typeof (a));
console.log("The type of a varieble assigned as undefined is ", typeof (b));
console.log("The type of NaN is ", typeof (NaN));
console.log("The type of NaN^2 is ", typeof (NaN ** 0));
console.log("The NaN^2 is also number and is =", (NaN ** 0));
console.log("The type of 12n is ", typeof (12n));
console.log("The type of logical statement is ", typeof (4 > 1), typeof (true), typeof (false));
console.log("The type of null /reference to a non-existin g object/ is ", typeof (null));
console.log("The type of an array is ", typeof ([1, 5, 10]));
console.log("The type of an object is ", typeof ({1: "a"}));
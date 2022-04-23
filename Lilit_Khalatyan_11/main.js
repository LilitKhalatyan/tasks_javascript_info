/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week07              *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 16-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                               ** * **  

console.log('====== 8.1 Prototypes, inheritance ======');

console.log('------ 8.1 Task 1/4'); 
// ** * **   Working with prototype

// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // this is print /true/ because it will take it's OWN property

delete rabbit.jumps;

console.log( rabbit.jumps ); // as rabbit does not have ti's own jumps probperty, it will 
                            // inheritate from animal's prototipe, which is /null/

delete animal.jumps;

console.log( rabbit.jumps ); // no prototype, so ot will print /undefined/



//                               ** * **  


console.log('------ 8.1 Task 2/4'); 
// ** * **   Searching algorithm

// /*1/ Use __proto__ to assign prototypes in a way that 
// any property lookup will follow the path: pockets → bed → table → head. 
// For instance, pockets.pen should be 3 (found in table), 
// and bed.glasses should be 1 (found in head).

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log( bed.glasses );       // ==> 1 
console.log( pockets.pen );       // ==> 3
console.log( pockets.glasses );   // ==> 1

// /*2/ is it faster to get glasses as 
// pockets.glasses or head.glasses? Benchmark if needed.

//* Answer -- I think head.glasses will be faster because head works with it's own glass property


//                               ** * **  


console.log('------ 8.1 Task 3/4'); 
// ** * **   Where does it write?
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal3 = {
  eat() {
    this.full = true;
  }
};

let rabbit3 = {
  __proto__: animal3
};

rabbit3.eat();
//* Answer -- I think rabbit3, because eat() uses sets this

//* testing
for (let prop in animal3) {
  console.log(prop);            // eat
}

for (let prop in rabbit3) {
  console.log(prop);             // full eat
}


//                               ** * **  


console.log('------ 8.1 Task 4/4'); 
// ** * **  Why are both hamsters full?
// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?


let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    this.stomach = food;
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
console.log( speedy.stomach );    // apple
console.log( lazy.stomach );      // []
console.log( hamster.stomach );   // []
// This is JS


console.log('====== 8.2 F.prototype ======');

console.log('------ 8.2 Task 1/2'); 
// ** * **   Changing "prototype"

//                                  *  

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit82 = new Rabbit();
// console.log( rabbit82.eats );       // true


//                                  *  


// case 2 :: Modified :: Rabbit.prototype = {};

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit82 = new Rabbit();
// Rabbit.prototype = {};
// console.log( rabbit82.eats );       // true [???]


//                                  *  


// // case 3 :: Modified :: Rabbit.prototype.eats = false;     

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit82 = new Rabbit();

// Rabbit.prototype.eats = false;
// console.log( rabbit82.eats );       // False


//                                  *  


// case 4 :: Modified :: Rabbit.prototype.eats = false;      
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit82 = new Rabbit();

delete Rabbit.prototype.eats;
console.log( rabbit82.eats );       // will return undefined



//                               ** * **


console.log('------ 8.2 Task 2/2'); 
// ** * **   Create an object with the same constructor  [???]


//                               ** * **


console.log('====== 8.3 Native prototypes ======');

String.prototype.show = function() {
  console.log(this);
};
"BOOM!".show(); // [String: 'BOOM!']

console.log( "Bonjour\n".repeat(5) );



console.log('------ 8.3 Task 1/2'); 
// ** * **    Add method "f.defer(ms)" to functions
//            Add to the prototype of all functions the method defer(ms), 
//            that runs the function after ms milliseconds.

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);                  // "Hello!" after 1 second


//                               ** * **


console.log('------ 8.3 Task 2/2');  // [???]
// ** * **    Add the decorating "defer()" to functions
//            Add to the prototype of all functions the method defer(ms), 
//            that returns a wrapper, delaying the call by ms milliseconds.


// Function.prototype.defer = function(ms) {
//       // [???]
// };

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); 


//                               ** * **


console.log('====== 8.4 Prototype methods, objects without __proto__ ======');
console.log('------ 8.4 Task 1/2'); 
// ** * **    Add toString to the dictionary

let dictionary = Object.create(null, {                    // to store any key/value pairs.
  toString: {                                             // Add method dictionary.toString()
    value() {
      return Object.keys(this).join();                    // should return a comma-delimited list of keys. 
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 

for(let key in dictionary) {
  console.log(key);
}

console.log(dictionary);



//                               ** * **


console.log('------ 8.4 Task 1/2'); 
// ** * **    The difference between calls

function RabbitNew(name) {
  this.name = name;
}
RabbitNew.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbitNew = new RabbitNew("Rabbit");

// *explain output
rabbitNew.sayHi();                // will print name passed => Rabbit
RabbitNew.prototype.sayHi();                  // forLater
Object.getPrototypeOf(rabbitNew).sayHi();     // forLater
rabbitNew.__proto__.sayHi();                  // forLater



//                            End of Homework
//                               ** * **
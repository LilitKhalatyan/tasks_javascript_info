/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week07              *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 19-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                               ** * **  

console.log('====== 9.1 Class basic syntax ======');
console.log('------ 9.1 Task 1/1'); 
// ** * **             Rewrite it in the “class” syntax.

// function Clock({ template }) {
  
//     let timer;
  
    // function render() {
    //     let date = new Date();
  
    //     let hours = date.getHours();
    //     if (hours < 10) hours = '0' + hours;

    //     let mins = date.getMinutes();
    //     if (mins < 10) mins = '0' + mins;

    //     let secs = date.getSeconds();
    //     if (secs < 10) secs = '0' + secs;

    //     let output = template.replace('h:m:s', hours + ':' + mins + ':'+ secs);
        //.replace('h', hours)
        // .replace('m', mins)
        // .replace('s', secs);

    //     console.log(output);
    // }
  
    // this.stop = function() {
    //     clearInterval(timer);
    // };
  
    // this.start = function() {
    //     render();
    //     timer = setInterval(render, 1000);
    // };
  
//   }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();


// Class Version

class Class_clock {
    constructor({template}){
        this.template = template;
    }
        render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        
        console.log(output);
    }

    toStop = function() {
        clearInterval(this.timer);
    }
  
    toStart = function() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
        //this.timer = setInterval(this.render(), 1000);
    }

}
let clock91 = new Class_clock({template: 'h:m:s'});
clock91.toStart();


//                               ** * **  

console.log('====== 9.2 Class inheritance ======');
console.log('------ 9.2 Task 1/2'); 
// ** * **   Fix the code with Rabbit extending Animal.

class Animal92 {
    constructor(name) {
        this.name = name;
    } 
  }
  
class Rabbit92 extends Animal92 {
    constructor(name) {
        super(name); //  this.name = name is not correct, we have to call superior constructor
        this.created = Date.now();
    }
}
  
let rabbit92 = new Rabbit92("White Rabbit");
console.log(rabbit92.name);               // White Rabbit


//                               ** * **  

console.log('------ 9.2 Task 2/2'); 
// ** * **      Create a new class ExtendedClock that inherits from Clock 
//              and adds the parameter precision – the number of ms between “ticks”. 
//              Should be 1000 (1 second) by default.

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }

    stop = function() {
        clearInterval(this.timer);
    }
  
    start = function() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor({ template }, precision) {
      super({ template });
      this.precision = precision;
    }

    start = function () {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
};

let clock = new ExtendedClock({template: 'h:m:s'}, 5000);
clock.start();

//                               ** * **  

console.log('====== 9.3 Static properties and methods ======');
console.log('------ 9.3 Task 1/1'); 

class Rabbit extends Object {
  constructor(name) { // close to ------ 9.2 Task 1/2', we should call/implement parent
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log( rabbit.hasOwnProperty('name') ); // true
console.log( rabbit.name );                   // Rab
console.log( rabbit.surname );                // undefined
console.log( typeof rabbit );                 // object
console.log( rabbit );                        // { name: 'Rab' }
console.log( Rabbit.prototype.__proto__ === Object.prototype )  // true


// //                               ** * **  
// console.log('====== 9.4 Private and protected properties and methods ======'); // [no task]

// //                               ** * **  
// console.log('====== 9.5 Extending built-in classes ======'); // [no task]

//                               ** * **  

console.log('====== 9.6 Class checking: "instanceof" ======'); 
console.log('------ 9.6 Task 1/1'); 
// ** * **   In the code below, why does instanceof return true? 
//           We can easily see that a is not created by B()

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( A );                   // [Function: A]
console.log( typeof A );            // function
console.log( A.prototype );         // {}
console.log( typeof A.prototype );  // object
console.log( a );                   // {}

console.log( a instanceof B );      // true
console.log (Object.getPrototypeOf(a) === B.prototype ); // true 


// ** instanceof ** returns true if obj belongs to the Class or a class inheriting from it.
// tests to see if the prototype property of a constructor appears 
// anywhere in the prototype chain of an object.

// a = new A() ;; A.prototype = B.prototype = {} ==> a is instance of B 



//                               ** * **  

// console.log('====== 9.7 Class checking: "instanceof" ======'); // [no task]



//                            End of Homework
//                               ** * **  



// class User {
//     constructor(name, surname, age) {
//       this.name = name;
//       this.surname = surname;
//       this.age = age;
//     }
//     sayHi() {
//       console.log( this.name, this.surname );
//     }
//     ageCheck() {
//         (this.age > 18) ? console.log( 'allow' ) : console.log( 'reject' );
//     }
// }
// let user = new User("John", "P", 20);
// user.sayHi();                                               // John P
// user.ageCheck();                                            // allow
// console.log( typeof User );                                 // function
// console.log( typeof sayHi );                                // undefined
// console.log( User.prototype.sayHi );                        // ƒ sayHi() {console.log( this.name, this.surname );}
// console.log( User === User.prototype.constructor );         // true
// console.log (Object.getOwnPropertyNames(User.prototype) );  // ['constructor', 'sayHi', 'ageCheck']
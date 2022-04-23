/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Missing Tasks -JSON *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 12-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/


//                                  *  
//                               ** * **  


console.log('====== 5.12 JSON methods, toJSON ======');
console.log('------ 5.12 Task 1/2'); 
// ** * **   Turn the object into JSON and back
let user512 = {
  name: "John Smith",
  age: 35
};
  
//userJson = JSON.stringify(user512);
userBack = JSON.parse(JSON.stringify(user512));
console.log( userBack );        // {name: 'John Smith', age: 35}



//                               ** * ** 



console.log('------ 5.12 Task 2/2'); 
// ** * **   Exclude backreferences

let room1 = {
  number: 23
};

let meetup1 = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room1
};

// circular references
room1.occupiedBy = meetup1;
meetup1.self = meetup1;

console.log( JSON.stringify(meetup1.title) );       // "Conference"
console.log( JSON.stringify(meetup1.occupiedBy) );  // [{"name":"John"},{"name":"Alice"}]
console.log( 'END');


console.log( JSON.stringify(meetup1, function replacer(key, value) {
  return (key != "" && value == meetup1) ? undefined : value;
}));
// {"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
console.log( 'END 2');


//                               ** * **  


console.log('====== 6.9 Decorators and forwarding, call/apply ======');
console.log('------ 6.9 Task 1/2'); 


//                            End of Homework  
//                               ** * **  
//                                  *  



//  JSON (JavaScript Object Notation)
//           JSON.stringify      to convert objects into JSON.
//           JSON.parse          to convert JSON back into an object.
//           JSON Supportys: 


//                               ** * **  
// Objects { ... }

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

console.log( JSON.stringify(meetup) );
// {"title":"Conference","room":{"number":23,"participants":["john","ann"]}}


//                               ** * **  
// Arrays [ ... ]
let strFromArr = JSON.stringify([1, 2, 'asd']);

console.log( strFromArr );                        // [1,2,"asd"]
console.log( strFromArr[0] );                     // [
console.log( strFromArr[2] );                     // ,
console.log( typeof strFromArr );                 // string
// Primitives:

//                               ** * **  
//        strings,

let strFromStr = JSON.stringify('This is JS');
console.log( strFromStr );                        // "This is JS"
console.log( strFromStr[0] );                     // "
console.log( strFromStr[2] );                     // h
console.log( typeof strFromStr );                 // string

//                               ** * **  
//        numbers,

let strFromNum = JSON.stringify(4212);
console.log( strFromNum );                        // 4212
console.log( strFromNum[0] );                     // 4
console.log( strFromNum[2] );                     // 1
console.log( typeof strFromNum );                 // string

//                               ** * **  
//        boolean values true/false,

console.log( JSON.stringify(true) );              // true
console.log( typeof JSON.stringify(true) );       // string [???] '' && "" 


//                               ** * **  
//        null.

console.log( JSON.stringify(null) );              // null



//                               ** * **  
//                               ** * **  

let user = {
  name: "John",
  age: 30,

  makeUserString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
console.log(user.makeUserString());

let user2 = {
  name: "Cathrin",
  age: 35
};
console.log('User2 ==> ', user2);
console.log('Type of User2 ==> ', typeof user2);
console.log('User2 after stringify ==> ', JSON.stringify(user2));

let user3 = JSON.stringify(user2);
console.log(user3);
console.log('Type of User3 ==> ', typeof user3);

console.log('User 3 after JSON.parse ==> ', JSON.parse(user3));



//                               ** * **  
//                               ** * **  


// The important limitation: there must be no circular references.

// let json = JSON.stringify(value[, replacer, space])


let room11 = {
  number: 23
};

let meetup11 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room11
};

room11.occupiedBy = meetup11;

console.log( JSON.stringify(meetup11, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

console.log( JSON.stringify(meetup11, ['title', 'participants', 'place', 'name', 'number', 'home']) );
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- 13                  *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 23-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                               ** * **  

console.log('====== 10.1 Error handling, "try...catch" ======');
console.log('------ 10.1 Task 1/1'); 
// question is about skipping the 'finally' statement
// if we have return in 'try' or in 'catch', rest will not work without 'finally'  

function checkingErrors() {

    try {
      let a = 5;
      console.log(a);
      return a;
    } catch (err) {
        console.log( 'There was an error' );
    } finally {
      console.log( 'Will check it' );       // didn't print
    }

}
checkingErrors();

// vs 

function checkingErrors2() {

  try {
    let a = 5;
    console.log(a);
    return a();
  } catch (err) {
      console.log( 'There was an error ==2==' );
  } 
  console.log( 'Will check it ==2==' );
}
checkingErrors2();


//                              ** * **  


console.log('====== 10.2 Custom errors, extending Error ======');
console.log('------ 10.2 Task 1/1'); 
// Create a class FormatError that inherits from the built-in SyntaxError class.
// It should support message, name and stack properties.

class MyFormatError extends SyntaxError {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

let error = new MyFormatError(`you've got formatting error`);

console.log('Message == ', error.message );     // you've got formatting error
console.log('Name == ', error.name );           // MyFormatError
console.log('Stack== ', error.stack );          // stack

console.log( error instanceof MyFormatError );  // true
console.log( error instanceof SyntaxError );    // true


//                              ** * **  


console.log('====== H1 - Trow error - Retrun Obj Age ======');

function returnAge(obj) {
  for (let i in obj) {
    if (i === 'age')
      return obj[i];
  }
  throw new Error('This object does not have age property');
}

let user = {
  name: 'John',
  //age: 30
};

console.log( returnAge(user) );


//                              ** * **  

console.log('====== H2 - Trow error - Discriminant ======');

function discriminant(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    throw new Error(`Quadratic equation with give a, b, c parameters doesn't have solution`);
  } else if (d > 0) {
    console.log( 'There are two solutions' );
  } else {
    console.log( 'There is only one solution' );
  }
}

discriminant(5, 5, 5);

//                            End of Homework
//                               ** * **  


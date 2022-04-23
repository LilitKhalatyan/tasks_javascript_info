/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- Week05.Meeting07    *
 * Done by --------------- Lilit Khalatyan     *
 * Date ------------------ 02-03-2022          *
/**********************************************/

//          **** ************* *** 
//          **** Reduce method *** 
//          **** ************* ***


// *** 1 Returning new array with even numbers

console.log('***** Reduce method Task 1/2 *****');

let array = [5, 2, 1, -10, 8];
console.log('Array ', array);

let evenNumbers = array.reduce((initialValue, item) => {
    if (item % 2 === 0) {
        initialValue.push(item);
    }
    return initialValue;
}, []);

console.log('Even numbers from the given array', evenNumbers);


// *** 2  Returning new array with odd numbers
console.log('***** Reduce method Task 2/2 *****');

let oddNumbers = array.reduce((initialValue, item) => {
    if (item % 2 !== 0) {
        initialValue.push(item);
    }
    return initialValue;
}, []);

console.log('Odd numbers from the given array', oddNumbers);
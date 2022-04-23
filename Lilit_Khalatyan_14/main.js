/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- 14                  *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 26-03-2022          *
 * Questions ------------- find [???]          *
/**********************************************/

//                               ** * **

console.log("====== 11.2 Promise ======");
console.log("------ 11.2 Task 1/3");

//
let promise = new Promise(function (resolve, reject) {
  resolve(11.2);
  setTimeout(() => resolve(11.22), 1000);
});
promise.then(console.log); // 11.2

//
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(11.22), 1000);
  resolve(11.2);
});
promise2.then(console.log); // 11.2

//                               ** * **

console.log("------ 11.2 Task 2/3");
// The function delay(ms) should return a promise. That promise should
// resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => console.log("runs after 3 seconds"));

//                               ** * **

console.log("====== 11.8 Async/await ======");
console.log("------ 11.8 Task 1/3");

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }
  throw new Error(response.status);
}

loadJson("https://javascript.info/no-such-user.json").catch(console.log); // Error: 404

//                               ** * **

console.log("------ 11.8 Task 2/3");
// Rewrite "rethrow" with async/await

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  }
  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Enter a name?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("No such user, please reenter.");
        return demoGithubUser();
      }
      throw err;
    }
  }
  console.log(`Full name: ${user.name}.`);
  return user;
}
demoGithubUser();

//                               ** * **

console.log("------ 11.8 Task 3/3");
// Call async from non-async

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then((result) => console.log(result));
}
f();

//                               ** * **
//                           End of Homework
//                               ** * **

// (() => console.log("Holla"))();
// ((x, y) => console.log(x + y))(5, 10);
// ((a, b, c) => {
//   let d = b * b - 4 * a * c;
//   if (d < 0) {
//     throw new Error(
//       `Quadratic equation with give a, b, c parameters doesn't have solution`
//     );
//   } else if (d > 0) {
//     console.log("There are two solutions");
//   } else {
//     console.log("There is only one solution");
//   }
// })(5, 5, 5);

// //                               ** * **

// // function loadScript(src) {
// //   let script = document.createElement('script');
// //   script.src = src;
// //   document.head.append(script);
// // }
// // loadScript('C:\Users\Usj,,, )

// // let promise11 = new Promise(resolve => resolve('done!'));

// // promise11.then(console.log); // done!

// //callback --- from Meschyan's videos
// function f1(x, y) {
//   setTimeout(function () {
//     return x > y ? x : y;
//   }, 1000);
// }
// console.log(f1(5, 6)); // undefined

// //                               ** * **

// function f2(x, y, callback) {
//   setTimeout(function () {
//     callback(x > y ? x : y);
//   }, 1000);
// }
// f2(5, 6, function (result) {
//   console.log(result);
// }); // 6

// //                               ** * **
// // Promice == function constructor ==> returns Obj
// function f3(x, y) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(x + 2 * y);
//     }, 1000);
//   });
// }
// const promiseRes = f3(5, 6); //
// promiseRes.then(function (promiseRes) {
//   console.log(promiseRes); // 17
// });

// //                               ** * **
// function f4() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Resolved == Yes");
//     }, 2000);
//   });
// }
// const p = f4();
// p.then(function (result) {
//   // Returnes new Promise**
//   console.log(result); // Resolved == Yes
// });

// //                               ** * **
// // reject
// function f5() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject("Exploring Promice-reject");
//     }, 1000);
//   });
// }
// const rej = f5();
// rej.catch(function (result) {
//   console.log(result); // Exploring Promice-reject
// });

// //                               ** * **
// function f6() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(111);
//     }, 1000);
//   });
// }
// const p6 = f6();
// p6.then(function (result) {
//   return result + 2;
// })
//   .then(function (result) {
//     return result + 4;
//   })
//   .then(function (result) {
//     console.log(result); // 117
//   });

// //                               ** * **
// // chaining **
// function f7(value) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(value + 222);
//     }, 1000);
//   });
// }

// const p67 = f6();
// p6.then(function (result) {
//   return f7(result);
// })
//   .then(function (result) {
//     return result + 1;
//   })
//   .then(function (result) {
//     console.log(result); // 334
//   });

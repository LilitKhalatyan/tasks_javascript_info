/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- 17                  *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 13-04-2022          *
/**********************************************/

console.log("====== Form Task ======");

const resultList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultList.append(`${name}: ${value}`);
    console.log((`${name}:: ${value}`));
    resultList.append(document.createElement('br'))
}) 
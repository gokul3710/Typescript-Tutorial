"use strict";
//type aliases
let a = [21321, "12312"];
//literal types
let myName;
let USERNAME;
USERNAME = 123;
//functions
const add = (a, b) => {
    return a + b;
};
const accept = (message) => {
    console.log(...message);
};
let subtract = function (a, b) {
    return a - b;
};
accept([add(2, 8), subtract(5235, 43)]);
//rest parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
accept([total(24, 32, 5, 466, 32, 52, 5, 2)]);
//never type
const error = (errmsg) => {
    throw new Error(errmsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};

"use strict";
// Literal types
let myName;
let userName;
userName = 'Igor';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
// logMsg(add(2, 3));
logMsg(add('a', 3));
function subtract(c, d) {
    return c - d;
}
// interface mathFunction {
//     (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters (need to be the last in the list od parameters)
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// assign default value
const sumAll = (a = 10, b, c = 2) => {
    //type guard
    return a + b + c;
};
console.log(addAll(2, 3, 2)); //7
console.log(addAll(2, 3)); //5
console.log(sumAll(2, 3)); //7
console.log(sumAll(undefined, 3)); // to skip param
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    //never type means that given function will begin but never end... if we do not want to return anything we declare void
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custome type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    //if Function lacks ending return statement and return type does not include 'undefined', then:
    return createError('This should never happen');
};

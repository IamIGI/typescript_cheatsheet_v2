"use strict";
//Arrays
let stringArr = ['one', 'hey', 'Igor'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
let test = [];
let bands = [];
bands.push('Van Alhen');
//Tuples
let myTuple = ['Igor', 3, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, '2009'],
};
let jp = {
    name: 'Jimmie',
    active: false,
    albums: ['I', 'II', 'IV'],
};
// evh = jp;
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`; //name could no exits, cuz it is optional so you also have to use ? mark there
};
console.log(greetGuitarist(jp));
//Enums - generated by typescript, cuz js do not have it
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);

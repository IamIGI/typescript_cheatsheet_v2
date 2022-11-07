"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // tell TypeScript that we know that it will return string
//Be careful because TypeScript sees no problem, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string;
10; //overrule check type
//the DOM
const img = document.querySelector('img');
const myImage = document.getElementById('#img'); // '!' - no null assertions
img.src;
myImage.src;

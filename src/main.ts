type One = string;
type Two = string | Number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string; // tell TypeScript that we know that it will return string

//Be careful because TypeScript sees no problem, but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string;
10 as unknown as string; //overrule check type

//the DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImage = document.getElementById('#img')! as HTMLImageElement; // '!' - no null assertions

img.src;
myImage.src;

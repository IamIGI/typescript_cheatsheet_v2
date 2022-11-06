//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    //the same as type, use interface when you define class
    name?: string; //optional - ?
    active: boolean;
    albums: (string | number)[];
};

type userId = stringOrNumber;

// Literal types
let myName: 'Dave';
let userName: 'Dave' | 'John' | 'Igor';
userName = 'Igor';

//functions
const add = (a: string, b: number) => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('hello');
// logMsg(add(2, 3));
logMsg(add('a', 3));

function subtract(c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number; //default values won't work when you define function type

// interface mathFunction {
//     (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
};

logMsg(multiply(2, 2));

//optional parameters (need to be the last in the list od parameters)
const addAll = (a: number, b: number, c?: number): number => {
    //type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// assign default value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    //type guard
    return a + b + c;
};

console.log(addAll(2, 3, 2)); //7
console.log(addAll(2, 3)); //5
console.log(sumAll(2, 3)); //7
console.log(sumAll(undefined, 3)); // to skip param

//Rest Parameters

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = () => {
    //never type means that given function will begin but never end... if we do not want to return anything we declare void
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    }
};

//custome type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    //if Function lacks ending return statement and return type does not include 'undefined', then:
    return createError('This should never happen');
};

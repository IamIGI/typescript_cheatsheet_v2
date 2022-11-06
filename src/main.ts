let myName: string = 'Igor';
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // union type;

myName = 'Igor';
meaningOfLife = 42;
isLoading = true;
album = '1998';

const sum = (a: number, b: string) => {
    return a + b;
};

let postId: string | number; //400 or "400"
let isActive: number | boolean; // 0/1 or true/false

let re: RegExp = /\w+/g; // regex data type

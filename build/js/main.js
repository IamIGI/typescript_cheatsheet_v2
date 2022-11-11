"use strict";
// Index signature
// interface TransactionObj {
//     readonly [index: string]: number; // index signature -> all of the keys will be string,
//     // all of the values will be number;
//     //readonly - let user just read given property
// }
const todaysTransactions = {
    Pizza: -11,
    Books: -5,
    Job: 50,
};
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => console.log(student[key]));
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');

// Index signature

interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}
// interface TransactionObj {
//     readonly [index: string]: number; // index signature -> all of the keys will be string,
//     // all of the values will be number;
//     //readonly - let user just read given property
// }

const todaysTransactions: TransactionObj = {
    Pizza: -11,
    Books: -5,
    Job: 50,
};

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions));

console.log(todaysTransactions['Dave']);

//////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => console.log(student[key as keyof typeof student]));

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

///////////////////////////////////////////////

interface Incomes {
    [key: string]: number;
}

type Streams = 'salary' | 'bonus' | 'sidehustle';

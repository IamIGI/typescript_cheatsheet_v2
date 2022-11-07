// const year: HTMLElement | null = document.getElementById('year')!;
// const thisYear: string = new Date().getFullYear().toString();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;

//1st variation:
// let year: HTMLElement | null;
// year = document.getElementById('year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute('datetime', thisYear);
//     year.textContent = thisYear;
// }

//2nd variation: - best solution
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

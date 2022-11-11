class Coder {
    //once the name is assign it can not be change
    // assigning a value made arg optional: example: protected lang: string = 'Typescript'
    constructor(
        public readonly name: string,
        public music: string,
        private age: number, // only in this class
        protected lang: string = 'Typescript' //protected also could be access from subclasses
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

const Igor = new Coder('Igor', 'Rock', 24);

console.log(Igor.getAge());

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'LoFi', 18);

console.log(Sara.getLang());
// console.log(Sara.age)
// console.log(Sara.lang)
//////////////////////////////////////////////////////////////////////////////

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'guitar');

console.log(Page.play('strums'));
/////////////////////////////////////////////////////

class Peeps {
    static count: number = 0; //static means that 'count' is not applied to any instance, it is applied to class itself
    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
///////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((element) => typeof element === 'string')) {
            this.dataState = value;
            return;
        } else throw new Error('Param is not an array of strings');
    }
}

const MyBands = new Bands();
MyBands.data = ['Neil Yound', 'Led Zapline'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Biadoliny'];
console.log(MyBands.data);
MyBands.data = ['Van Halen'];

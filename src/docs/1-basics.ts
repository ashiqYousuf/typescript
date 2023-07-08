// Dealing With Types

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if(showResult){
        console.log(`${phrase}: ${n1+n2}`);
    }else{
        console.log('None');
    }
}

add(12.5, 6, true, "Result is");

// Dealing With Object Type

const per: {
    name: string;
    age: Number;
} = {
    name: "Ashiq",
    age: 23
}

console.log(per);

// Arrays

let hobbies: string[];
hobbies = ['Sports', 'Reading'];

for(const hobby of hobbies){
    console.log(hobby);
}

// Tuples (Fixed Length (But we can use push() method on tuples to push elements*) & Type Array)

const obj: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Ashiq",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'admin']
};

obj.hobbies.push('Reading');
console.log(obj);

// ENUMS & any

enum Role {ADMIN = 1, AUTHOR = 'AUTHOR', USER = 100};
let role = Role.ADMIN;
if (role === Role.ADMIN) {
    console.log('ADMIN');
}

let array: any[];

// UNION & LITERAL TYPES

function genericFunction(input1: number | string, input2: number | string, outputType: 'as-number' | 'as-string') {
    if ((typeof input1 === 'number' && typeof input2 === 'number') || outputType === 'as-number') {
        return +input1 + +input2;
    }else{
        return `${input1} ${input2}`;
    }
}

console.log(genericFunction(12, 10.5, 'as-number'));
console.log(genericFunction('10', '20', 'as-number'));
console.log(genericFunction('Ashiq', 'Hussain', 'as-string'));

// Custom types

type Combinable = number | string;
let age: number | string;
let age2: Combinable;

// Functions

function multiply(n1: number, n2: number = 1): number {
    return n1 * n2;
}

function printResult(num: number): void {
    console.log(`Result: ${num}`);
}

let multiplyAlias: (a: number, b: number) => number;
multiplyAlias = multiply;

console.log(multiplyAlias(10, 20))

// Callbacks

function HOF(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

HOF(10, 20, (result) => {
    console.log(result);
});

// unknown & never types are 2 more types
// Rest Params & Arrow Functions

const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((accum , value) => accum + value, 0);
}
console.log(addNumbers(1,2,3,4));
console.log(addNumbers(10,20,30,40));


"use strict";
// Dealing With Types
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(`${phrase}: ${n1 + n2}`);
    }
    else {
        console.log('None');
    }
}
add(12.5, 6, true, "Result is");
// Dealing With Object Type
const per = {
    name: "Ashiq",
    age: 23
};
console.log(per);
// Arrays
let hobbies;
hobbies = ['Sports', 'Reading'];
for (const hobby of hobbies) {
    console.log(hobby);
}
// Tuples (Fixed Length (But we can use push() method on tuples to push elements*) & Type Array)
const obj = {
    name: "Ashiq",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'admin']
};
obj.hobbies.push('Reading');
console.log(obj);
// ENUMS & any
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role[Role["USER"] = 100] = "USER";
})(Role || (Role = {}));
;
let role = Role.ADMIN;
if (role === Role.ADMIN) {
    console.log('ADMIN');
}
let array;
// UNION & LITERAL TYPES
function genericFunction(input1, input2, outputType) {
    if ((typeof input1 === 'number' && typeof input2 === 'number') || outputType === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return `${input1} ${input2}`;
    }
}
console.log(genericFunction(12, 10.5, 'as-number'));
console.log(genericFunction('10', '20', 'as-number'));
console.log(genericFunction('Ashiq', 'Hussain', 'as-string'));
let age;
let age2;
// Functions
function multiply(n1, n2 = 1) {
    return n1 * n2;
}
function printResult(num) {
    console.log(`Result: ${num}`);
}
let multiplyAlias;
multiplyAlias = multiply;
console.log(multiplyAlias(10, 20));
// Callbacks
function HOF(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
HOF(10, 20, (result) => {
    console.log(result);
});
// unknown & never types are 2 more types
// Rest Params & Arrow Functions
const addNumbers = (...numbers) => {
    return numbers.reduce((accum, value) => accum + value, 0);
};
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(10, 20, 30, 40));

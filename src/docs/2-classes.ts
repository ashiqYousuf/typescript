// CLASSES

class Dept {
    public name: string;
    private employees: string[] = ["Max"];

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Dept) {
        console.log(`Dept Name: ${this.name}`)
    }

    addEmployee(emp: string) {
        this.employees.push(emp);
    }

    printEmployee() {
        console.log(`Total Employees: ${this.employees.length}`);
        console.log(this.employees);
    }
}

const acc = new Dept("acc");
console.log(acc);
acc.describe();
// BAD CODE
// acc.employees.push("Tim");
// acc.employees.push("Dave Gray");
acc.printEmployee();


// EVERYTHING ABOUT CLASSES

// Singleton class is that class which have only one object
// Abstract Classes Can not be instantiated

abstract class Department {
    // private employees: string[] = [];
    static year = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {
        console.log(`Inside Department Ctor: ${Department.year}`);
    }
    // Abstract method (Need to override in Child Classes)
    abstract describe(this: Department): void;

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }
    // static method
    static createEmployee(name: string) {
        return {name};
    }
}

class CSEDepartment extends Department {
    // Shorthand initialization of admins property
    constructor(id: string, public admins: string[]) {
        // Calling Parent Class Ctor [Always call it in the first line before doing other initialization]
        super(id, "Computer science");
    }
    describe(): void {
        console.log(`Cse Department Id: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    reports: string[];
    lastReport: string;
    // Constructor
    constructor(id: string, reports: string[]) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    // Getters and Setters
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found!');
    }

    set mostRecentReport(report: string) {
        if (!report) {
            throw new Error("Please pass a valid report!");
        }
        this.addReport(report);
    }
    // instance methods
    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }
    getReport() {
        console.log(`Reports: ${this.reports}`);
    }
    // Overriding
    addEmployee(employee: string): void {
        if (employee.toLowerCase() !== "max") {
            this.employees.push(employee)
        } else{
            console.log('Could not add the Employee');
        }
    }
    describe(): void {
        console.log(`Accounting Department Id: ${this.id}`);
    }
}

const cse = new CSEDepartment("CSE010DS67", ['Max', 'Tim', 'Joe']);
// cse.addEmployee("Bilal");
// cse.addEmployee("Shadaab");
console.log(cse);
// console.log(cse.describe());

const accounting = new AccountingDepartment("ACC010HU8", ['Mess Failure Report', 'Private Canteen Charges Report']);
// accounting.addEmployee("Aijaz");
// accounting.addReport("Mega Hostel Report");
// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = "Year End Report";
console.log(accounting);
// console.log(accounting.describe());

const emp = Department.createEmployee("Stephen");

// INTERFACES

// Interfaces describe the structure of an object*
// Interfaces can't have an initializer & do not have implementation*
// interfaces are like abstract classes with the difference that abstract classes can have a mix of abstract and non-abstract methods
// one interface can Extend other interface(s) like normal classes
// can have readonly properties also but not private etc
// we can also specify optional properties & methods on interfaces using ?

interface Greet {
    phrase?: string;
    name: string;

    greet(phrase: string): void;
    bye?(): void;
}

let user1: Greet;
user1 = {
    name: "Max",
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
user1.greet("Hi there, I'm");

// class implementing interface

class Person implements Greet {
    name: string;
    age: number = 20;
    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}
let user2: Greet;
user2 = new Person("Stephen");
console.log(user2);

// type is more flexible than interface

type SumFn = (a: number, b: number) => number;
// Alternative interface
// interface SumFn {
//     (a: number, b: number): number;
// }
let sum: SumFn;
sum = (a: number, b: number) => {
    return a + b;
}

// specifying optional properties on interface

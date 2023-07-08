"use strict";
// CLASSES
class Dept {
    constructor(name) {
        this.employees = ["Max"];
        this.name = name;
    }
    describe() {
        console.log(`Dept Name: ${this.name}`);
    }
    addEmployee(emp) {
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
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(`Inside Department Ctor: ${Department.year}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // static method
    static createEmployee(name) {
        return { name };
    }
}
// private employees: string[] = [];
Department.year = 2020;
class CSEDepartment extends Department {
    // Shorthand initialization of admins property
    constructor(id, admins) {
        // Calling Parent Class Ctor [Always call it in the first line before doing other initialization]
        super(id, "Computer science");
        this.admins = admins;
    }
    describe() {
        console.log(`Cse Department Id: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    // Constructor
    constructor(id, reports) {
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
    set mostRecentReport(report) {
        if (!report) {
            throw new Error("Please pass a valid report!");
        }
        this.addReport(report);
    }
    // instance methods
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    getReport() {
        console.log(`Reports: ${this.reports}`);
    }
    // Overriding
    addEmployee(employee) {
        if (employee.toLowerCase() !== "max") {
            this.employees.push(employee);
        }
        else {
            console.log('Could not add the Employee');
        }
    }
    describe() {
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
let user1;
user1 = {
    name: "Max",
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet("Hi there, I'm");
// class implementing interface
class Person {
    constructor(name) {
        this.age = 20;
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user2;
user2 = new Person("Stephen");
console.log(user2);
// Alternative interface
// interface SumFn {
//     (a: number, b: number): number;
// }
let sum;
sum = (a, b) => {
    return a + b;
};
// specifying optional properties on interface

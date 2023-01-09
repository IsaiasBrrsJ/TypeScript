"use strict";
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        throw new Error("Method not implemented.");
    }
}
const persons = new Person(1, 'Isaias', 2);
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
//Uma maneira mais enxuta de criar uma classe
class PersonRefact {
    constructor(id, name, age) { }
}

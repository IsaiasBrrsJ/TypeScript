interface IPerson{
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
       
}

class Person implements IPerson{
    readonly id: number;
     name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName(): string {
        throw new Error("Method not implemented.");
    }

  
}


const persons = new Person(1, 'Isaias', 2);


class Employee extends Person{
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }
}

//Uma maneira mais enxuta de criar uma classe
class PersonRefact {
    constructor(
    id: number,
    name: string,
    age: number
    ){}
}
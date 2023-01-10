// let x: number = 20; // tipagem

// console.log(x);

// //Inferencia x annotation

// let y = 12; //Inferencia

// let z: number = 30; // Annotation

// //tipos basicos
// let firstName: string = "teste";
// let age: number = 2;
// const isAdmin: boolean = true;

// //Object
// const myNumbers: number[] = [1, 2, 3]; // arrayNumerico
// myNumbers.push(5);

// //Tuplas
// let myTuple: [number, string[]];
// myTuple = [5, ["one", "two", "three"]];

// //Objetos Literals -> {prop: value}

// const user: { name: string, age: number } = {
//     name: "Pedro",
//     age: 19
// };

// //Any valor que aceita qualquer tipo de dado

// let a: any = 0;
// //any má pratica pq foge da utilizacao do typescript
// a = "teste";
// a = true;
// a = [];

// //union type

// let id: string | number = "10"; //quando temos mais de um tipo de dado sendo retornado

// //type alias

// type myIdType = number | string | boolean;

// let userId: myIdType = 10;
// let boolean: myIdType = false;
// let string: myIdType = "ss";

// //Enum
// enum Size{
//     P = "Pequeno",
//     M = "Medio",
//     G = "Grande"
// };

// const camisa = {
//     name: "Camisa gola V",
//     size: Size.G
// };
// console.log(camisa.name);
// console.log(camisa.size);
// // literal types
// let teste: "autenticado" | null;
// teste = "autenticado";
// teste = null;
// //valores definidos só posso usar um dos dois declarados
// //

// function sum(a: number, b: number) :number {
//     return a + b;
// }

// var subtract = (a: number, b: number) :number => (a - b);

// console.log("soma: "+sum(2.5, 2.5));
// console.log("subtracao: "+subtract(2, 3));

// function sayHelloTo(name: string): string{
//     return `Hello ${name}`;
// };

// console.log(sayHelloTo("Isaias"));

// function logger(msg: string):void {
//     console.log(msg);
// }

// logger("teste");

// function greeting(name: string, greet?: string) {
//     if (greet) {
//         return `Ola ${greet} ${name}`;
//     }
//     else {
//          return `Ola ${name}`;
//     }
// }

// greeting("jose");
// greeting("pedro, sir");

// //Interfaces
// interface IMathFunctionParams{
//     n1: number,
//     n2: number
// };

// function sumNumbers(nums: IMathFunctionParams) {
//     return nums.n1 + nums.n2
// };

// //narrowing
// //checagem tipos

// function doSomething(info: number | boolean) {
//     if (typeof info === "number") {
//         console.log("tipo numerico");
//     } else {
//         console.log("nao foi passado um tipo numerico");
//     }
// };

// doSomething(5);
// doSomething(true);

// //generics
// function showArraysItens<T>(array: T[]) {
//     array.forEach((item) => {
//         console.log(item);
//     }); 
// };


// const a1 = [1, 2, 3];
// const a2 = ["A", "B", "C"];

// showArraysItens<number>(a1);
// showArraysItens<string>(a2);

//Classes User

class User{
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role,
        this.isApproved = isApproved
    }
}

const zeca = new User("Zeca", "Admin", true);

console.log(zeca);

//interfaces em classes

interface IVehicle{
    brand: string,
    showBRand(): void
};

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand,
        this.wheels = wheels
    }
    
    showBRand(): void {
        throw new Error("Method not implemented.");
    }
}

const fusca = new Car("VW", 4);



class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("AUDI", 4, 2.0);

//decorators
//Todo decorato [e um function]
//que retorna outra function

// constructor decorator
function BaseParamters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParamters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("sam");
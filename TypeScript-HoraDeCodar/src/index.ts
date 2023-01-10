let x: number = 20; // tipagem

console.log(x);

//Inferencia x annotation

let y = 12; //Inferencia

let z: number = 30; // Annotation

//tipos basicos
let firstName: string = "teste";
let age: number = 2;
const isAdmin: boolean = true;

//Object
const myNumbers: number[] = [1, 2, 3]; // arrayNumerico
myNumbers.push(5);

//Tuplas
let myTuple: [number, string[]];
myTuple = [5, ["one", "two", "three"]];

//Objetos Literals -> {prop: value}

const user: { name: string, age: number } = {
    name: "Pedro",
    age: 19
};

//Any valor que aceita qualquer tipo de dado

let a: any = 0;
//any má pratica pq foge da utilizacao do typescript
a = "teste";
a = true;
a = [];

//union type

let id: string | number = "10"; //quando temos mais de um tipo de dado sendo retornado

//type alias

type myIdType = number | string | boolean;

let userId: myIdType = 10;
let boolean: myIdType = false;
let string: myIdType = "ss";

//Enum
enum Size{
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
};

const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa.name);
console.log(camisa.size);
// literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;
//valores definidos só posso usar um dos dois declarados
//

function sum(a: number, b: number) :number {
    return a + b;
}

var subtract = (a: number, b: number) :number => (a - b);

console.log("soma: "+sum(2.5, 2.5));
console.log("subtracao: "+subtract(2, 3));

function sayHelloTo(name: string): string{
    return `Hello ${name}`;
};

console.log(sayHelloTo("Isaias"));

function logger(msg: string):void {
    console.log(msg);
}

logger("teste");

function greeting(name: string, greet?: string) {
    if (greet) {
        return `Ola ${greet} ${name}`;
    }
    else {
         return `Ola ${name}`;
    }
}

greeting("jose");
greeting("pedro, sir");

//Interfaces
interface IMathFunctionParams{
    n1: number,
    n2: number
};
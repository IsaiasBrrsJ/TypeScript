"use strict";
let x = 20; // tipagem
console.log(x);
//Inferencia x annotation
let y = 12; //Inferencia
let z = 30; // Annotation
//tipos basicos
let firstName = "teste";
let age = 2;
const isAdmin = true;
//Object
const myNumbers = [1, 2, 3]; // arrayNumerico
myNumbers.push(5);
//Tuplas
let myTuple;
myTuple = [5, ["one", "two", "three"]];
//Objetos Literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 19
};
//Any valor que aceita qualquer tipo de dado
let a = 0;
//any má pratica pq foge da utilizacao do typescript
a = "teste";
a = true;
a = [];
//union type
let id = "10"; //quando temos mais de um tipo de dado sendo retornado
let userId = 10;
let boolean = false;
let string = "ss";
//Enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa.name);
console.log(camisa.size);
// literal types
let teste;
teste = "autenticado";
teste = null;
//valores definidos só posso usar um dos dois declarados
//
function sum(a, b) {
    return a + b;
}
var subtract = (a, b) => (a - b);
console.log("soma: " + sum(2.5, 2.5));
console.log("subtracao: " + subtract(2, 3));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
;
console.log(sayHelloTo("Isaias"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}`;
    }
    else {
        return `Ola ${name}`;
    }
}
greeting("jose");
greeting("pedro, sir");
;
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
;
//narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log("tipo numerico");
    }
    else {
        console.log("nao foi passado um tipo numerico");
    }
}
;
doSomething(5);
doSomething(true);
//generics
function showArraysItens(array) {
    array.forEach((item) => {
        console.log(item);
    });
}
;
const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];
showArraysItens(a1);
showArraysItens(a2);

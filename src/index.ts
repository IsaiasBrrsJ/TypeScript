//Tipos Básicos

let agea: number = 5;
const firstName: string = "Isaias";
const isValid : boolean = true;


//Any remove a seguranca de tipagem
let idk: any = 5;
idk = '12';
idk = true;
//

//arrays/list
const ids: number[] = [1, 2, 3, 4, 5,];
const booleans: boolean[] = [true, false];
const names: string[] = ['teste', 'teste2', 'teste3'];

console.log(age);

//tupla
const person: [number, string] = [1, ''];

//Lista de Tuplas
const people: [number, string][] = [
    [1, 'teste'],
    [2, 'teste2']
];


//Intersections
const productId: string | number = 1;

//Enum

enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
};

const direction = Direction.Up;


//Type Assertions
const productName: any = 'Boné';

// let itemId = productName as string;

let itemId = <string>productName;
console.log(direction);

//Type
type Order = {
    productId: string;
    price: number
};

type User = {
    firstName: string,
    age: number,
    password?: string,
    email: string
    orders: Order[],
    register(): string
};

const user: User = {
    firstName: 'Jane',
    age: 20,
    email: 'jane0doe.com',
    orders: [{ productId: '1', price: 200 }],
    register() {
        return '2';
    }
};

const printLog = (message: string) => { }

printLog(user.password!); //Exclamacao informa para o compiler q temos certeza q essa variavel possui um valor

//Unions
type Author = {
    books: string[]
}

const author: Author & User = { // usando dois objetos
    age: 2,
    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'teste',
    orders: [{ productId: '1', price: 300 }],
    password: '@oneTwoThree123',
    register() {
        return '2';
    }
};


//Interfaces

interface UserInterface{
    readonly firstName: string,
    email: string 

};

const emailUs: UserInterface = {
    email: 'ss@gmail.com',
    firstName: '22'
};

type Grade = number | string;

const grade: Grade = 1;
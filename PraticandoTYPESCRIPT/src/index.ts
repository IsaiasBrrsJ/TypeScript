//Declarar Tipos De Dados

let nome: string; // a variavel nome vai ser do tipo string
let idade: number;
nome = 'ss';
idade = 1;

let resultado: number;
const nota = (x: number, y: number) => {
    return x + y;
}

resultado = nota(2.5, 2.5);



//Classes
class Pessoa{
    constructor(
        nome: string,
        idade: number  
    ){}
};
//
interface Carro{
     nome: string,
     cor: string,
     marca:string
};

class Veiculo implements Carro{

   readonly nome = "L200";
   readonly cor = "Cinza";
   readonly marca = "Toyota";

};

var veiculo = new Veiculo();

class Autor{
    constructor(
        nome: string
    ){}
}

class Livro extends Autor{
    constructor(
        nomeLivro: string,
        quantidadeDePaginas: number,
        autor : Autor

    ){super(nome)}
}

var autor = new Autor('ss');
var autorLivro = new Livro('Livro', 11, autor);

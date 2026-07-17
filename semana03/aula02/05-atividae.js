/*
//Atividade 1

const media = (a, b) => {
    const resultado = (a + b) / 2;

    console.log(resultado)
};

media(7, 8);
*/

/*
//Atividade 2(primeira forma)
//Os dois são a mesma coisa, mas escrito de forma diferente

function calcularMedia(nota1, nota2) {
    const soma = nota1 + nota2;
    const media = soma /2;

    return media;
}

const resultado = calcularMedia(8, 9);
console.log(resultado)


//Atividade 2(segunda forma)
const media = (nota1, nota2) =>(nota1 + nota2) / 2;

console.log(media(7, 6));
*/


/*  //Atividade 3 (Primeiro jeito)
function precoComDesconto(preco, desconto) {
    const valorComDesconto = preco - (preco * desconto) / 100

    return valorComDesconto;
}

console.log(precoComDesconto(200, 30))


//Atividade 3(Segundo Jeito)
const precoComDescontoArrow = (preco, desconto) =>
    preco - (preco * desconto) / 100

console.log(precoComDescontoArrow(100, 20))
*/

//Desafio Maior de dois
function maiorDeDois(a, b)  { 
if(a>b) {
    return a;
} else {
    return b;
}
}

console.log(maiorDeDois(10, 7)); // 10
console.log(maiorDeDois(4, 9));  // 9

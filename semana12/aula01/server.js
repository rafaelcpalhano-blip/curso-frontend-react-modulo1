
// Biblioteca para receber dados digitados no terminal
const prompt = require("prompt-sync")();

// Biblioteca usada para colorir textos no terminal
const chalk = require("chalk");

console.log("Hello, World!");

// Solicita o nome do usuário
const name = prompt(chalk.red("Digite o seu nome: "));

// Verifica se o nome digitado é "React T3"
// trim() remove espaços extras
// toLowerCase() ignora diferenças entre maiúsculas e minúsculas
if (name.trim().toLowerCase() === "react t3") {
    console.log("Olá, React T3!!");
} else {
    console.log("Olá,", name);
}

// Função assíncrona para buscar usuários em uma API
async function fetchUsers() {
    try {
        // Endereço da API
        const apiURL = "https://jsonplaceholder.typicode.com/users";

        // Aguarda a resposta da API
        const response = await fetch(apiURL);

        // Verifica se a requisição apresentou algum erro HTTP
        if (response.ok === false) {
            console.error(
                "Erro na requisição:",
                response.status,
                response.statusText
            );

            // Interrompe a execução da função
            return;
        }

        // Converte a resposta da API para JavaScript
        const users = await response.json();

        // Exibe a lista de usuários
        console.log(users);
    } catch (error) {
        // Captura problemas como falha de conexão ou servidor indisponível
        console.error("Erro na API do servidor:", error);
    }
}

// Executa a função que busca os usuários
fetchUsers();

// Exemplo de texto colorido:
// console.log(chalk.red("Hello, World!"));
//receber dados do usuario pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome? ")

let idade = prompt("Qual o sua idade? ")

console.log("Boa Tarde " + nome + "! Ano que vem você fará " + idade+1 + " anos!")

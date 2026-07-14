const prompt = require("prompt-sync")()

let alturaTexto = prompt("Digite a sua altura: ")
let alturaConvertida = Number(alturaTexto)

//console.log(typeof(alturaTexto))
//console.log(typeof(alturaConvertida))


if (alturaConvertida >= 140) {
console.log("Pode entrar na montanha Russa!")
} else if (alturaConvertida >= 120 && alturaConvertida < 140) {
    console.log("Pode entrar na montanha Russa com acompanhante!")
}
else {
    console.log("Não tem altura suficiente para entrar!")
}
    
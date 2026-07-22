const compras= ["Headset", "Mouse", "Teclado", "CPU"]

compras.forEach((compra) => {
    console.log("Comprar: " + (compra))
})

 console.log("Tamanho da lista: " + compras.length)
compras.push("Monitor")
console.log("Foi adicionado Monitor a lista com sucesso!")


compras.forEach((compra) => {
    console.log("Comprar: " + (compra))
})
 console.log("Tamanho da lista: " + compras.length)
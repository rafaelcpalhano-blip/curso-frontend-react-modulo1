const shoppingList = ["arroz", "iogurte", "feijão", "café"]

//shoppingList.shift() // remove o primeiro item do array

console.log(shoppingList) // ["iogurte", "feijão", "café"]

//shoppingList.splice(1, 1) // remove o item do índice 1 (iogurte)

//console.log(shoppingList) 

//const position = shoppingList.indexOf("feijão") // retorna o índice do item "feijão" no array

//console.log(position)

//shoppingList.splice(position, 1) // remove o item do índice retornado pela variável position

//console.log(shoppingList) // ["arroz", "iogurte", "café"]

shoppingList.splice(0, 1, "arroz integral") // adiciona o item "arroz integral" no índice 0 do array

console.log(shoppingList) // ["arroz integral", "iogurte", "feijão", "café"]
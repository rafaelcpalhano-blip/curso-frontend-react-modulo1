// Mini Projeto de catálogo de produtos

/*
const products = [
    { "name": "Camiseta", "price": 50.50, "category": "roupa"},
    { "name": "Boné", "price": 40, "category": "acessório"},
    { "name": "Tenis", "price": 300, "category": "calçado"},
    { "name": "Calça", "price": 120.99, "category": "roupa"},
]

const clothes = products.filter((product) => {
    return product.category === "roupa";
}); 

console.log(clothes);

const names = clothes.map((item) => {
    return item.name;
})   

const total = clothes.reduce((sum, p) => {
    return sum + p.price;
}, 0);

console.log(names);
console.log(`R$ ${total}`);

*/

//exibir nome de todos os produtos, e fazer a somatoria de todos
const products = [
    { "name": "Camiseta", "price": 50.50, "category": "roupa"},
    { "name": "Boné", "price": 40, "category": "acessório"},
    { "name": "Tenis", "price": 300, "category": "calçado"},
    { "name": "Calça", "price": 120.99, "category": "roupa"},
]

const productNames = products.map((product) => {
    return product.name
}); 

const total = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(productNames);
console.log("R$" + total);
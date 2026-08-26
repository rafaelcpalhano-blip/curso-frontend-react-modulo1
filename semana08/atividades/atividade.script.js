const products = [
  { name: "Vaso", price: 85 },
  { name: "Colar", price: 40 },
  { name: "Tábua", price: 120 },
  { name: "Caneca", price: 35 },
];
const cheap = products.filter((product) => product.price < 50);
console.log(products.length, cheap.length);
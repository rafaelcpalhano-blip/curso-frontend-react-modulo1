//devolve um novo array, sem mexer no original

const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map((n) => {
  return n * 2;
});

console.log(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]
const numbers = [10, 3, 8, 1, 6];

const bigger = numbers.filter((n) => {
  return n >= 6;
});

console.log(numbers);
console.log(bigger); // [10, 8, 6]


const names = ["Ana", "Bruno", "Carlos"]

const moreThan5 = names.filter((name) => {
  return name.length >= 5;
});

console.log(names);
console.log(moreThan5);


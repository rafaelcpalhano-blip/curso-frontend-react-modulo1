const pricesList = [100, 50, 20, 80, 120, 65, 45, 25, 90, 10];

const discount10List = pricesList.map((price) => {
  return price * 0.9;
});

console.log(pricesList);
console.log(discount10List);

const above60List = discount10List.filter((price) => {
  return price >= 60;
});

console.log(above60List);
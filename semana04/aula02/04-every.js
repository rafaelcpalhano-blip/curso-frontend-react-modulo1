const ages = [20, 34, 17, 25]

const allAdults = ages.every((age) => {
  return age >= 18;
});

console.log(ages);
console.log(allAdults); // true
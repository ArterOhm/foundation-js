const prices = [10, 20, 30, 40, 50];

// prices.forEach((price, idx) => {
//   console.log(idx, price);
// });

const NewPrices = prices.map((priec) => {
  return priec + 5;
});
console.log(NewPrices);
// NewPrices.forEach((price, idx) => {
//   console.log(idx, price);
// });

const PremiumPrices = NewPrices.filter((price) => {
  return price > 30;
});

// console.log(PremiumPrices);

const SumPrice = NewPrices.reduce((prev, Priec) => {
  return prev + Priec;
});

console.log(SumPrice);

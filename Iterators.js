const prices = [10, 20, 30, 40, 50];

prices.forEach((price, idx) => {
  console.log(idx, price);
});

const NewPrices = prices.map((priec) => {
  return priec + 5;
});

NewPrices.forEach((price, idx) => {
  console.log(idx, price);
});

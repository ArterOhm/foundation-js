const normaLoop = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
normaLoop();

const reverseLoop = () => {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
};
reverseLoop();

const ArrayLoop = () => {
  const Array = ["London", "Paris", "Amsterdam", "Bali"];
  for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
  }
};
ArrayLoop();

const reArrayLoop = () => {
  const reArray = ["London", "Paris", "Amsterdam", "Bali"];
  for (let i = reArray.length - 1; i >= 0; i--) {
    console.log(reArray[i]);
  }
};
reArrayLoop();

const BreakArrayLoop = () => {
  const Array = ["London", "Paris", "Amsterdam", "Bali"];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === "Amsterdam") {
      break;
    }
    console.log(Array[i]);
  }
};
BreakArrayLoop();

const ConArrayLoop = () => {
  const Array = ["London", "Paris", "Amsterdam", "Bali"];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === "Amsterdam") {
      continue;
    }
    console.log(Array[i]);
  }
};
ConArrayLoop();

const WhileLoop = () => {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  let count = 1;
  while (count < 100) {
    count = count + 2;
  }
  console.log(count);
};
WhileLoop();

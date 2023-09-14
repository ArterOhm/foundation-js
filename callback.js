const callMe = () => {
  console.log("hello from callback function");
};

const greeting = (callback) => {
  console.log("hello world");
  callback();
};

// greeting(callMe);

greeting(() => {
  console.log("hello");
});

// * Name Lastname
const NameLastname = (Name, Lastname) => {
  console.log(`Nane:${Name()}  Lastname:${Lastname()}`);
};

// * NameLastname(
//   () => {
//     return "Aphist";
//   },
//   () => {
//     return "Promwan";
//   }
// );

// * callback function with parameter

const greeting2 = (callback) => {
  console.log("hello world");
  callback("F");
};

// greeting2((name) => {
//   console.log(`hello from ${name}`);
// });

// * Loop Function

const ArrayV1 = [10, 20, 30, 40, 50];

const LoopArray1 = (arr, cb) => {
  for (i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

// LoopArray1(ArrayV1, (ArrItem) => {
//   console.log(ArrItem);
// });
const result = [];
const LoopArray2 = (arr, cb) => {
  for (i = 0; i < arr.length; i++) {
    const NewItem = cb(ArrayV1[i]);
    result.push(NewItem);
  }
  return result;
};

const NewArray = LoopArray2(ArrayV1, (Item) => {
  return Item * 10;
});

console.log(NewArray);
console.log(ArrayV1);

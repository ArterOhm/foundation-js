//* 1.Write a function mapRevertSign(arr)
const arr = [1, -4, 2, 0];
const mapRevertSign = (arr) => {
  a = [];
  arr.map((elem) => {
    a.push(0 - elem);
  });
  return a;
};
console.log(mapRevertSign(arr)); // [-1, 4, -2, 0]

//* 2.Write a function reverse(arr)
const arr2 = [1, 2, 3, 4, 5];
const reverse = (arr2) => {
  b = [];
  for (let i = arr2.length - 1; i >= 0; i--) {
    b.push(arr2[i]);
  }
  return b;
};
console.log(reverse(arr2)); // [5, 4, 3, 2, 1]

//* 3.Write a function isMember(mem, arr)
// console.log(isMember(5, [1, 3, 7, 12]));
// console.log(isMember("john", ["jane", "jim", "john"]));

const isMember = (mem, arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === mem) {
      return true;
    }
  }
  return false;
};

console.log(isMember(5, [1, 3, 7, 12]));
console.log(isMember("john", ["jane", "jim", "john"]));

//*dfdfddd

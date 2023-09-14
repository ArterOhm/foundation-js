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

//* 4.Write a function unique(arr)
//* unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.

const arr4 = [10, 20, 10, 20, 30, 50, 60, 100];

const unique = (arr) => {
  const a = [];
  for (i = 0; i < arr.length; i++) {
    if (a.indexOf(arr[i]) < 0) {
      a.push(arr[i]);
    }
  }
  return a;
};
console.log(unique(arr4)); // [10, 20, 30, 50, 60, 100]

// * 5.Write a function draw(n)
// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:

const draw = (n) => {
  let t = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      t += "*";
    }
    t += "\n";
  }
  return t;
};

console.log(draw(5));

// *****
// *****
// *****
// *****
// *****

//* 6.Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:
const drawNg = (n) => {
  let t = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < i + 1; j++) {
      t += "*";
    }
    t += "\n";
  }
  return t;
};
console.log(drawNg(5));

// * 7 .Write a function mutual(arr1, arr2)
// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

const mutual = (a, b) => {
  const c = [];
  for (i = a.length; i >= 0; i--) {
    for (j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        c.push(a[i]);
      }
    }
  }
  return c;
};
console.log(mutual(class1, class2)); // ["John", "Bob"]

//* 8. Write a fizzBuzz(n) function
// fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.
// If no conditions are met, fizzBuzz(n) prints the element.

const fizzBuzz = (n) => {
  for (i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20);

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

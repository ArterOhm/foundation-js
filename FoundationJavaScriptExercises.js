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

// * 9. Write a GCD function gcd(a, b)
// gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    let t = a;
    a = b;
    b = t;
  }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
};

console.log(gcd(10, 15)); // 5
console.log(gcd(18, 12)); // 6
console.log(gcd(3, 2)); // 1

//* 10. Write a function filterLt(n, arr)
// filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.

const arr10 = [120, 112, 111, 130, 169, 101];

const filterLt = (n, arr) => {
  const c = [];
  for (i = 0; i <= arr.length; i++) {
    if (n > arr[i]) {
      c.push(arr[i]);
    }
  }
  return console.log(c);
};

filterLt(0, arr10); // []
filterLt(112, arr10); // [111, 101]

//* 11. Write a function filterGt(n, arr)
// filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test

const arr11 = [120, 112, 111, 130, 169, 101];

const filterGt = (n, arr) => {
  const c = [];
  for (i = 0; i <= arr.length; i++) {
    if (n < arr[i]) {
      c.push(arr[i]);
    }
  }
  return console.log(c);
};

filterGt(0, arr11); // [120, 112, 111, 130, 169, 101]
filterGt(112, arr11); // [120, 130, 169]

//* 12. mplement a programmable logic to compute compounded return
// Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.
// This is like how we earn interests from savings accounts.
// The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.

const compoundedReturn = (amount, interest, n) => {
  let a = amount + amount * (interest / 100);
  for (i = 1; i < n; i++) {
    a = a + a * (interest / 100);
  }
  return console.log(a);
};

compoundedReturn(100, 1, 1); // 101
compoundedReturn(100, 10, 1); // 110
compoundedReturn(100, 10, 2); // 121

// * 13.Write a function mean(arr)
// mean(arr) returns the mean average value of arr dataset (represented as an array).
// If any one of arr members are of non-number type, mean(arr) returns null

const mean = (arr) => {
  let sum = arr.reduce((pre, curr) => {
    return pre + curr;
  });
  if (Number(sum)) {
    return console.log(sum / arr.length);
  } else return console.log(null);
};

mean([1, 2, 3]); // 2
mean([1, "foo", 3]); // null

//* 14. Write a function mid(arr)
// mid(arr) returns the array containing middle element(s) of array arr.
// If the array length is an even number, mid returns the 2 middle elements.

const mid = (arr) => {
  if (arr.length <= 1) {
    return console.log(arr);
  } else if (arr.length > 1) {
    if (arr.length % 2 === 1) {
      const a = [];
      a.push(arr[Math.round(arr.length / 2) - 1]);
      return console.log(a);
    } else {
      const a = [];
      a.push(arr[Math.round(arr.length / 2) - 1]);
      a.push(arr[Math.round(arr.length / 2)]);
      return console.log(a);
    }
  }
};
//console.log(["foo", "bar", "baz"].length);
mid(["john"]); // ["john"]
mid(["foo", "bar", "baz"]); // ["bar"]
mid([1, 2, 3, 4]); // [2, 3]

//* 15. Try learning Array.sort method (function) with this snippet:

const arr15 = [3, 2, 1, 12, 13, 11];
arr15.sort((a, b) => a - b);
console.log(arr15); // [1, 11, 12, 13, 2, 3]

//* 16. Write a function median(arr)
// median(arr) returns the statistical median from the dataset arr (represented as an array).
// A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation

const median = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr.length <= 1) {
    return console.log(arr);
  } else if (arr.length > 1) {
    if (arr.length % 2 === 1) {
      const a = [];
      a.push(arr[Math.round(arr.length / 2) - 1]);
      return console.log(a);
    } else {
      const a = [];
      a.push(arr[Math.round(arr.length / 2) - 1]);
      a.push(arr[Math.round(arr.length / 2)]);
      return console.log(a);
    }
  }
};

median([2, 1, 5, 3, 4]); // 3

//* 17. Write a function initArr(val, len)
// initArr(val, len) returns an array of length len with all members initialized to val.

const initArr = (val, len) => {
  const arr = [];
  for (i = 1; i <= len; i++) {
    arr.push(val);
  }
  return console.log(arr);
};

initArr(0, 5); // [0, 0, 0, 0, 0]

// 18 .Write a function flatMap(arr)
// flatMap(arr) takes in an array of arrays, and returns the flattened array.

const arr18 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flatMap = (arr) => {
  const arr1 = [];
  for (i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (j = 0; j < a.length; j++) {
      arr1.push(a[j]);
    }
  }
  return console.log(arr1);
};

flatMap(arr18); // [1, 2, 3, 100, 200, 10, 20]

// 19. Write a function mapMean(arr)
// mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].

const arr19 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];
const mapMean = (arr) => {
  const arr1 = [];
  for (i = 0; i < arr.length; i++) {
    const ar = arr[i];
    if (ar.length <= 1) {
      arr1.push(ar[j]);
    } else if (ar.length > 1) {
      if (ar.length % 2 === 1) {
        const a = [];
        a.push(ar[Math.round(ar.length / 2) - 1]);
        arr1.push(a[0]);
      } else {
        const a = [];
        a.push(
          (ar[Math.round(ar.length / 2)] + ar[Math.round(ar.length / 2) - 1]) /
            2
        );
        arr1.push(a[0]);
      }
    }
  }
  return console.log(arr1);
};
mapMean(arr19); // [2, 150, 15]

//* 20. Write a function fib(n)
//  fib(n) prints the Fibonacci series up to n terms.
//  The series look like this:

const fib = (n) => {
  const sum = [];
  for (i = 0; i < n; i++) {
    if (i <= 1) {
      let sum1 = 0;
      sum1 = sum1 + i;
      sum.push(sum1);
    } else {
      let sum1 = 0;
      sum1 = sum[i - 2] + sum[i - 1];
      sum.push(sum1);
    }
  }
  return console.log(sum.join(", "));
};

fib(2); // 0, 1

fib(3); // 0, 1, 1

fib(4); // 0, 1, 1, 2

fib(5); // 0, 1, 1, 2, 3

fib(6); // 0, 1, 1, 2, 3, 5

//* 21. Write a function toBytes(s)
//  toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.
//  If a character in s is invalid ASCII, the character is omitted from the returned array.

// --------------------------------------------------------------------------------------------------------------------------
//     Medium
// --------------------------------------------------------------------------------------------------------------------------

//* 1. Write a function maxNegMinPos(arr)g
//  maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

const arr1m = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (arr) => {
  const Pos = [];
  const Neg = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      Pos.push(arr[i]);
    } else {
      Neg.push(arr[i]);
    }
  }
  Pos.sort((a, b) => a - b);
  Neg.sort((a, b) => a - b);
  return (
    console.log("MaxNeg is ", Neg[Neg.length - 1]),
    console.log("MinPos is ", Pos[0])
  );
};

maxNegMinPos(arr1m);

// MaxNeg is -1
// MinPos is 2

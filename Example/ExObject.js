const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

// const Newdata = data.forEach((dt, idx) => {
//   return (
//     console.log(`Person ${idx + 1}`),
//     console.log(`name: ${dt.name}`),
//     console.log(`age: ${dt.age}`),
//     console.log(`job: ${dt.job}`),
//     console.log("------------------")
//   );
// });

const Newdata = data.reduce((pre, dt, idx) => {
  return (
    pre,
    console.log(`Person ${idx + 1}`),
    console.log(`name: ${dt.name}`),
    console.log(`age: ${dt.age}`),
    console.log(`job: ${dt.job}`),
    console.log("------------------")
  );
}, "");

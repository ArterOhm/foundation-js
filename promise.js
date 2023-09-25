// -----------------------------------------------------------------------------------------------------------------------------------------------------
// DEMO Code 1  22/09/2023
// -----------------------------------------------------------------------------------------------------------------------------------------------------
let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Found a data")
    } else {
      reject("Data not found")
    }
  }, 100)
})

console.log(data)

data
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("done")
  })

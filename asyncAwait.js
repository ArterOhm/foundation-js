// -----------------------------------------------------------------------------------------------------------------------------------------------------
// DEMO Code 2 22/09/2023
// -----------------------------------------------------------------------------------------------------------------------------------------------------
const fatchData = () => Promise.reject("Data not found")

const getData = async () => {
  try {
    const res = await fatchData()
    console.log(res)
    console.log(res)
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("done")
  }
}
// getData()

const fetchData1 = () => Promise.resolve("data1")
const fetchData2 = () => Promise.resolve("data2")
const fetchData3 = () => Promise.resolve("data3")

const getMultipleData = async () => {
  try {
    const result = await fetchData1()
    const result2 = await fetchData2()
    const result3 = await fetchData3()

    console.log(result)
    console.log(result2)
    console.log(result3)
  } catch (err) {
    console.log(err)
  }
}

getMultipleData()

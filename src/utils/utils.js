/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2019/1/20 10:52
 */
/**
 * 生成一个含有若干个随机整数的数组
 * @param length 数组长度
 * @param min 最小值
 * @param max 最大值
 */
const generateRandomArr = ({length = 5, min = 0 , max = 1}) => {
  if (min > max) return
  const arr = []
  for (let i = 0; i < length; i++) {
    const random = min + Math.random() * (max - min + 1)
    arr.push(Math.floor(random))
  }
  return arr
}

const consoleArr = (arr, ...info) => {
  let str = ``
  arr.forEach(item => str += `${item}, `)
  if (info) console.log(...info)
  console.log(str)
}

const performanceTesting = (func, ...params) => {
  const start = new Date().getTime()
  const arr = func(...params)
  const end = new Date().getTime()

  if (!isCorrectOrder(arr)) {
    console.log(`${func.name}, order err!`)
    return
  }

  console.log(`${func.name}, ${(end - start) / 1000}s used!`)
}

const isCorrectOrder = (arr) => {
  if (!arr || arr.length === 0) return false
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}

const swap = (one, two) => {
  [one, two] = [two, one]
}

export {generateRandomArr, consoleArr, performanceTesting, isCorrectOrder, swap}

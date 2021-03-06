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
const generateRandomArr = ({length = 10000, min = 0 , max = 1}) => {
  if (min > max) return
  const arr = []
  for (let i = 0; i < length; i++) {
    const random = min + Math.random() * (max - min + 1)
    arr.push(Math.floor(random))
  }
  return arr
}

const generateNearlyOrderedArr = ({length = 10000, swapTimes = 5}) => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(i)
  }
  for (let i = 0; i < swapTimes; i++) {
    let random1 = Math.floor(Math.random() * length)
    let random2 = Math.floor(Math.random() * length)
    swapArr(arr, random1, random2)
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

  if (Array.isArray(params[0]) && !isCorrectOrder(arr)) {
    return 'err'
  }
  return end - start
}

const isNumber = (val) => {
  return typeof val === 'number' && !isNaN(val)
}

const isCorrectOrder = (arr) => {
  if (!arr || arr.length === 0) return false
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] || !isNumber(arr[i])) return false
  }
  return true
}

const swapArr = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const copyArr = (arr) => {
  return JSON.parse(JSON.stringify(arr))
}

export const timeTesting = (func, times, ...params) => {
  const startTime = new Date().getTime()
  for (let i = 0; i < times; i++) {
    func(...params)
  }
  const endTime = new Date().getTime()

  console.log(`${func.name} - ${endTime - startTime}ms`)
  return endTime - startTime
}

export {generateRandomArr, consoleArr, performanceTesting, isCorrectOrder, swapArr, generateNearlyOrderedArr, copyArr}

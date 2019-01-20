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

export {generateRandomArr, consoleArr}

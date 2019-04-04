import {timeTesting} from "../../../utils/utils"

const testTimes = 100000
const arr = new Array(testTimes)

// 测试对数组最后一个元素操作的时间
// 结果大概为80ms
const testLast = () => {
  arr.push(1)
  arr.pop()
}
// 测试对数组第一个元素操作的时间
// 结果大概为20000ms
const testFirst = () => {
  arr.unshift(1)
  arr.shift()
}


timeTesting(testLast, testTimes, 1)
timeTesting(testFirst, testTimes, 1)

import {copyArr, generateNearlyOrderedArr, generateRandomArr, performanceTesting} from "./utils"
import chalk from 'chalk'

export const test = (length = 10000, testTimes = 100, ...funcs) => {
  for (let i = 0; i < funcs.length; i++) {
    funcs[i] = {
      func: funcs[i],
      random: 0,
      limited: 0,
      ordered: 0
    }
  }

  for (let i = 0; i < testTimes; i++) {
    const testArr = generateTestArrays(length)

    for (let func of funcs) {
      const randomTime = performanceTesting(func.func, copyArr(testArr.random))
      const limitedTime = performanceTesting(func.func, copyArr(testArr.limited))
      const orderedTime = performanceTesting(func.func, copyArr(testArr.ordered))

      func.random += randomTime
      func.ordered += orderedTime
      func.limited += limitedTime
    }
  }
  printRes(funcs, testTimes)
}

// 生成用于测试的三种数组
const generateTestArrays = (length, swapTimes = 1, max = 3) => {
  return {
    // 完全随机
    random: generateRandomArr({length, max: length}),
    // 近乎有序
    ordered: generateNearlyOrderedArr({length, swapTimes}),
    // 数组元素大小限制在较小的范围内
    limited: generateRandomArr({length, max})
  }
}

// 打印结果
const printRes = (funcs, testTimes) => {
  for (let func of funcs) {
    console.log(chalk.blue(`function name: ${func.func.name}`))
    if (isNaN(func.random) || isNaN(func.limited) || isNaN(func.ordered)) {
      chalk.red('Order Error!')
    } else {
      console.log(chalk.cyan(`random: ${func.random/testTimes}ms used!`))
      console.log(chalk.cyan(`limited range: ${func.limited/testTimes}ms used!`))
      console.log(chalk.cyan(`nearly ordered: ${func.ordered/testTimes}ms used!`))
      console.log('')
    }
  }
}

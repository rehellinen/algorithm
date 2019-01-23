/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/21 9:52
 */
import chalk from 'chalk'
import {insertionSort} from "./insertion"
import {selectionSort} from "./selection"
import {bubbleSort} from "./bubble"
import {mergeSort} from "./merge"
import {mergeSortV2} from "./merge_v2"
import {quickSort} from "./quick"
import {quickSortV2} from "./quick_v2"
import {quickSortV3} from "./quick_v3"
import {generateNearlyOrderedArr, generateRandomArr, performanceTesting} from "../../utils/utils"
import {selectionSortV2} from "./selection_v2"

const test = (func, length, testTimes = 10) => {
  let random = 0
  let limited = 0
  let ordered = 0
  for (let i = 0; i < testTimes; i++) {
    const randomTime = performanceTesting(func, generateRandomArr({length, max: length}))
    const limitedTime = performanceTesting(func, generateRandomArr({length, max: 3}))
    const orderedTime = performanceTesting(func, generateNearlyOrderedArr({length, swapTimes: 100}))

    random += randomTime
    ordered += orderedTime
    limited += limitedTime
  }
  console.log(chalk.blue(`function name: ${func.name}`))
  console.log(chalk.cyan(`random: ${random / testTimes}ms used!`))
  console.log(chalk.cyan(`limited range: ${limited / testTimes}ms used!`))
  console.log(chalk.cyan(`nearly ordered: ${ordered / testTimes}ms used!`))
  console.log('')
}

test(selectionSort, 10000)
test(selectionSortV2, 10000)
// test(insertionSort, 10000)
// test(bubbleSort, 10000)
// test(mergeSort, 10000)
// test(mergeSortV2, 10000)
// test(quickSort, 10000)
// test(quickSortV2, 10000)
// test(quickSortV3, 10000)



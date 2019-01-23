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

const test = (func, length) => {
  console.log(chalk.cyan('random:'))
  performanceTesting(func, generateRandomArr({length, max: 15000}))
  console.log(chalk.cyan('nearly order:'))
  performanceTesting(func, generateNearlyOrderedArr({length, swapTimes: 100}))
  console.log('')
}

// test(selectionSort, 10000)
// test(insertionSort, 10000)
// test(bubbleSort, 10000)
test(mergeSort, 100000)
test(mergeSortV2, 100000)
test(quickSort, 100000)
test(quickSortV2, 100000)
test(quickSortV3, 100000)



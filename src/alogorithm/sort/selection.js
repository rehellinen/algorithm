/**
 *  选择排序
 *  selection.js
 *  Create By rehellinen
 *  Create On 2019/1/20 15:30
 */
import {generateRandomArr, consoleArr, performanceTesting} from "../../utils/utils"

const selectionSort = (arr) => {
  // consoleArr(arr, 'origin')
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  // consoleArr(arr, 'sort')
  return arr
}

performanceTesting(selectionSort, generateRandomArr({
  length: 100000,
  min: 0,
  max: 15000
}))

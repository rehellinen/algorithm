/**
 *  选择排序
 *  selection.js
 *  Create By rehellinen
 *  Create On 2019/1/20 15:30
 */
import {generateRandomArr, consoleArr} from "../../utils/utils"

const selectionSort = (arr) => {
  consoleArr(arr)
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  consoleArr(arr)
  return arr
}

const resArr = selectionSort(generateRandomArr({
  length: 10,
  min: 0,
  max: 15
}))

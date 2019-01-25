/**
 *  bubble.js
 *  Create By rehellinen
 *  Create On 2019/1/21 13:12
 */

import {swapArr} from "../../utils/utils"

/**
 * 冒泡排序
 */

export const bubbleSort = (arr) => {
  let isSorted = false
  let len = arr.length

  while (!isSorted) {
    isSorted = true
    for (let i = 1; i < len; i++) {
      if (arr[i] < arr[i - 1]) {
        swapArr(arr, i, i - 1)
        isSorted = false
      }
    }
    len--
  }
  return arr
}

export const bubbleSortV2 = (arr) => {
  let newN
  let len = arr.length
  do {
    newN = 0
    for (let i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        swapArr(arr, i, i - 1)
        newN = i
      }
    }
    len = newN
  } while (newN > 0)
  return arr
}

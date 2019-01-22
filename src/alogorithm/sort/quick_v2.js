/**
 *  quick_v2.js
 *  Create By rehellinen
 *  Create On 2019/1/22 13:58
 */
import {consoleArr, swapArr} from "../../utils/utils"

export const quickSortV2 = (arr) => {
  __quickSort(arr, 0, arr.length - 1)
  return arr
}

const __quickSort = (arr, left, right) => {
  if (left >= right) return

  let p = __partition(arr, left, right)
  __quickSort(arr, left, p - 1)
  __quickSort(arr, p + 1, right)
}

// 返回index
const __partition = (arr, left, right) => {
  let random = Math.floor(Math.random() * (right - left + 1) + left)
  swapArr(arr, left, random)
  let refer = arr[left]

  let i = left + 1
  let j = right
  while (true) {
    while (i <= right && arr[i] < refer) i++
    while (j >= left + 1 && arr[j] > refer) j--
    if (i > j) break
    swapArr(arr, i, j)
    i++
    j--
  }
  swapArr(arr, left, j)
  return j
}

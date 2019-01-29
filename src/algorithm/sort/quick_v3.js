/**
 *  quick_v3.js
 *  Create By rehellinen
 *  Create On 2019/1/22 17:24
 */
import {insertionSort} from "./insertion"
import {swapArr} from "../../utils/utils"

export const quickSortV3 = (arr) => {
  __quickSort(arr, 0, arr.length - 1)
  return arr
}

const __quickSort = (arr, left, right) => {
  if (right - left <= 15) {
    insertionSort(arr, left, right)
    return
  }

  let [lt, gt] = __partition(arr, left, right)
  __quickSort(arr, left, lt - 1)
  __quickSort(arr, gt, right)
}

// 返回index
const __partition = (arr, left, right) => {
  let random = Math.floor(Math.random() * (right - left + 1) + left)
  swapArr(arr, random, left)
  const refer = arr[left]

  let lt = left
  let gt = right + 1
  let i = left + 1

  while (i < gt) {
    if (arr[i] < refer) {
      swapArr(arr, i, lt + 1)
      lt++
      i++
    } else if (arr[i] > refer) {
      swapArr(arr, i, gt - 1)
      gt--
    } else {
      i++
    }
  }
  swapArr(arr, left, lt)
  return [lt, gt]
}

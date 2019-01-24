import {insertionSort} from "./insertion"

/**
 *  quick.js
 *  Create By rehellinen
 *  Create On 2019/1/21 22:43
 */

export const quickSort = (arr) => {
  __quickSort(arr, 0, arr.length - 1)
  return arr
}

const __quickSort = (arr, left, right) => {
  if (right - left <= 15) {
    insertionSort(arr, left, right)
    return
  }

  let p = __partition(arr, left, right)
  __quickSort(arr, left, p - 1)
  __quickSort(arr, p + 1, right)
}

// 返回index
const __partition = (arr, left, right) => {
  let rIndex = left
  let random = Math.floor(Math.random() * (right - left + 1) + left);
  [arr[rIndex], arr[left]] = [arr[left], arr[rIndex]]
  const refer = arr[rIndex]

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < refer) {
      [arr[rIndex + 1], arr[i]] = [arr[i], arr[rIndex + 1]]
      rIndex++
    }
  }
  [arr[rIndex], arr[left]] = [arr[left], arr[rIndex]]
  return rIndex
}

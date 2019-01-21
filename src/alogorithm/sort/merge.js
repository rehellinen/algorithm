/**
 *  归并排序
 *  merge.js
 *  Create By rehellinen
 *  Create On 2019/1/21 16:47
 */
import {insertionSort} from "./insertion"

export const mergeSort = (arr) => {
  __mergeSort(arr, 0, arr.length - 1)
  return arr
}

const __mergeSort = (arr, left, right) => {
  if (right - left <= 15) {
    insertionSort(arr, left, right)
    return
  }

  const mid = Math.floor((left + right) / 2)
  __mergeSort(arr, left, mid)
  __mergeSort(arr, mid + 1, right)
  __merge(arr, left, mid, right)
}

export const __merge = (arr, left, mid, right) => {
  const temp = []
  for (let i = left; i <= right; i++) {
    temp.push(arr[i])
  }

  let i = left
  let j = mid + 1

  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = temp[j]
      j++
    } else if (j > right) {
      arr[k] = temp[i]
      i++
    }else if (temp[i] < temp[j]) {
      arr[k] = temp[i]
      i++
    } else {
      arr[k] = temp[j]
      j++
    }
  }
}

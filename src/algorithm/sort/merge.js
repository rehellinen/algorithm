/**
 *  merge.js
 *  Create By rehellinen
 *  Create On 2019/1/21 16:47
 */

// 归并排序，时间复杂度为O(nlogn)
// 下面的算法都进行了两处优化：
// 1. 当递归至元素个数小于等于16的时候，使用插入排序进行优化。
// 2. 因为左半部分、右半部分各自的顺序是对的，
//    所以当右半部分的第一个元素大于左半部分的最后一个元素时，不用进行归并。
// 算法1由于用到了递归，因此比算法2慢一些。

import {insertionSortV2} from "./insertion"

export const mergeSort = (arr) => {
  __mergeSort(arr, 0, arr.length - 1)
  return arr
}

export const mergeSortV2 = (arr) => {
  const len = arr.length

  for (let i = 0; i < len; i += 16) {
    insertionSortV2(arr, i, Math.min(i + 15, len - 1))
  }

  for (let size = 16; size <= len; size *= 2) {
    for (let i = 0; i + size < len; i += 2 * size) {
      if (arr[i + size - 1] > arr[i + size])
        __merge(arr, i, i + size - 1,
          Math.min(len - 1, i + 2 * size - 1))
    }
  }
  return arr
}

const __mergeSort = (arr, left, right) => {
  if (right - left <= 15) {
    insertionSortV2(arr, left, right)
    return
  }

  const mid = Math.floor((right + left) / 2)
  __mergeSort(arr, left, mid)
  __mergeSort(arr, mid + 1, right)
  if (arr[mid] > arr[mid + 1])
    __merge(arr, left, mid, right)
}

const __merge = (arr, left, mid, right) => {
  let temp = []
  let i = left
  let j = mid + 1
  for (let i = left; i <= right; i++) {
    temp[i] = arr[i]
  }
  for (let k = left; k <= right; k++) {
    if (i > mid) arr[k] = temp[j++]
    else if (j > right) arr[k] = temp[i++]
    else if (temp[i] < temp[j]) arr[k] = temp[i++]
    else arr[k] = temp[j++]
  }
}

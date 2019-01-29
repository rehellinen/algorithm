/**
 *  bubble.js
 *  Create By rehellinen
 *  Create On 2019/1/21 13:12
 */

import {swapArr} from "../../utils/utils"

// 总结：冒泡排序因为需要频繁交换数组中的元素，所以速度较慢。
// 方法2、方法3相对于方法1而言，在数组有序性较强的情况下能显著提升速度。
// 方法2与方法3速度差不多。


// 无优化的冒泡排序
export const bubbleSort= (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapArr(arr, j, j+1)
      }
    }
  }
  return arr
}

// 使用isSorted进行优化
// 当剩余序列已经排好序，退出循环
export const bubbleSortV2 = (arr) => {
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

// 使用newN进行优化
// 记录上一次循环中最后进行交换的位置（newN），之后循环不考虑newN后的元素
export const bubbleSortV3 = (arr) => {
  let newN
  let n = arr.length
  do {
    newN = 0
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swapArr(arr, i, i - 1)
        newN = i
      }
    }
    n = newN
  } while (newN > 0)
  return arr
}

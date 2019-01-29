/**
 *  insertion.js
 *  Create By rehellinen
 *  Create On 2019/1/20 20:07
 */

import {swapArr} from "../../utils/utils"

// 总结：插入排序在数组近乎有序时性能很高。
// 方法2相对于方法1提升很多，而且实现较简单。
// 方法3实现复杂而且性能较方法2还有所倒退，不建议使用。

// 没有经过优化的直接插入排序
// 由于需要频繁交换数组间元素，速度较慢
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j-1]; j--) {
      swapArr(arr, j, j-1)
    }
  }
  return arr
}

// 直接插入排序，使用temp进行优化
// 使用赋值代替原本的数组元素交换操作，因而能提升性能
const insertionSortV2 = (arr, left = 0, right = arr.length - 1) => {
  for (let i = left + 1; i < right + 1; i++) {
    let j
    let temp = arr[i]
    for (j = i; j > left && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
  return arr
}

// 折半插入排序
// 折半排序按理说应该速度比较快
// 但是因为实现起来过于复杂，性能相对于方法二甚至有所倒退（特别是在处理近乎有序数组时）
const insertionSortV3 = (arr, left = 0, right = arr.length - 1) => {
  for (let i = left + 1; i <= right; i++) {
    if(arr[i] >= arr[i-1]) continue
    let temp = arr[i]
    let low = left
    let high = i - 1
    while (low <= high) {
      const mid = Math.floor((high + low) / 2)
      if (temp < arr[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }

    for(let j = i - 1; j >= low; j--){
      arr[j+1] = arr[j]
    }
    arr[low] = temp
  }
  return arr
}

export {insertionSort, insertionSortV2, insertionSortV3}

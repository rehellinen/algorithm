/**
 *  insertion.js
 *  Create By rehellinen
 *  Create On 2019/1/20 20:07
 */

/**
 * 插入排序（O(n2)）
 * 在数组近乎有序时性能很高
 */

const insertionSort = (arr, left = 0, right = arr.length - 1) => {
  for (let i = left + 1; i < right + 1; i++) {
    let j
    let temp = arr[i]
    for (j = i; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
  return arr
}

export {insertionSort}

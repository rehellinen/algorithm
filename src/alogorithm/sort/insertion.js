/**
 *  插入排序
 *  insertion.js
 *  Create By rehellinen
 *  Create On 2019/1/20 20:07
 */

const insertionSort = (arr, left, right) => {
  if (!left && !right) {
    left = 0
    right = arr.length - 1
  }
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

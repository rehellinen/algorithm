/**
 *  插入排序
 *  insertion.js
 *  Create By rehellinen
 *  Create On 2019/1/20 20:07
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
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

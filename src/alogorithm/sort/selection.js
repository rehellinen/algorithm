/**
 *  selection.js
 *  Create By rehellinen
 *  Create On 2019/1/20 15:30
 */

/**
 * 选择排序（O(n2)）
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

export {selectionSort}

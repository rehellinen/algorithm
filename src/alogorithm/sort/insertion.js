/**
 *  insertion.js
 *  Create By rehellinen
 *  Create On 2019/1/20 20:07
 */

/**
 * 插入排序（O(n2)）
 * 在数组近乎有序时性能很高
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

const insertionSortV2 = (arr, left, right) => {
  if (!left && !right) {
    left = 0
    right = arr.length - 1
  }
  for (let i = left + 1; i <= right; i++) {
    if(arr[i] >= arr[i-1]) continue
    let temp = arr[i]

    let low = left
    let high = i - 1
    while (low <= high) {
      const mid = Math.floor((high + low) / 2)
      if (temp < arr[mid]) {
        high = mid - 1
      } else if (temp === arr[mid]) {
        low = mid
        break
      } else {
        low = mid + 1
      }
    }

    for(let j = i - 1; j >= low; j--){
      arr[j+1] = arr[j];          // 记录后移
    }
    arr[low] = temp
  }
  return arr
}

export {insertionSort, insertionSortV2}

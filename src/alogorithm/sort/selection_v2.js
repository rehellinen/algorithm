import {swapArr} from "../../utils/utils"

export const selectionSortV2 = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let minIndex = left
    let maxIndex = right

    if (arr[minIndex] > arr[maxIndex]) swapArr(arr, minIndex, maxIndex)

    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i
      if (arr[i] > arr[maxIndex]) maxIndex = i
    }

    swapArr(arr, left, minIndex)
    swapArr(arr, right, maxIndex)

    left++
    right--
  }
  return arr
}

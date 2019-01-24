export const insertionSortV2 = (arr, left = 0, right = arr.length - 1) => {
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
      arr[j+1] = arr[j];          // 记录后移
    }
    arr[low] = temp
  }
  return arr
}

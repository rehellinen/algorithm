export const shellSort = (arr, left = 0, right = arr.length - 1) => {
  let increment = right - left + 1
  do{
    increment = Math.floor(increment / 3) + 1
    for (let i  = left + increment; i <= right; i++) {
      if (arr[i - increment] > arr[i]) {
        const temp = arr[i]
        let j = i - increment
        do {
          arr[j + increment] = arr[j]
          j -= increment
        } while (j >= left && arr[j] > temp)
        arr[j + increment] = temp
      }
    }
  }while (increment > 1)
  return arr
}

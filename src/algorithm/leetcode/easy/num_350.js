const intersect = (arr1, arr2) => {
  const map = new Map()

  for (let num of arr1) {
    if (!map.has(num)) map.set(num, 1)
    else map.set(num, map.get(num) + 1 )
  }

  const res = []
  for (let num of arr2) {
    if (map.has(num)) {
      res.push(num)
      if (map.get(num) - 1 === 0) map.delete(num)
      else map.set(num, map.get(num) - 1)
    }
  }
  return res
}

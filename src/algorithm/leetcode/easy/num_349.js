const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1)

  const res = new Set()
  for (let num of arr2) {
    if (set1.has(num)) {
      res.add(num)
    }
  }
  return [...res]
}

intersection([1,2,2,1], [2,2])

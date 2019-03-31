/**
 * 并查集(Quick Find)
 * union - O(n)
 * isUnited - O(1)
 */

class UnionFind {

  id = []

  // 初始化元素数组，每个元素的类别都不同
  constructor (size) {
    for (let i = 0; i < size; i++) {
      this.id.push(i)
    }
  }

  // 将两个数据连通
  union (p, q) {
    const pID = this.find(p)
    const qID = this.find(q)
    if (pID === qID) return

    this.id.forEach((id, i) => {
      if (id === pID) this.id[i] = qID
    })
  }

  // 两个元素是否连通
  isUnited (p, q) {
    return this.find(q) === this.find(q)
  }

  // 查找p对应的集合编号
  find (p) {
    if (p < 0 || p >= this.id.length) return 'error'
    return this.id[p]
  }

  // 当前集合的元素数量
  getSize () {
    return this.id.length
  }
}

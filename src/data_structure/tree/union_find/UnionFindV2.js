/**
 * 并查集(Quick Find)
 * union - O(h) - O(log*n)
 * isUnited - O(h) - O(log*n)
 * h为树的高度
 */

export class UnionFindV2 {
  parent = []
  rank = []

  // 初始化元素数组，每个元素的类别都不同
  constructor(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }

  // 将两个数据连通
  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) return
    // 将rank低的树合并到rank高的树上
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    } else if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[qRoot] = pRoot
      this.rank[pRoot]++
    }
  }

  // 两个元素是否连通
  isUnited (p, q) {
    return this.find(q) === this.find(q)
  }

  // 查找p对应的集合编号
  find (p) {
    if (p < 0 || p >= this.parent.length) return 'error'

    while (p !== this.parent[p]) {
      // 路径压缩
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }

    return p
  }

  // 当前集合的元素数量
  getSize () {
    return this.parent.length
  }
}

/**
 *  线段树
 *  更新一个元素或一个区间的值效率更高
 *  还能进行统计查询（如查询一个区间的最大值、最小值、总和等等）
 *  用数组存储需要4*n的空间
 */

class SegmentTree {
  tree = []
  data = []

  constructor (arr) {
    this.data = arr.slice()
    this.tree.length = 4 * arr.length
    this.build(0, 0, arr.length - 1)
  }

  // 返回[left, right]的值
  query (left, right) {
    if (left < 0 || left >= this.data.length
      || right < 0 || right >= this.data.length
      || left > right) {
      return 'index error'
    }
    this._query(0, 0, this.data.length - 1, left, right)
  }
  // 在[left, right] 搜索[queryL, queryR]的值
  _query (treeIndex, left, right, queryL, queryR) {
    if (left === queryL && right === queryR) return this.tree[treeIndex]

    const leftIndex = this.leftChild(treeIndex)
    const rightIndex = this.rightChild(treeIndex)

    const mid = Math.floor(left + (left - right) / 2)

    if (queryL >= mid+1) {
      return this._query(rightIndex, mid+1, right, queryL, queryR)
    } else if (queryR <= mid) {
      return this._query(leftIndex, left, mid, queryL, queryR)
    }

    const leftRes = this._query(leftIndex, left, mid, queryL, mid)
    const rightRes = this._query(right, mid+1, right, queryL, mid)
  }

  // 建立线段树
  build (treeIndex, left, right) {
    if (left === right) {
      this.tree[treeIndex] = data[left]
      return
    }

    const leftIndex = this.leftChild(treeIndex)
    const rightIndex = this.rightChild(treeIndex)

    const mid = Math.floor(left + (left - right) / 2)
    this.build(leftIndex, left, mid)
    this.build(right, mid+1, right)

    this.tree[treeIndex] = this.tree[leftIndex] + this.tree[rightIndex]
  }

  // 返回i的节点
  get (i) {
    if (i < 0 || i > this.data.length - 1) return 'index error'
    return this.data[i]
  }

  // 返回i的左孩子节点索引
  leftChild (i) {
    return 2 * i + 1
  }

  // 返回i的右孩子节点索引
  rightChild (i) {
    return 2 * i + 2
  }

  getSize () {
    return this.data.length
  }
}

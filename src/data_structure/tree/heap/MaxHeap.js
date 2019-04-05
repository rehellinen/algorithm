/**
 * 二叉堆 - 完全二叉树
 * 最大堆 - 每个父节点大于其子节点
 */

import {swapArr} from "../../../utils/utils"

// TODO: 利用比较器优化比较逻辑
// TODO: d叉堆、索引堆
// TODO: 二项堆、斐波那契堆
export class MaxHeap {
  data = []
  constructor (arr = []) {
    if (arr.length === 0) return
    // Heapify
    for (let i = this._parent(arr.length - 1); i >= 0; i--) {
      this._siftDown(i)
    }
  }

  // 添加一个元素
  add (e) {
    this.data.push(e)
    this._siftUp(this.getSize() - 1)
  }
  _siftUp (i) {
    while (i > 0 && this.data[this._parent(i)] < this.data[i]) {
      swapArr(this.data, i, this._parent(i))
      i = this._parent(i)
    }
  }

  // 提取最大的元素
  extractMax () {
    const max = this.getMax()
    this.data[0] = this.data.pop()
    this._siftDown(0)
    return max
  }
  _siftDown (i) {
    while (this._left(i) < this.getSize()) {
      let maxIndex = this._left(i)
      if (i + 1 < this.getSize() && this.data[i + 1] > this.data[i]) {
        maxIndex++
      }

      if (this.data[i] > this.data[maxIndex]) break

      swapArr(this.data, i, maxIndex)
      i = maxIndex
    }
  }

  // 取出堆中的最大元素，并且替换成val
  replace (val) {
    const res = this.getMax()
    this.data[0] = val
    this._siftDown(0)
    return res
  }

  // 获取堆中元素数量
  getSize () {
    return this.data.length
  }
  // 是否为空
  isEmpty () {
    return this.data.length === 0
  }
  // 获取最大的元素
  getMax () {
    if (this.isEmpty()) throw new Error('the heap is empty')
    return this.data[0]
  }

  // 获取节点i的父亲
  _parent (i) {
    if (i <= 0) throw new Error('index illegal')
    return Math.floor((i - 1) / 2)
  }

  // 获取节点i的左孩子
  _left (i) {
    if (i < 0) throw new Error('index illegal')
    return 2 * i + 1
  }

  // 获取节点i的右孩子
  _right (i) {
    if (i < 0) throw new Error('index illegal')
    return 2 * i + 2
  }
}

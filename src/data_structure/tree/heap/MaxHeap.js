import {swapArr} from "../../../utils/utils"

export class MaxHeap {
  data = []
  constructor (arr) {
    for (let i = this._parent(arr.length - 1); i >= 0; i--) {
      this.siftDown(i)
    }
  }

  add (e) {
    this.data.push(e)
    this.siftUp(this.getSize() - 1)
  }

  extractMax () {
    const max = this.getMax()
    this.data[0] = this.data.pop()
    this.siftDown(0)
    return max
  }

  siftUp (i) {
    while (i > 0 && this.data[this._parent(i)] < this.data[i]) {
      swapArr(this.data, i, this._parent(i))
      i = this._parent(i)
    }
  }

  siftDown (i) {
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

  replace (val) {
    const res = this.getMax()
    this.data[0] = val
    this.siftDown(0)
    return res
  }

  getSize () {
    return this.data.length
  }

  isEmpty () {
    return this.data.length === 0
  }

  getMax () {
    if (this.isEmpty()) throw new Error('the heap is empty')
    return this.data[0]
  }

  _parent (i) {
    if (i <= 0) throw new Error('index illegal')
    return Math.floor((i - 1) / 2)
  }

  _left (i) {
    return 2 * i + 1
  }

  _right (i) {
    return 2 * i + 2
  }
}

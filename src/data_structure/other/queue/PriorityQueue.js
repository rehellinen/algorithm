import {MaxHeap} from "../../tree/heap/MaxHeap"

export class PriorityQueue {
  maxHeap = new MaxHeap()

  enqueue (val) {
    this.maxHeap.add(val)
  }

  dequeue () {
    return this.maxHeap.extractMax()
  }

  getFront () {
    return this.maxHeap.getMax()
  }

  getSize () {
    return this.maxHeap.getSize()
  }
  isEmpty () {
    return this.maxHeap.isEmpty()
  }
}

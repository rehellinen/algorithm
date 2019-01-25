export class MaxHeap {
  data = []
  constructor () {

  }

  size () {
    return this.data.length
  }

  isEmpty () {
    return this.data.length === 0
  }
}

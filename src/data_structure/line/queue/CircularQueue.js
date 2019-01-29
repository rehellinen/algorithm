export class CircularQueue {
  _data
  front = 0
  tail = 0
  size = 0

  constructor (capacity = 10) {
    this._data = new Array(capacity + 1)
  }

  getCapacity () {
    return this._data.length - 1
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.front === this.tail
  }

  enqueue (e) {
    if ((this.tail + 1) % this._data.length === this.front) {
      this.resize(this.getCapacity() * 2 + 1)
    }
    this._data[this.tail] = e
    this.tail = (this.tail + 1) % this._data.length
    this.size++
  }

  dequeue () {
    if (this.isEmpty()) return 'empty'
    const frontEl =  this._data[this.front]
    this._data[this.front] = undefined

    this.front = (this.front + 1) % this._data.length
    this.size--

    if (this.size === Math.floor(this.getCapacity() / 4 )
      && Math.floor(this.getCapacity() / 2) >= 10) {
      this.resize(Math.floor(this.getCapacity() / 2 + 1))
    }

    return frontEl
  }

  getFront () {
    if (this.isEmpty()) return 'empty'
    return data[this.front]
  }

  resize (newSize) {
    let newData = new Array(newSize)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this._data[(i + this.front) % this._data.length]
    }
    this._data = newData
    this.front = 0
    this.tail = this.size
  }

  toString () {
    let str = `Circular Queue: size(${this.getSize()}) capacity(${this.getCapacity()})\nfront <- [`

    for (let i = this.front; i !== this.tail; i = (i+1) % this._data.length) {
      str += `${this._data[i]}${(i+1) % this._data.length === this.tail ? '' : ', '}`
    }

    str += ']'
    console.log(str)
  }
}

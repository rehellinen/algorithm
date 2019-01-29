/**
 * 队列
 */
export class ArrayQueue {
  _data = []

  getSize () {
    return this._data.length
  }

  isEmpty () {
    return this._data.length === 0
  }

  enqueue (e) {
    this._data.push(e)
  }

  dequeue () {
    if (this._data.length === 0) return null
    return this._data.splice(0, 1)[0]
  }

  getFront () {
    return this._data[0]
  }

  toString () {
    let str = `Queue: size(${this.getSize()})\nfront <- [`
    this._data.forEach((item, index) => {
      str += `${item}${index === this._data.length - 1 ? '' : ', '}`
    })
    str += ']'
    console.log(str)
  }
}

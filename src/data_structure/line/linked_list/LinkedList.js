class Node {
  constructor (e, next = null) {
    this.e = e
    this.next = next
  }
}

export class LinkedList {
  _dummyHead
  _size = 0

  constructor () {
    this._dummyHead = new Node(null, null)
  }

  getSize () {
    return this._size
  }

  isEmpty () {
    return this._size === 0
  }

  add (e, index) {
    this._isLegalIndex(index, this._size)

    let prev = this._dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new Node(e, prev.next)
    this._size++
  }

  addFirst (e) {
    this.add(e, 0)
  }

  addLast (e) {
    this.add(e, this._size)
  }

  get (index) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead
    for (let i = 0; i < index + 1; i++) {
      curr = curr.next
    }
    return curr.e
  }

  getFirst () {
    return this.get(0)
  }

  getLast () {
    return this.get(this._size - 1)
  }

  set (index, e) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead
    for (let i = 0; i < index + 1; i++) {
      curr = curr.next
    }
    curr.e = e
  }

  contains (e) {
    let curr = this._dummyHead.next
    while (curr !== null) {
      if (curr.e === e) return true
      curr = curr.next
    }
    return false
  }

  delete (index) {
    this._isLegalIndex(index, this._size - 1)
    let prev = this._dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    let retNode = prev.next
    prev.next = retNode.next
    retNode.next = null
    this._size--
    return retNode.e
  }

  deleteFirst () {
    return this.delete(0)
  }

  deleteLast () {
    return this.delete(this._size - 1)
  }

  _isLegalIndex (index, max = this._size) {
    if (index < 0 || index > max) throw new Error('index err')
  }

  toString () {
    let str = `Linked List: size(${this._size})\n`
    let curr = this._dummyHead.next
    while (curr !== null) {
      str += `${curr.e} -> `
      curr = curr.next
    }
    console.log(str += 'null')
  }
}

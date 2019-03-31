class Node {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

export class LinkedList {
  _dummyHead
  _size = 0

  constructor (arr = []) {
    this._dummyHead = new Node(null, null)
    if (arr.length !== 0) {
      arr.forEach(item => this.addLast(item))
    }
  }

  add (val, index) {
    this._isLegalIndex(index, this._size)

    let prev = this._dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new Node(val, prev.next)
    this._size++
  }

  addFirst (val) {
    this.add(val, 0)
  }

  addLast (val) {
    this.add(val, this._size)
  }

  get (index) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead
    for (let i = 0; i < index + 1; i++) {
      curr = curr.next
    }
    return curr
}

  getFirst () {
    return this.get(0)
  }

  getLast () {
    return this.get(this._size - 1)
  }

  set (index, val) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead
    for (let i = 0; i < index + 1; i++) {
      curr = curr.next
    }
    curr.val = val
  }

  contains (val) {
    let curr = this._dummyHead.next
    while (curr !== null) {
      if (curr.val === val) return true
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
    return retNode
  }

  deleteFirst () {
    return this.delete(0)
  }

  deleteLast () {
    return this.delete(this._size - 1)
  }

  deleteVal (val) {
    if (!val) return
    let prev = this._dummyHead

    while (prev.next !== null) {
      if (prev.next.val === val) break
      prev = prev.next
    }

    if (prev.next === null) return
    const delNode = prev.next
    prev.next = delNode.next
    delNode.next = null
    this._size--
  }

  _isLegalIndex (index, max = this._size) {
    if (index < 0 || index > max) throw new Error('index err')
  }

  getSize () {
    return this._size
  }
  isEmpty () {
    return this._size === 0
  }
  toString () {
    let str = `Linked List: size(${this._size})\n`
    let curr = this._dummyHead.next
    while (curr !== null) {
      str += `${curr.val} -> `
      curr = curr.next
    }
    console.log(str += 'null')
  }
}

class Node {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

export class LinkedList {
  // 使用虚拟头结点简化逻辑
  _dummyHead = new Node(null, null)
  // 链表元素个数
  _size = 0

  // 传入一个数组
  constructor (arr = []) {
    arr.forEach(item => this.addLast(item))
  }

  // 在index位置添加一个元素
  add (val, index) {
    this._isLegalIndex(index, this._size)

    let prev = this._dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new Node(val, prev.next)
    this._size++
  }
  // 在首部添加一个元素
  addFirst (val) {
    this.add(val, 0)
  }
  // 在末尾添加一个元素
  addLast (val) {
    this.add(val, this._size)
  }

  // 根据index获取节点的值
  get (index) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead.next
    for (let i = 0; i < index; i++) {
      curr = curr.next
    }
    return curr.val
  }
  // 获取第一个节点的值
  getFirst () {
    return this.get(0)
  }
  // 获取最后一个节点的值
  getLast () {
    return this.get(this._size - 1)
  }

  // 改变index节点的值
  set (index, val) {
    this._isLegalIndex(index, this._size - 1)
    let curr = this._dummyHead.next
    for (let i = 0; i < index; i++) {
      curr = curr.next
    }
    curr.val = val
  }

  // 检测链表是否有这个值
  contains (val) {
    let curr = this._dummyHead.next
    while (curr !== null) {
      if (curr.val === val) return true
      curr = curr.next
    }
    return false
  }

  // 删除节点
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
  // 删除第一个节点
  deleteFirst () {
    return this.delete(0)
  }
  // 删除最后一个节点
  deleteLast () {
    return this.delete(this._size - 1)
  }
  // 删除值为val的节点
  deleteVal (val) {
    if (!val) return
    let prev = this._dummyHead

    while (prev.next !== null) {
      if (prev.next.val === val) break
      prev = prev.next
    }
    // prev.next为null，则在整个链表都找不到值为val的节点
    if (prev.next === null) return
    const delNode = prev.next
    prev.next = delNode.next
    delNode.next = null
    this._size--
  }

  // 判断索引是否合法
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

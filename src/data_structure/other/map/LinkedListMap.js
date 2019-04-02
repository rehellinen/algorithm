export class Node {
  constructor (key = null, val = null, next = null) {
    this.key = key
    this.val = val
    this.next = next
  }
}

export class LinkedListMap {
  dummyHead = new Node()
  size = 0

  add (key, val) {
    const node = this._getNode(key)
    if (node !== null) node.val = val

    this.dummyHead.next = new Node(key, val, this.dummyHead.next)
    size++
  }

  remove (key) {
    let prev = this.dummyHead

    while (prev.next !== null) {
      if (prev.next.key === key) break
      prev = prev.next
    }

    if (prev.next === null) return null

    const delNode = prev.next
    prev.next = delNode.next
    delNode.next = null
    this.size--
    return delNode.val
  }

  set (key, val) {
    const node = this._getNode(key)
    if (node === null) throw new Error(`${key} doesn't exist`)
    node.val = val
  }

  get (key) {
    const node = this._getNode(key)
    return node === null ? null : node.val
  }

  contains (key) {
    return this._getNode(key) !== null
  }

  // 根据key获取节点
  _getNode (key) {
    let cur = this.dummyHead.next
    while (cur !== null) {
      if (cur.key === key) return cur
      cur = cur.next
    }
    return null
  }

  getSize () {
    return this.size
  }
  isEmpty () {
    return this.size === 0
  }
}

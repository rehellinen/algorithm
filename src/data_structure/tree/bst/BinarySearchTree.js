class Node {
  constructor (val = null, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export class BinarySearchTree {
  root = null
  size = 0

  constructor (arr = []) {
    for (let item of arr) {
      this.root = this.add(item)
    }
  }

  add (val, node = this.root) {
    if (node === null) {
      this.size++
      return new Node(val)
    }

    if (node.val > val) node.left = this.add(val, node.left)
    else if (node.val < val) node.right = this.add(val, node.right)

    return node
  }

  remove (val) {

  }

  contains (val, node = this.root) {
    if (node === null) return false

    if (node.val === val) return true
    else if (node.val > val) return this.contains(val, node.left)
    else return this.contains(val, node.right)
  }

  // 前序遍历
  preTraverse (node = this.root) {
    if (node === null) return
    console.log(node.val)
    this.preTraverse(node.left)
    this.preTraverse(node.right)
  }

  // 中序遍历
  inTraverse (node = this.root) {
    if (node === null) return
    this.inTraverse(node.left)
    console.log(node.val)
    this.inTraverse(node.right)
  }

  // 后序遍历
  postTraverse (node = this.root) {
    if (node === null) return
    this.postTraverse(node.left)
    this.postTraverse(node.right)
    console.log(node.val)
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }
}

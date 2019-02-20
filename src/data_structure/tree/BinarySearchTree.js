import {CircularQueue} from "../line/queue/CircularQueue"

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
    this.root = this._remove(this.root, val)
  }

  _remove (node, val) {
    if (node === null) return null

    if (node.val > val) {
      node.left = this._remove(node.left, val)
      return node
    } else if (node.val < val) {
      node.right = this._remove(node.right, val)
      return node
    } else {
      // 左子树为空
      if (node.left === null) {
        return this.removeMin(node)
      // 右子树为空
      } else if (node.right === null) {
        return this.removeMax(node)
      // 左右子树均不为空
      } else {
        const successor = this.getMin(node.right)
        successor.right = this.removeMin(node.right)
        successor.left = node.left

        node.left = node.right = null
        return successor
      }
    }
  }

  // 获取树的最小节点
  getMin (node) {
    if (node.left === null) return node
    return this.getMin(node.left)
  }

  // 获取树的最大节点
  getMax (node) {
    if (node.right === null) return node
    return this.getMin(node.right)
  }

  // 删除最小值
  removeMin (node = this.root) {
    if (node.left === null) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }

    node.left = this.removeMin(node.left)
    return node
  }

  // 删除最大值
  removeMax (node = this.root) {
    if (node.right === null) {
      const leftNode = node.left
      node.left = null
      this.size--
      return leftNode
    }

    node.right = this.removeMax(node.right)
    return node
  }

  contains (val, node = this.root) {
    if (node === null) return false

    if (node.val === val) return true
    else if (node.val > val) return this.contains(val, node.left)
    else return this.contains(val, node.right)
  }

  // 前序遍历(深度优先)
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

  // 层序遍历(广度优先)
  levelOrder () {
    const queue = new CircularQueue()
    queue.enqueue(this.root)

    while (!queue.isEmpty()) {
      const cur = queue.dequeue()
      console.log(cur.val)
      if (cur.left !== null) queue.enqueue(cur.left)
      if (cur.right !== null) queue.enqueue(cur.right)
    }
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }
}

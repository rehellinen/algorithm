class Node {
  constructor (key = null, val = null, left = null, right = null) {
    this.key = key
    this.val = val
    this.left = left
    this.right = right
  }
}

export class BSTMap {
  root = null
  size = 0

  add (key, val) {
    this.root = this._add(key, val)
  }
  _add (key, val, node = this.root) {
    if (node === null) {
      this.size++
      return new Node(key, val)
    }

    if (node.key > key) node.left = this._add(val, node.left)
    else if (node.key < key) node.right = this._add(val, node.right)
    else node.val = val

    return node
  }

  get (key) {
    const node = this.getNode(key)
    return node === null ? null : node.val
  }

  contains (key) {
    return this.getNode(key) !== null
  }

  set (key, val) {
    const node = this.getNode(key)
    if (node === null) throw new Error(`${key} doesn't exist`)
    node.val = val
  }

  getNode (key, node = this.root) {
    if (node === null) return null

    if (key === node.key) return node
    else if (key < node.key) return this.getNode(node.left, key)
    else return this.getNode(node.right, key)
  }

  remove (key) {
    const node = this.getNode(key)
    if (node !== null) {
      this.root = this._remove(key)
      return node.val
    }
    return null
  }

  _remove (key, node = this.root) {
    if (node === null) return null

    if (node.key > key) {
      node.left = this._remove(key, node.left)
      return node
    } else if (node.key < key) {
      node.right = this._remove(key, node.right)
      return node
    } else {
      if (node.left === null) {
        // 左子树为空
        return this.removeMin(node)
      } else if (node.right === null) {
        // 右子树为空
        return this.removeMax(node)
      } else {
        // 左右子树均不为空
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

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }
}

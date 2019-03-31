/**
 *  avl树 - 一种平衡树
 */

class Node {
  key
  val
  height = 1
  left = null
  right = null

  constructor (key = null, val = null) {
    this.key = key
    this.val = val
  }
}
// TODO: 完全搞懂
// TODO: 基于AVL的Map和Set
// TODO: 若height没有发生变化，所有父节点都不变化
export class AVLTree {
  root = null
  size = 0

  // 添加一个元素(key - value)
  add (key, val) {
    this.root = this._add(key, val, this.root)
  }
  _add (key, val, node) {
    if (node === null) {
      this.size++
      return new Node(key, val)
    }

    if (node.val > val)
      node.left = this._add(key, val, node.left)
    else if (node.val < val)
      node.right = this._add(key, val, node.right)

    this.updateHeightAndFactor(node)
    return node
  }

  // 删除键为key的元素
  remove (key) {
    this.root = this._remove(key, this.root)
  }
  _remove (key, node) {
    if (node === null) return null

    let retNode = node

    if (node.val > val) {
      node.left = this._remove(val, node.left)
    } else if (node.val < val) {
      node.right = this._remove(val, node.right)
    } else {
      // 左子树为空
      if (node.left === null) {
        retNode = this.removeMin(node)
        // 右子树为空
      } else if (node.right === null) {
        retNode = this.removeMax(node)
        // 左右子树均不为空
      } else {
        const successor = this.getMin(node.right)
        successor.right = this.remove(successor.key)
        successor.left = node.left

        node.left = node.right = null
        retNode = successor
      }
    }
    if (retNode === null) return null
    this.updateHeightAndFactor(retNode)
    return retNode
  }

  // 更改元素的值(键不变)
  set (key, val) {
    const node = this.getNode(key, this.root)
    if (!node) return 'can not find the node'
    node.val = val
  }

  // 判断是否存在键为key的元素
  contains (key) {
    return this.getNode(key, this.root)  !== null
  }

  // 返回键为key的元素的值
  get (key) {
    const node = this.getNode(key, this.root)
    return node ? node.val : null
  }


  updateHeightAndFactor (node) {
    // 更新height
    node.height = 1 + Math.max(
      this.getHeight(node.left), this.getHeight(node.right)
    )

    // 根据平衡因子更新树结构
    const balanceFactor = this.getBalanceFactor(node)
    // LL
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rightRotate(node)
    // RR
    } else if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.leftRotate(node)
    // LR
    } else if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.leftRotate(node.left)
      return this.rightRotate(node)
    // RL
    } else if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rightRotate(node.right)
      return this.leftRotate(node)
    }
  }

  /**
   *      y                             x
   *    /  \                          /   \
   *   T1   x         左旋转         y     z
   *       / \   - - - - - - - ->   / \   / \
   *     T2  z                     T1 T2 T3 T4
   *        / \
   *       T3 T4
   */
  leftRotate (y) {
    const x = y.right
    const T2 = x.left

    x.left = y
    y.right = T2

    y.height = Math.max(
      this.getHeight(y.left), this.getHeight(y.right)
    ) + 1
    x.height = Math.max(
      this.getHeight(x.left), this.getHeight(x.right)
    ) + 1

    return x
  }

  /**
   *         y                              x
   *       / \                           /   \
   *      x   T4        右旋转          z     y
   *     / \       - - - - - - - ->    / \   / \
   *    z   T3                       T1  T2 T3 T4
   *   / \
   * T1   T2
   */
  rightRotate (y) {
    const x = y.left
    const T3 = x.right

    x.right = y
    y.left = T3

    y.height = Math.max(
      this.getHeight(y.left), this.getHeight(y.right)
    ) + 1
    x.height = Math.max(
      this.getHeight(x.left), this.getHeight(x.right)
    ) + 1

    return x
  }

  // 返回key的节点
  getNode (key, node) {
    if (node === null) return null

    if (node.key === key)
      return node
    else if (node.key > key)
      return this.getNode(key, node.left)
    else
      return this.getNode(key, node.right)
  }

  // 获取树的最小节点
  getMin (node) {
    if (node.left === null) return node
    return this.getMin(node.left)
  }

  // 获取树的最大节点
  getMax (node) {
    if (node.right === null) return node
    return this.getMax(node.right)
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

  // 计算平衡因子
  getBalanceFactor (node) {
    if (node === null) return 0
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  getHeight (node) {
    if (node === null) return 0
    return node.height
  }
  getSize () {
    return this.size
  }
  isEmpty () {
    return this.size === 0
  }
}

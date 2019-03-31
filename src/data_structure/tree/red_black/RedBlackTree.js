/**
 *  红黑树 - 一种平衡树
 *  本质上是2-3树，2-3树是一种绝对平衡二叉树
 *  特点：
 *  1. 每个节点是红色或黑色的
 *  2. 根节点是黑色的
 *  3. 每个叶子节点是黑色的
 *  4. 如果一个节点是红色的，那么他的孩子的节点是黑色的
 *  5. 任意一个节点到叶子节点，经过的黑色节点数量是一样的
 *  增删改查 - O(logn)
 *  牺牲了平衡性、统计性能更优
 */
const RED = true
const BLACK = false

class Node {
  key
  val
  color = RED
  left = null
  right = null

  constructor (key = null, val = null) {
    this.key = key
    this.val = val
  }
}

// TODO: 删除元素
// TODO: 右倾红黑色
// TODO: Splay Tree - 伸展树
export class RedBlackTree {
  root = null
  size = 0

  // 添加一个元素(key - value)
  add (key, val) {
    this.root = this._add(key, val, this.root)
    this.root.color = BLACK
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

    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node)
    }

    if (this.isRed(node.left) && !this.isRed(node.left.left)) {
      node = this.rightRotate(node)
    }

    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColor(node)
    }

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

  // 颜色翻转
  flipColor (node) {
    node.color = RED
    node.left.color = BLACK
    node.right.color = BLACK
  }

  /**
   *      node                             x
   *    /    \                          /   \
   *   T1     x          左旋转       node   T3
   *        /  \     - - - - - - ->   / \
   *      T2    T3                   T1 T2
   */
  leftRotate (node) {
    const x = node.right
    node.right = x.left
    x.left = node

    x.color = node.color
    node.color = RED

    return x
  }

  /**
   *         node                           x
   *       /    \                        /   \
   *      x      T2       右旋转        y   node
   *    /  \          - - - - - - ->        /  \
   *   y    T1                             T1  T2
   */
  rightRotate (node) {
    const x = node.left
    node.left = x.right
    x.right = node

    x.color = node.color
    node.color = RED

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

  // 判断节点颜色
  isRed (node) {
    if (node === null) return BLACK
    return node.color
  }
  getSize () {
    return this.size
  }
  isEmpty () {
    return this.size === 0
  }
}

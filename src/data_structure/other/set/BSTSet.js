import {BinarySearchTree} from "../../tree/binary_search/BinarySearchTree"

export class BSTSet {
  constructor (arr = []) {
    this.bst = new BinarySearchTree(arr)
  }

  add (val) {
    this.bst.add(val)
  }

  remove (val) {
    this.bst.remove(val)
  }

  contains (val) {
    return this.bst.contains(val)
  }

  getSize () {
    return this.bst.getSize()
  }
  isEmpty () {
    return this.bst.isEmpty()
  }
}

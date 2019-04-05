import {BinarySearchTree} from "./BinarySearchTree"

const bst = new BinarySearchTree()

bst.add(10).add(2).add(14).add(16).add(5).add(4).add(1).add(13)
console.log(bst.contains(3))
// bst.preTraverse()
// bst.inTraverse()
// bst.postTraverse()
// bst.levelOrder()

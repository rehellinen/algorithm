import {ArrayStack} from "./line/stack/ArrayStack"
import {ListStack} from "./line/stack/ListStack"
import {ArrayQueue} from "./other/queue/ArrayQueue"
import {CircularQueue} from "./other/queue/CircularQueue"
import {performanceTesting} from "../utils/utils"
import {LinkedList} from "./line/linked_list/LinkedList"
import {BinarySearchTree} from "./tree/BinarySearchTree"
import {BSTSet} from "./other/set/BSTSet"
import {LinkedListSet} from "./other/set/LinkedListSet"
import {LinkedListMap} from "./other/map/LinkedListMap"
import {ListQueue} from "./other/queue/ListQueue"

// 关于栈
const testStack = () => {
  let LStack = new ListStack()
  let AStack = new ArrayStack()
  const test = (stack) => {
    const count = 20000000
    for (let i = 0; i < count; i++) LStack.push(i)
    for (let i = 0; i < count; i++) LStack.pop(i)
  }
  let LTime = performanceTesting(test, LStack)
  let ATime = performanceTesting(test, AStack)
  console.log(`list: ${LTime}`)
  console.log(`array: ${ATime}`)
}
// testStack()

// 关于链表
const testList = () => {
  const count = 100000
  const time1 = performanceTesting(() => {
    const list = new LinkedList()
    for (let i = 10; i < count; i++) {
      list.add(i - 5, i)
    }
  })
}
// testList()

// 测试循环队列与普通队列的性能
const testQueue = (times = 100) => {
  const array = new ArrayQueue()
  const cir = new CircularQueue()
  const test = (queue) => {
    const count = 100000
    for (let i = 0; i < count; i++)  queue.enqueue(i)
    for (let i = 0; i < count; i++)  queue.dequeue()
  }

  let arrTime = performanceTesting(test, array)
  let cirTime = performanceTesting(test, cir)
  console.log(`array queue: ${arrTime}ms`)
  console.log(`circular queue: ${cirTime}ms`)
}
// testQueue()

import {ArrayStack} from "./line/stack/ArrayStack"
import {ListStack} from "./line/stack/ListStack"
import {ArrayQueue} from "./line/queue/ArrayQueue"
import {CircularQueue} from "./line/queue/CircularQueue"
import {performanceTesting} from "../utils/utils"
import {LinkedList} from "./linked_list/LinkedList"

// 关于栈
const testStack = () => {
  let LStack = new ListStack()
  let AStack = new ArrayStack()
  const test = (stack) => {
    const count = 10000000
    for (let i = 0; i < count; i++) LStack.push(i)
    for (let i = 0; i < count; i++) LStack.pop(i)
  }
  let LTime = performanceTesting(test, LStack)
  let ATime = performanceTesting(test, AStack)
  console.log(`list: ${LTime}`)
  console.log(`array: ${ATime}`)
}
testStack()

// 关于链表
const testList = () => {
  const list = new LinkedList()
  for (let i = 0; i < 10; i++) {
    list.add(i, i)
  }
  list.set(5, 12)
  list.deleteFirst(4)
  list.deleteLast(4)
  list.toString()
}

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

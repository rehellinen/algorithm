import {ArrayStack} from "./line/stack/ArrayStack"
import {ListStack} from "./line/stack/ListStack"
import {ArrayQueue} from "./line/queue/ArrayQueue"
import {CircularQueue} from "./line/queue/CircularQueue"
import {performanceTesting} from "../utils/utils"
import {LinkedList} from "./linked_list/LinkedList"


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

testList()

// 测试循环队列与普通队列的性能
const testQueue = (times = 100) => {
  const count = 100000
  let arrTime = 0
  let cirTime = 0
  const array = new ArrayQueue()
  const cir = new CircularQueue()
  const test = (queue) => {
    for (let i = 0; i < count; i++)  queue.enqueue(i)
    for (let i = 0; i < count; i++)  queue.dequeue()
  }

  arrTime += performanceTesting(test, array)
  cirTime += performanceTesting(test, cir)
  console.log(`array queue: ${arrTime}ms`)
  console.log(`circular queue: ${cirTime}ms`)
}

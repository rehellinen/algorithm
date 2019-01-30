import {Stack} from "./line/stack/Stack"
import {ArrayQueue} from "./line/queue/ArrayQueue"
import {CircularQueue} from "./line/queue/CircularQueue"
import {performanceTesting} from "../utils/utils"

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


testQueue()

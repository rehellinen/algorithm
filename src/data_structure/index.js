import {Stack} from "./line/stack/Stack"
import {ArrayQueue} from "./line/queue/ArrayQueue"
import {CircularQueue} from "./line/queue/CircularQueue"

let queue = new CircularQueue()


for (let i = 0; i < 40; i++) {
  queue.enqueue(i)
}

for (let i = 0; i < 40; i++) {
  queue.dequeue(i)
  if (i % 5 === 0 || i > 30) queue.toString()
}

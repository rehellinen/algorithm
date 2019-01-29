import {Stack} from "./line/stack/Stack"
import {ArrayQueue} from "./line/queue/ArrayQueue"

let q = new Queue()
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.getSize())
q.toString()

q.dequeue()
console.log(q.getFront())
q.toString()

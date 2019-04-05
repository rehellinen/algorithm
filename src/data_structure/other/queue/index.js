import {ArrayQueue} from "./ArrayQueue"
import {timeTesting} from "../../../utils/utils"
import {ListQueue} from "./ListQueue"
import {CircularQueue} from "./CircularQueue"
import {PriorityQueue} from "./PriorityQueue"

const testTimes = 100000
const aq = new ArrayQueue()
const lq = new ListQueue()
const cq = new CircularQueue()
const pq = new PriorityQueue()


const AQEnqueue = () => aq.enqueue(1)
const AQDequeue = () => aq.dequeue()
const LQEnqueue = () => lq.enqueue(1)
const LQDequeue = () => lq.dequeue()
const CQEnqueue = () => cq.dequeue()
const CQDequeue = () => cq.dequeue()
const PQEnqueue = () => {
  let times = 0
  return function PQEnqueue () {
    pq.enqueue(times)
    times++
  }
}
const PQDequeue = () => pq.dequeue()

timeTesting(AQEnqueue, testTimes)
timeTesting(AQDequeue, testTimes)
timeTesting(LQEnqueue, testTimes)
timeTesting(LQDequeue, testTimes)
timeTesting(CQEnqueue, testTimes)
timeTesting(CQDequeue, testTimes)
timeTesting(PQEnqueue(), testTimes)
timeTesting(PQDequeue, testTimes)


/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/4/3 20:51
 */
import {LinkedList} from "./LinkedList"
import {timeTesting} from "../../../utils/utils"

const testTimes = 100000
const list = new LinkedList()

// 时间为10ms
const testFirst = () => {
  list.addFirst(1)
}
// 时间为65000ms
const testLast = () => {
  list.addLast(1)
}

timeTesting(testFirst, testTimes)
timeTesting(testLast, testTimes)


import {LinkedListSet} from "./LinkedListSet"
import {BSTSet} from "./BSTSet"
import {timeTesting} from "../../../utils/utils"

const testTimes = 6000
const testArr = []
const ll = new LinkedListSet()
const bst = new BSTSet()

for (let i = 0; i < testTimes; i++) {
  testArr.push(i)
}
testArr.sort(() => Math.random() > 0.5 ? 1 : -1)

const llAdd= () => {
  let times = 0
  return function llAdd () {
    ll.add(testArr[times])
    times++
  }
}

const bstAdd= () => {
  let times = 0
  return function bstAdd () {
    bst.add(testArr[times])
    times++
  }
}

timeTesting(llAdd(), testTimes)
timeTesting(bstAdd(), testTimes)

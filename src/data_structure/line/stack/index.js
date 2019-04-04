import {ArrayStack} from "./ArrayStack"
import {ListStack} from "./ListStack"
import {timeTesting} from "../../../utils/utils"

const testTimes = 100000
const as = new ArrayStack()
const ls = new ListStack()

const testArrayStack = () => {
  as.push(1)
}

const testListStack = () => {
  ls.push(1)
}

timeTesting(testArrayStack, testTimes)
timeTesting(testListStack, testTimes)


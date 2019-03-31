import {LinkedList} from "../../../data_structure/line/linked_list/LinkedList"

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const removeElements = (head, val) => {
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) return head

  let prev = head
  while (prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }
  return head
}

const removeElementsV2 = (head, val) => {
  let dummyHead = new ListNode(null, head)

  let prev = dummyHead
  while (prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }
  return dummyHead.next
}

const removeElementsV3 = (head, val) => {
  if (head === null) return null
  head.next = removeElementsV3(head.next, val);
  return head.val === val ? head.next : head
}

const list = new LinkedList([1, 3, 3, 6, 6, 7, 10])

const head = removeElementsV3(list.getFirst(), 3)
console.log(head)
list.toString()

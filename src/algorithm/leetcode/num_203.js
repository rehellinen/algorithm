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

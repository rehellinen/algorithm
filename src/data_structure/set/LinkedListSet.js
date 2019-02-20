import {LinkedList} from "../line/linked_list/LinkedList"

export class LinkedListSet {
  constructor (arr) {
    this.list = new LinkedList()
    arr.forEach(item => this.add(item))
  }

  add (val) {
    if (!this.contains(val)) this.list.addFirst(val)
  }

  remove (val) {
    this.list.deleteVal(val)
  }

  contains (val) {
    return this.list.contains(val)
  }

  getSize () {
    return this.list.getSize()
  }

  isEmpty () {
    return this.list.isEmpty()
  }
}

/**
 *  ListQueue.js
 *  Create By rehellinen
 *  Create On 2019/3/26 22:56
 */
class Node {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}


export class ListQueue {
  head = null
  tail = null
  size = 0

  constructor () {}

  enqueue (e) {
    if (this.tail === null) {
      this.tail = new Node(e)
      this.head = this.tail
    } else {
      this.tail.next = new Node(e)
      this.tail = this.tail.next
    }
    this.size++
  }

  dequeue () {
    if (this.isEmpty()) return 'empty'

    const retNode = this.head
    this.head = this.head.next
    retNode.next = null

    if (this.head === null) this.tail = null
    return retNode.val
  }

  getFront () {
    if (this.isEmpty()) return 'empty'
    return this.head.val
  }

  getSize () {
    return this.size
  }
  isEmpty () {
    return this.size === 0
  }
  toString () {
    let str = `List Queue: size(${this.size})\n`
    let curr = this.head
    while (curr !== null) {
      str += `${curr.val} -> `
      curr = curr.next
    }
    console.log(str += 'null')
  }
}

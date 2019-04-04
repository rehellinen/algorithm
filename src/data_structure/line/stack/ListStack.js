import {LinkedList} from "../linked_list/LinkedList"

export class ListStack {
  _data

  constructor () {
    this._data = new LinkedList()
  }

  // 向栈内放入一个新元素
  push (e) {
    this._data.addFirst(e)
  }

  // 取出栈顶元素
  pop () {
    return this._data.deleteFirst()
  }

  // 查看栈顶元素
  peek () {
    return this._data.getFirst()
  }

  // 清除所有元素
  clear () {
    this._data = new LinkedList()
  }

  // 查看栈中有多少元素
  getSize () {
    return this._data.getSize()
  }
  // 判断栈是否为空
  isEmpty () {
    return this._data.isEmpty()
  }
  toString () {
    return this._data.toString()
  }
}

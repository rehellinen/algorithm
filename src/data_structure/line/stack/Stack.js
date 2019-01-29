/**
 * 栈(stack)
 * 后进先出（LIFO）
 */
export class Stack {
  _data = []
  _top = 0

  // 查看栈中有多少元素
  getSize () {
    return this._top
  }

  // 判断栈是否为空
  isEmpty () {
    return this._top === 0
  }

  // 向栈内放入一个新元素
  push (e) {
    this._data[this._top++] = e
  }

  // 取出栈顶元素
  pop () {
    if (this._top <= 0) return 'empty'
    return this._data.splice(--this._top, 1)[0]
  }

  // 查看栈顶元素
  peek () {
    if (this._top <= 0) return 'empty'
    return this._data[this._top - 1]
  }

  // 清除所有元素
  clear () {
    this._data = []
    this.top = 0
  }

  toString () {
    let str = `Stack: size(${this.getSize()})\n[`
    this._data.forEach((item, index) => {
      str += `${item}${index === this._data.length - 1 ? '' : ', '}`
    })
    str += '] -> top'
    console.log(str)
  }
}

import {ArrayStack} from "../../../data_structure/stack/ArrayStack"

// 题目介绍：
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 1. 左括号必须用相同类型的右括号闭合。
// 2. 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

export const isValid = (str) => {
  const stack = new ArrayStack()
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === '(' || char === '[' || char === '{') {
      stack.push(str[i])
    } else {
      if (stack.isEmpty()) return false
      const top = stack.pop()
      if (char === ')' && top !== '(') return false
      if (char === ']' && top !== '[') return false
      if (char === '}' && top !== '{') return false
    }
  }
  return stack.isEmpty()
}

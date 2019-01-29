import {Stack} from "../../data_structure/stack/Stack"

export const isValid = (str) => {
  const stack = new Stack()
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

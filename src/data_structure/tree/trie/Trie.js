/**
 * trie 字典树、前缀树
 * 每个字母为一个节点
 * 时间复杂度 - O(w) - w为长度
 * 每个节点有26个指向下个节点的指针
 */
class Node {
  isWord = false
  next = {}

  constructor (isWord = false) {
    this.isWord = isWord
  }
}

// TODO: 用递归完成添加、查询操作，完成删除操作
// TODO: 压缩字典树、三分搜素树Trie、后缀树
// TODO: LeetCode：211、677
// TODO: 子串查询 - KMP Boyer-Moore Rabin-Karp
// TODO: 文件压缩、模式匹配、编译原理
class Trie {
  root = new Node()
  size = 0

  // 添加一个单词
  add (word) {
    let curr = this.root
    word.split().forEach(letter => {
      if (!curr.next[letter]) curr.next[letter] = new Node()
      curr = curr.next[letter]
    })

    if (!curr.isWord) {
      curr.isWord = true
      this.size++
    }
  }

  // 判断是否有某个单词
  has (word) {
    let curr = this.root
    word.split().forEach(letter => {
      if (curr.next[letter] === undefined) return false
      curr = curr.next[letter]
    })
    return curr.isWord;
  }

  // 判断是否有前缀
  startsWith (prefix) {
    let curr = this.root
    prefix.split().forEach(letter => {
      if (curr.next[letter] === undefined) return false
      curr = curr.next[letter]
    })
    return true
  }

  // 获取单词数量
  getSize () {
    return this.size
  }
}


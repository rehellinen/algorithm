/**
 *  Hash - O(1)
 *  牺牲了顺序性
 *
 *  1. 大整数 - 模一个素数
 *  2. 浮点、字符串 - 转为整形
 *  哈希冲突处理：
 *  1. 链地址法
 *  2. 使用树（红黑树）
 */
import {BSTMap} from "../map/BSTMap"

class HashTable {
  hashTable = []
  M = 9
  size = 0
  lowerTol = 2
  upperTol = 10
  capacityIndex = 0
  capacity = [
    97, 193
  ]

  constructor() {
    for (let i = 0; i < this.capacity[this.capacityIndex]; i++) {
      this.hashTable[i] = new BSTMap()
    }
  }

  // 添加一个元素
  add (key, value) {
    const map = this.hashTable[this.hash(key)]

    if (map.contains(key)) {
      map.set(key, value)
    } else {
      map.add(value)
      this.size++
      if (this.size >= this.upperTol * this.M
        && this.capacityIndex < this.capacity.length) {
        this.resize(this.capacity[++this.capacityIndex])
      }
    }
  }

  // 删除一个元素
  remove (key) {
    const map = this.hashTable[this.hash(key)]
    let ret = null

    if (map.contains(key)) {
      ret = map.remove(key)
      this.size--
      if (this.size < this.lowerTol * this.M
        && this.capacityIndex > 0) {
        this.resize(this.capacity[--this.capacityIndex])
      }
    }
    return ret
  }

  // 修改一个元素
  set (key, value) {
    const map = this.hashTable[this.hash(key)]
    if (!map.contains(key)) {
      return 'no data'
    }
    map.set(key, value)
  }

  // 是否包含某个元素
  contains (key) {
    return this.hashTable[this.hash(key)].contains(key)
  }

  // 查找某个函数
  get (key) {
    return this.hashTable[this.hash(key)].get(key)
  }

  resize (size) {
    const newHashTable = []
    for (let i = 0; i < size; i++) {
      newHashTable[i] = new BSTMap()
    }
    const oldM = this,M
    this.M = size
    for (let i = 0; i < oldM; i++) {
      const map = this.hashTable[i]
      // TODO: 遍历MAP
      // newHashTable[this.hash(key)] = new BSTMap()
    }
  }

  hash (key) {
    // TODO: 转为哈希
    return key.toHash() % this.M
  }
  toHash () {

  }

  getSize () {
    return this.size
  }

}

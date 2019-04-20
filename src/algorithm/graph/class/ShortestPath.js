/**
 *  ShortestPath.js
 *  Create By rehellinen
 *  Create On 2019/4/20 17:23
 */
import {CircularQueue} from "../../../data_structure/other/queue/CircularQueue"
import {ArrayStack} from "../../../data_structure/line/stack/ArrayStack"

export class ShortestPath {
  // 图的实例
  graph = null
  // 判断节点是否被遍历
  visited = []
  // 遍历过程中该节点的上个节点
  from = []
  // 到源点的距离
  distance = []
  // 源点
  source = 0

  constructor (graph, source) {
    this.graph = graph
    this._isLegalRange(source)
    this.source = source

    const queue = new CircularQueue()
    queue.enqueue(source)
    this.visited[source] = true
    this.distance[source] = 0
    while (!queue.isEmpty()) {
      const v = queue.dequeue()

      this.graph.setIterator(v)
      for (let item of this.graph) {
        if (!this.visited[item]) {
          queue.enqueue(item)
          this.visited[item] = true
          this.from[item] = v
          this.distance[item] = this.distance[v] + 1
        }
      }
    }
  }

  // 获取source到w的最短的length
  getLength (w) {
    this._isLegalRange(w)
    return this.distance[w]
  }

  // 判断source和w之间是否有路径
  hasPath (w) {
    this._isLegalRange(w)
    return !!this.visited[w]
  }

  // 获取source和w之间的路径
  path (w) {
    const res = []
    const stack = new ArrayStack()

    while (w != null) {
      stack.push(w)
      w = this.from[w]
    }

    while (!stack.isEmpty()) {
      res.push(stack.pop())
    }
    return res
  }

  // 打印出source和w之间的路径
  showPath (w) {
    const res = this.path(w)
    let str = `bfs: `
    res.forEach((item, index) => {
      str += item
      if (index < res.length - 1) str += ' -> '
    })
    console.log(str)
  }

  // 判断节点范围是否合法
  _isLegalRange (i) {
    i = parseInt(i)
    if (i < 0 || i >= this.graph.getVertex()) {
      throw new Error('the range of vertex is error')
    }
  }
}

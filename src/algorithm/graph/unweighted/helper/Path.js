/**
 *  Path.js
 *  Create By rehellinen
 *  Create On 2019/4/20 14:07
 */
import {ArrayStack} from "../../../../data_structure/line/stack/ArrayStack"

export class Path {
  // 图的实例
  graph = null
  // 判断节点是否被遍历
  visited = []
  // 遍历过程中该节点的上个节点
  from = []
  // 源点
  source = 0

  constructor (graph, source) {
    this.graph = graph
    this._isLegalRange(source)
    this.source = source

    this.dfs(source)
  }

  // 深度优先遍历
  dfs (v) {
    this.visited[v] = true
    // 遍历图的v节点的所有相连节点
    this.graph.setIterator(v)
    for (let vertex of this.graph) {
      if (!this.visited[vertex]) {
        this.from[vertex] = v
        this.dfs(vertex)
      }
    }
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
    let str = `dfs: `
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

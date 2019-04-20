/**
 *  Component.js
 *  Create By rehellinen
 *  Create On 2019/4/19 22:41
 */

export class Component {
  graph = null
  visited = []
  id= []
  cCount = 0

  constructor (graph) {
    this.graph = graph
    for (let i = 0; i < graph.getVertex(); i++) {
      if (!this.visited[i]) {
        this.dfs(i)
        this.cCount++
      }
    }
  }

  // 深度优先遍历
  dfs (v) {
    this.visited[v] = true
    this.id[v] = this.cCount
    // 遍历图的v节点的所有相连节点
    this.graph.setIterator(v)
    for (let vertex of this.graph) {
      if (!this.visited[vertex]) this.dfs(vertex)
    }
  }

  // 获取连通分量的数量
  getCount () {
    return this.cCount
  }

  // 判断两个节点是否在同个连通分量
  isConnected (v, w) {
    this._isLegalRange(v)
    this._isLegalRange(w)
    return this.id[v] === this.id[w]
  }
  // 判断节点范围是否合法
  _isLegalRange (i) {
    if (i < 0 || i >= this.graph.getVertex()) {
      throw new Error('the range of vertex is error')
    }
  }
}

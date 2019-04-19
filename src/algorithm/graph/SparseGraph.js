/**
 *  SparseGraph.js
 *  Create By rehellinen
 *  Create On 2019/4/19 20:08
 */
// 稀疏图 - 邻接表
export class SparseGraph {
  // 节点的个数
  vertex = 0
  // 边的个数
  edge = 0
  // 邻接表
  graph = []
  // 是否为有向图
  directed = false

  constructor (vertex = 0, directed = false) {
    this.vertex = vertex
    this.directed = directed
    for (let i = 0; i < vertex; i++) {
      this.graph.push([])
    }
  }

  // 添加一条边
  addEdge (v, w) {
    this._isLegalRange(v)
    this._isLegalRange(w)

    this.graph[v].push(w)
    if (v !== w && !this.directed) this.graph[w].push(v)
    this.edge++
  }

  // 获取节点的个数
  getVertex () {
    return this.vertex
  }
  // 获取边的个数
  getEdge () {
    return this.edge
  }
  // 判断节点范围是否合法
  _isLegalRange (i) {
    if (i < 0 || i >= this.vertex) {
      throw new Error('the range of vertex is error')
    }
  }
  // 打印图的当前结构
  toString () {
    for (let i = 0; i < this.graph.length; i++) {
      let str = `vertex-${i} --- `
      this.graph[i].forEach(item => {
        str += `${item}, `
      })
      console.log(str)
    }
  }
}

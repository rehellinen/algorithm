/**
 *  DenseGraph.js
 *  Create By rehellinen
 *  Create On 2019/4/19 20:09
 */
// 稠密图 - 邻接矩阵
// 优势 -  更好地处理自环边和平行边
export class DenseGraph {
  // 节点的个数
  vertex = 0
  // 边的个数
  edge = 0
  // 邻接矩阵
  graph = []
  // 是否为有向图
  directed = false
  // 遍历的节点
  iteratorNode = 0

  constructor (vertex, directed) {
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

    if (this.hasEdge(v, w)) return

    this.graph[v][w] = true
    if (!this.directed) this.graph[w][v] = true
    this.edge++
  }

  // 判断v, w是否连通
  hasEdge (v, w) {
    this._isLegalRange(v)
    this._isLegalRange(w)
    return this.graph[v][w]
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
      this.graph[i].forEach((item, index) => {
        if (item) str += `${index}, `
      })
      console.log(`${str}${i === this.graph.length-1 ? '\n' : ''}`)
    }
  }
  // Iterator接口
  // 遍历规定节点的所有相连节点
  [Symbol.iterator] () {
    let index = 0
    return {
      next: () => {
        const iterator = this.graph[this.iteratorNode]
        for (let i = index; i <= iterator.length; i++) {
          const retObj = {done: false}
          if (i >= iterator.length) retObj.done = true

          if (iterator[i]) {
            retObj.value = i
            index++
            return retObj
          } else {
            if (i === iterator.length) return retObj
            index++
          }
        }
      }
    }
  }
  // 设置需要遍历的节点
  setIterator (v) {
    this.iteratorNode = v
  }
}

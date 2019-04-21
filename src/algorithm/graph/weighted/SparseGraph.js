/**
 *  SparseGraph.js
 *  Create By rehellinen
 *  Create On 2019/4/19 20:08
 */
import {Edge} from "./Edge"

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
  // 遍历的节点
  iteratorNode = 0

  constructor (vertex = 0, directed = false) {
    this.vertex = vertex
    this.directed = directed
    for (let i = 0; i < vertex; i++) {
      this.graph.push([])
    }
  }

  // 添加一条边
  addEdge (v, w, weight) {
    this._isLegalRange(v)
    this._isLegalRange(w)

    this.graph[v].push(new Edge(v, w, weight))
    if (v !== w && !this.directed) this.graph[w].push(new Edge(w, v, weight))
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
    i = parseInt(i)
    if (i < 0 || i >= parseInt(this.vertex)) {
      throw new Error('the range of vertex is error')
    }
  }
  // 打印图的当前结构
  toString () {
    for (let i = 0; i < this.graph.length; i++) {
      let str = `vertex-${i} --- `
      this.graph[i].forEach(item => {
        str += `${item.b}(weight: ${item.weight}), `
      })
      console.log(`${str}${i === this.graph.length-1 ? '\n' : ''}`)
    }
  }
  // Iterator接口
  // 遍历规定节点的所有相连节点
  [Symbol.iterator] () {
    let index = 0
    const iterator = this.graph[this.iteratorNode]
    return {
      next: () => {
        const retObj = {done: false}
        if (index >= iterator.length) retObj.done = true

        retObj.value = iterator[index]
        index++
        return retObj
      }
    }
  }
  // 设置需要遍历的节点
  setIterator (v) {
    if (v >= this.graph.length) throw new Error('illegal vertex')
    this.iteratorNode = v
  }
}

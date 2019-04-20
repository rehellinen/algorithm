/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/4/19 21:37
 */

import {DenseGraph} from "./DenseGraph"
import {SparseGraph} from "./SparseGraph"

const vertex = 10
const edge = 40

// 测试稀疏图
const testSparse = () => {
  const sparse = new SparseGraph(vertex, false)
  for (let i = 0; i < edge; i++) {
    sparse.addEdge(
      Math.floor(Math.random() * vertex),
      Math.floor(Math.random() * vertex)
    )
  }
  sparse.toString()
  sparse.setIterator(9)
  for (let item of sparse) {
    console.log(item)
  }
}

const testDense = () => {
  const dense = new DenseGraph(vertex, false)
  for (let i = 0; i < edge; i++) {
    dense.addEdge(
      Math.floor(Math.random() * vertex),
      Math.floor(Math.random() * vertex)
    )
  }
  dense.toString()
  dense.setIterator(9)
  for (let item of dense) {
    console.log(item)
  }
}
testSparse()
// testDense()


/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/4/19 21:37
 */

import {DenseGraph} from "./DenseGraph"
import {SparseGraph} from "./SparseGraph"
import {Component} from "./class/Component"
import {ReadGraph} from "./class/ReadGraph"

const vertex = 5
const edge = 10


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
  for (let i = 0; i < edge; i++) {
    dense.setIterator(i)
    for (let item of dense) {
      console.log(item)
    }
  }
}

const testDFS = () => {
  const sparse = new SparseGraph(vertex, false)
  const dense = new DenseGraph(vertex, false)
  for (let i = 0; i < edge; i++) {
    dense.addEdge(
      Math.floor(Math.random() * vertex),
      Math.floor(Math.random() * vertex)
    )
    sparse.addEdge(
      Math.floor(Math.random() * vertex),
      Math.floor(Math.random() * vertex)
    )
  }
  const com1 = new Component(sparse)
  // com1.dfs(0)
}

const testRead = async () => {
  const sparse = await new ReadGraph(SparseGraph, 'data1.txt').getGraph()
  const dense = await new ReadGraph(DenseGraph, 'data1.txt').getGraph()

  sparse.toString()
  const com1 = new Component(sparse)
  // const com2 = new Component(sparse)
  console.log(com1.getCount())
  // console.log(com2.getCount())
}
// testSparse()
// testDense()
// testDFS()
testRead()


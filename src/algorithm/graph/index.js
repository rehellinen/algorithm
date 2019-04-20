/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/4/19 21:37
 */

import {DenseGraph} from "./DenseGraph"
import {SparseGraph} from "./SparseGraph"
import {Component} from "./class/Component"
import {ReadGraph} from "./class/ReadGraph"
import {Path} from "./class/Path"

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
  const sparse1 = await new ReadGraph(SparseGraph, 'data1.txt').getGraph()
  const sparse2 = await new ReadGraph(SparseGraph, 'data2.txt').getGraph()
  const dense1 = await new ReadGraph(DenseGraph, 'data1.txt').getGraph()
  const dense2 = await new ReadGraph(DenseGraph, 'data2.txt').getGraph()

  // const com11 = new Component(sparse1)
  // console.log(com11.getCount())
  //
  // const com12 = new Component(sparse2)
  // console.log(com12.getCount())

  const com21 = new Component(dense1)
  console.log(com21.getCount())

  const com22 = new Component(dense2)
  console.log(com22.getCount())
  // const com2 = new Component(sparse)
  // console.log(com2.getCount())
}

const testPath = async () => {
  const sparse = await new ReadGraph(SparseGraph, 'data1.txt').getGraph()
  const path = new Path(sparse, 0)
  path.showPath(1)
}

testPath()
// testSparse()
// testDense()
// testDFS()
// testRead()


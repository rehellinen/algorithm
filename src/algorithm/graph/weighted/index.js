/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/4/20 21:48
 */
import {ReadGraph} from "./helper/ReadGraph"
import {DenseGraph} from "./DenseGraph"
import {SparseGraph} from "./SparseGraph"

(async () => {
  const dense = await new ReadGraph(DenseGraph, 'data3.txt')
    .getGraph()
  const sparse = await new ReadGraph(SparseGraph, 'data3.txt')
    .getGraph()
  // sparse.toString()
  dense.toString()
})()

/////

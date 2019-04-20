/**
 *  ReadGraph.js
 *  Create By rehellinen
 *  Create On 2019/4/19 22:41
 */
import {resolve} from 'src/algorithm/graph/unweighted/class/Path'
import {promisify} from 'util'
import fs from 'fs'

const readPromise = promisify(fs.readFile)

export class ReadGraph {
  constructor (GraphClass, filename) {
    this.path = resolve(__dirname, '../../test_data', filename)
    this.GraphClass = GraphClass

  }

  async getGraph () {
    const info = await readPromise(this.path)

    const res = info
      .toString()
      .split('\n')
    res.forEach((item, i, arr) => arr[i] = item.split(' '))

    const countInfo = res.shift()
    const vertexCount = countInfo[0]
    const edgeCount = countInfo[1]

    const graph = new this.GraphClass(vertexCount)
    for (let i = 0; i < edgeCount; i++) {
      graph.addEdge(res[i][0], res[i][1])
    }

    return graph
  }
}

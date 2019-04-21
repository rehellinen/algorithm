/**
 *  ReadGraph.js
 *  Create By rehellinen
 *  Create On 2019/4/19 22:41
 */
import {resolve} from 'path'
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
      graph.addEdge(parseInt(res[i][0]), parseInt(res[i][1]), parseFloat(res[i][2]))
    }

    return graph
  }
}

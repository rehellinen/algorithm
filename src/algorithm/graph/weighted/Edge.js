/**
 *  Edge.js
 *  Create By rehellinen
 *  Create On 2019/4/20 21:20
 */

export class Edge {
  a
  b
  weight

  constructor (a, b, weight) {
    this.a = a
    this.b = b
    this.weight = weight
  }

  getVertexOne () {
    return this.a
  }

  getVertexTwo () {
    return this.b
  }

  getWeight () {
    return this.weight
  }

  getOther (x) {
    if (x !== this.a && x !== this.b) {
      throw new Error('the vertex isn\'t on this edge')
    }
    return x === this.a ? this.b : this.a
  }
}

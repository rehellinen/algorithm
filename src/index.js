/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
class Run {
  constructor () {
    this.app = document.getElementById('app')
  }

  start () {
    this.app.innerHTML="<p>test</p>"
    require('./alogorithm/sort/selection')
  }
}

new Run().start()

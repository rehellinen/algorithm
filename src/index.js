/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
const path = {
  algo: './algorithm/sort',
  data: './data_structure/index',
  leet: './algorithm/leetcode'
}

global.$config = {
}

const type = process.argv.pop().replace(/-/g, '')
const run = path[type]
require(run)

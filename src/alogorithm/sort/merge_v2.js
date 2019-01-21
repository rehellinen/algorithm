/**
 *  merge_v2.js
 *  Create By rehellinen
 *  Create On 2019/1/21 20:56
 */
import {__merge} from "./merge"

export const mergeSortV2 = (arr) => {
  const len = arr.length
  for (let size = 1; size <= len; size *= 2) {
    for (let i = 0; i + size < len; i += 2 * size) {
      __merge(arr, i,
        i + size - 1,
        Math.min(len - 1, i + 2 * size - 1))
    }
  }
  return arr
}

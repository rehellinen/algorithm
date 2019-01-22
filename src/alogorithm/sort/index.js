/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/21 9:52
 */

import {insertionSort} from "./insertion"
import {selectionSort} from "./selection"
import {bubbleSort} from "./bubble"
import {mergeSort} from "./merge"
import {mergeSortV2} from "./merge_v2"
import {quickSort} from "./quick"
import {generateRandomArr, performanceTesting} from "../../utils/utils"

performanceTesting(insertionSort, generateRandomArr({length: 30000, max: 15000}))
performanceTesting(selectionSort, generateRandomArr({length: 30000, max: 15000}))
// performanceTesting(bubbleSort, generateRandomArr({length: 30000, max: 15000}))
performanceTesting(mergeSort, generateRandomArr({length: 1000000, max: 15000}))
performanceTesting(mergeSortV2, generateRandomArr({length: 1000000, max: 15000}))
performanceTesting(quickSort, generateRandomArr({length: 1000000, max: 15000}))

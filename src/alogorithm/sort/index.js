/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/21 9:52
 */
import {insertionSort, insertionSortV2, insertionSortV3} from "./insertion"
import {selectionSort} from "./selection"
import {bubbleSort, bubbleSortV2} from "./bubble"
import {mergeSort, mergeSortV2} from "./merge"
import {quickSort} from "./quick"
import {quickSortV2} from "./quick_v2"
import {quickSortV3} from "./quick_v3"
import {selectionSortV2} from "./selection_v2"
import {shellSort} from "./shell"
import {generateNearlyOrderedArr, generateRandomArr, performanceTesting} from "../../utils/utils"
import {test} from "../../utils/sort"

test(10000, 10,
  insertionSort, insertionSortV2, insertionSortV3,
  mergeSort, mergeSortV2
)



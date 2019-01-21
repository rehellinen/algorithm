/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/21 9:52
 */

import {insertionSort} from "./insertion"
import {selectionSort} from "./selection"
import {generateRandomArr, performanceTesting} from "../../utils/utils"

performanceTesting(insertionSort, generateRandomArr({length: 10000, max: 4}))
performanceTesting(selectionSort, generateRandomArr({length: 10000, max: 4}))

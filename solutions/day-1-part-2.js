/* 
--- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?
*/

import { getData, strSplitByLine, arrayStrToInt } from "../tools/inputmanip.js"

let sum = 0
let myData = getData("day-1")
let myArray = strSplitByLine(myData)

function arrayCharStrip(array) {
  let onlyDigits = []
  let firstAndLast = []
  for (const i of array) {
    onlyDigits.push(i.replace(/\D/g, ""))
  }
  for (const i of onlyDigits) {
    if (i.length <= 1) {
      firstAndLast.push(i.concat(i))
    } else {
      firstAndLast.push(i.charAt(0).concat(i.charAt(i.length - 1)))
    }
  }
  return firstAndLast
}

let myNewArray = arrayCharStrip(myArray)
arrayStrToInt(myNewArray).forEach((num) => {
  sum += num
})

export let solution = () => {
  return sum
}

// https://adventofcode.com/2023/day/1#part2
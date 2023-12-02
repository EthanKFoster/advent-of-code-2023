import { getData, strSplitByLine, arrayStrToInt } from "../tools/inputmanip.js"

let sum = 0
let myData = getData('day-1')
let myArray = strSplitByLine(myData)

function arrayCharStrip(array) {
  let onlyDigits = []
  let firstAndLast = []
  for (const i of array) {
    onlyDigits.push(i.replace(/\D/g, ''))
  }
  for (const i of onlyDigits) {
    if (i.length <= 1) {
      firstAndLast.push(i.concat(i))
    } else {
      firstAndLast.push((i.charAt(0)).concat(i.charAt((i.length)-1)))
    }
  }
  return firstAndLast
}

let myNewArray = arrayCharStrip(myArray)
arrayStrToInt(myNewArray).forEach(num => {
  sum += num;
})

export let solution = () => {
  return sum
}
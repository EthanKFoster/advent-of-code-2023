import fs from 'fs'

export function getData(filePath) {
  const data = fs.readFileSync(`./input/${filePath}.txt`, 'utf-8')
  return data
}

export function strSplitByLine(string) {
  return string.split("\r\n")
}

export function arrayStrToInt(array) {
  let result = array.map(function (element) {
    return parseInt(element)
  });
  return result
}

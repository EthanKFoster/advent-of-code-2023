import fs from 'fs'

export function getData(filePath) {
  const data = fs.readFileSync(`./input/${filePath}.txt`, 'utf-8')
  return data
}

export function arrayFromLines() {}

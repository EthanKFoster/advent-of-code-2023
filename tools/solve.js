export default async function solve(x) {
  let { solution } = await import(`../solutions/${x}.js`)
  console.log(solution())
}
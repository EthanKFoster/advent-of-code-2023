export default async function solve(x) {
  let { solution } = await import(`../solutions/${x}.mjs`)
  console.log(solution())
}
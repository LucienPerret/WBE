let factorial = function (n) {
  if (typeof n != "bigint") {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    return result
  } else {
    let result = 1n
    for (let i = 1n; i <= BigInt(n); i++) {
      result *= i
    }
    return result
  }
}
module.exports = { factorial }
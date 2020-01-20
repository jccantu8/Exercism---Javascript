export const primeFactors = (n) => {
  if (n <= 1) {
    return []
  }
  let factors = []
  let i = 2

  while (n > 1) {
    if (n % i === 0) {
      factors.push(i)
      n = (n / i)
    } else {
      i++
    }
  }

  return factors
};
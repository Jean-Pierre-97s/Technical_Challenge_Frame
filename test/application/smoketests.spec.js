const divisor = require("../../src/application/divisor")
const prime = require("../../src/application/prime")

describe('Should return the divisors and the prime numbers', () => {
  it('should return the divisors of a number', async () => {
    await expect(divisor(3)).toEqual([1, 3])
  })
  
  it('should return the prime number of a number', async () => {
    await expect(prime(45)).toEqual([3, 5])
  })
})

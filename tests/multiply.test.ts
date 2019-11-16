import { multiply } from '../src/components/multiply'
import { expect } from 'chai'

describe('multiply', () => {
  it('Should return 25 when a = 5 and b = 5', () => {
    const result = multiply(5, 5)
    expect(result).equal(25)
  })
})

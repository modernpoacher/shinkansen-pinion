const {
  expect // @ts-ignore
} = require('chai')

const Number = require('#pinion/components/cogs/number')

describe('#pinion/components/cogs/number', () => {
  it('is a function', () => {
    expect(Number)
      .to.be.a('function')
  })
})

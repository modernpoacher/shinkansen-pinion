const {
  expect // @ts-ignore
} = require('chai')

const Checkbox = require('#pinion/components/cogs/checkbox')

describe('#pinion/components/cogs/checkbox', () => {
  it('is a function', () => {
    expect(Checkbox)
      .to.be.a('function')
  })
})

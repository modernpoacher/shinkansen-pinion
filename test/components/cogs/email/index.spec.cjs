const {
  expect // @ts-ignore
} = require('chai')

const Email = require('#pinion/components/cogs/email')

describe('#pinion/components/cogs/email', () => {
  it('is a function', () => {
    expect(Email)
      .to.be.a('function')
  })
})

const {
  expect // @ts-ignore
} = require('chai')

const Password = require('#pinion/components/cogs/password')

describe('#pinion/components/cogs/password', () => {
  it('is a function', () => {
    expect(Password)
      .to.be.a('function')
  })
})

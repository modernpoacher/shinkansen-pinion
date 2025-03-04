const {
  expect // @ts-ignore
} = require('chai')

const Select = require('#pinion/components/cogs/select')

describe('#pinion/components/cogs/select', () => {
  it('is a function', () => {
    expect(Select)
      .to.be.a('function')
  })
})

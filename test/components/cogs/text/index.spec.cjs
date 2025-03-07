const {
  expect // @ts-ignore
} = require('chai')

const Text = require('#pinion/components/cogs/text')

describe('#pinion/components/cogs/text', () => {
  it('is a function', () => {
    expect(Text)
      .to.be.a('function')
  })
})

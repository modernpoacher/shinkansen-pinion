const {
  expect // @ts-ignore
} = require('chai')

const Textarea = require('#pinion/components/cogs/textarea')

describe('#pinion/components/cogs/textarea', () => {
  it('is a function', () => {
    expect(Textarea)
      .to.be.a('function')
  })
})

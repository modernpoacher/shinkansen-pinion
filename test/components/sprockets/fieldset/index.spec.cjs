const {
  expect // @ts-ignore
} = require('chai')

const Fieldset = require('#pinion/components/sprockets/fieldset')

describe('#pinion/components/sprockets/fieldset', () => {
  it('is a function', () => {
    expect(Fieldset)
      .to.be.a('function')
  })
})

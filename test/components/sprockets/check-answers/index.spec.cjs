const {
  expect // @ts-ignore
} = require('chai')

const CheckAnswers = require('#pinion/components/sprockets/check-answers')

describe('#pinion/components/sprockets/check-answers', () => {
  it('is a function', () => {
    expect(CheckAnswers)
      .to.be.a('function')
  })
})

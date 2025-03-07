const {
  expect // @ts-ignore
} = require('chai')

const {
  CheckAnswers,
  ErrorSummary,
  Fieldset
} = require('#pinion/components/sprockets')

describe('#pinion/components/sprockets', () => {
  describe('`CheckAnswers`', () => {
    it('is a function', () => {
      expect(CheckAnswers)
        .to.be.a('function')
    })
  })

  describe('`ErrorSummary`', () => {
    it('is a function', () => {
      expect(ErrorSummary)
        .to.be.a('function')
    })
  })

  describe('`Fieldset`', () => {
    it('is a function', () => {
      expect(Fieldset)
        .to.be.a('function')
    })
  })
})

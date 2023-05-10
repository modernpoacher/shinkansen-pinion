import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  CheckAnswers,
  ErrorSummary,
  Fieldset
} from 'shinkansen-pinion/components'

chai.use(sinonChai)

describe('shinkansen-pinion/components', () => {
  describe('`CheckAnswers`', () => {
    it('is a function', () => {
      return expect(CheckAnswers)
        .to.be.a('function')
    })
  })

  describe('`ErrorSummary`', () => {
    it('is a function', () => {
      return expect(ErrorSummary)
        .to.be.a('function')
    })
  })

  describe('`Fieldset`', () => {
    it('is a function', () => {
      return expect(Fieldset)
        .to.be.a('function')
    })
  })
})

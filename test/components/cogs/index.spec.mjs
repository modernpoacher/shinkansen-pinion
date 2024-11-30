import { expect } from 'chai'

import {
  RadioCog,
  SelectCog,
  TextCog
} from 'shinkansen-pinion/components/cogs'

describe('shinkansen-pinion/components/cogs', () => {
  describe('`RadioCog`', () => {
    it('is a function', () => {
      return expect(RadioCog)
        .to.be.a('function')
    })
  })

  describe('`SelectCog`', () => {
    it('is a function', () => {
      return expect(SelectCog)
        .to.be.a('function')
    })
  })

  describe('`TextCog`', () => {
    it('is a function', () => {
      return expect(TextCog)
        .to.be.a('function')
    })
  })
})

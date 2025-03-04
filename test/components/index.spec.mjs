import {
  expect
} from 'chai'

import {
  Cogs,
  Sprockets
} from '#pinion/components'

describe('#pinion/components', () => {
  describe('`Cogs`', () => {
    it('is a module', () => {
      expect(Cogs)
        .to.be.a('module')
    })
  })

  describe('`Sprockets`', () => {
    it('is a module', () => {
      expect(Sprockets)
        .to.be.a('module')
    })
  })
})

import {
  expect
} from 'chai'

import {
  meta,
  elements
} from '#pinion/common'

describe('#pinion/common', () => {
  describe('`meta`', () => {
    it('is a module', () => {
      expect(meta)
        .to.be.a('module')
    })
  })

  describe('`elements`', () => {
    it('is a module', () => {
      expect(elements)
        .to.be.a('module')
    })
  })
})

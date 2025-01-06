import {
  expect
} from 'chai'

import * as common from 'shinkansen-pinion/transformers/common'

describe('shinkansen-pinion/transformers/common', () => {
  it('is a module', () => {
    return expect(common)
      .to.be.a('module')
  })
})

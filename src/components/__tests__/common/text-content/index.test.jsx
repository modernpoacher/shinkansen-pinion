import React from 'react'
import renderer from 'react-test-renderer'

import Component from 'shinkansen-pinion/components/common/text-content'

describe('shinkansen-pinion/components/common/text-content', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const component = (
          <Component
            textContent='MOCK TEXT CONTENT'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})

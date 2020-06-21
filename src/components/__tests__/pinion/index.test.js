import React from 'react'
import renderer from 'react-test-renderer'

import Component from 'shinkansen-pinion/components/pinion'

import STRING_STRING from './string-string'
import STRING_STRING_ENUM from './string-string-enum'
import STRING_STRING_ANY_OF from './string-string-any-of'
import STRING_STRING_ONE_OF from './string-string-one-of'
import STRING_STRING_ALL_OF from './string-string-all-of'

import NUMBER_NUMBER from './number-number'
import NUMBER_NUMBER_ENUM from './number-number-enum'
import NUMBER_NUMBER_ANY_OF from './number-number-any-of'
import NUMBER_NUMBER_ONE_OF from './number-number-one-of'
import NUMBER_NUMBER_ALL_OF from './number-number-all-of'

import OBJECT_ARRAY_STRING from './object-array-string'
import OBJECT_ARRAY_NUMBER from './object-array-number'
import OBJECT_ARRAY_BOOLEAN from './object-array-boolean'
import OBJECT_ARRAY_NULL from './object-array-null'

import ARRAY_ARRAY_STRING from './array-array-string'
import ARRAY_ARRAY_STRING_ENUM from './array-array-string-enum'
import ARRAY_ARRAY_STRING_ANY_OF from './array-array-string-any-of'
import ARRAY_ARRAY_STRING_ONE_OF from './array-array-string-one-of'

import ARRAY_ARRAY_NUMBER from './array-array-number'
import ARRAY_ARRAY_NUMBER_ENUM from './array-array-number-enum'
import ARRAY_ARRAY_NUMBER_ANY_OF from './array-array-number-any-of'
import ARRAY_ARRAY_NUMBER_ONE_OF from './array-array-number-one-of'

import ARRAY_ARRAY_OBJECT from './array-array-object'
import ARRAY_ARRAY_ARRAY from './array-array-array'
import ARRAY_ARRAY_BOOLEAN from './array-array-boolean'
import ARRAY_ARRAY_NULL from './array-array-null'

import BOOLEAN_BOOLEAN from './boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from './boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from './boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from './boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from './boolean-boolean-all-of'

import NULL_NULL from './null-null'
import NULL_NULL_ENUM from './null-null-enum'
import NULL_NULL_ANY_OF from './null-null-any-of'
import NULL_NULL_ONE_OF from './null-null-one-of'
import NULL_NULL_ALL_OF from './null-null-all-of'

describe('shinkansen-pinion/components/pinion', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const component = (
          <Component
            pinion={{ meta: {}, elements: { title: 'MOCK TITLE', field: { id: 'MOCK ID' } } }}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders `STRING_STRING`', () => {
        const component = (
          <Component
            pinion={STRING_STRING}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ALL_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ALL_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ALL_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_STRING}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NUMBER}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_BOOLEAN}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NULL}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_OBJECT`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_OBJECT}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_ARRAY`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_ARRAY}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_BOOLEAN}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NULL}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ENUM`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ANY_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ONE_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ALL_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ALL_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL`', () => {
        const component = (
          <Component
            pinion={NULL_NULL}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ENUM`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ENUM}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ANY_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ONE_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ALL_OF}
            params={{}}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})

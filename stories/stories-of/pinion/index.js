// import React from 'react'

import { storiesOf } from '@storybook/react'

import toPinion from 'shinkansen-pinion'

import STRING_STRING from 'stories/definitions/string-string'
import STRING_STRING_ENUM from 'stories/definitions/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/string-string-all-of'

import NUMBER_NUMBER from 'stories/definitions/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/number-number-all-of'

import OBJECT_OBJECT_STRING from 'stories/definitions/object-object-string'
import OBJECT_OBJECT_NUMBER from 'stories/definitions/object-object-number'
import OBJECT_OBJECT_OBJECT from 'stories/definitions/object-object-object'
import OBJECT_OBJECT_ARRAY_OBJECT from 'stories/definitions/object-object-array-object'
import OBJECT_OBJECT_ARRAY_ARRAY from 'stories/definitions/object-object-array-array'
import OBJECT_OBJECT_BOOLEAN from 'stories/definitions/object-object-boolean'
import OBJECT_OBJECT_NULL from 'stories/definitions/object-object-null'

import ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/array-array-object-string-one-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/array-array-object-number-one-of'

import ARRAY_ARRAY_OBJECT_OBJECT from 'stories/definitions/array-array-object-object'
import ARRAY_ARRAY_OBJECT_ARRAY from 'stories/definitions/array-array-object-array'
import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/array-array-object-null'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/array-array-array-string-one-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/array-array-array-number-one-of'

import ARRAY_ARRAY_ARRAY_OBJECT from 'stories/definitions/array-array-array-object'
import ARRAY_ARRAY_ARRAY_ARRAY from 'stories/definitions/array-array-array-array'
import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/array-array-array-null'

import BOOLEAN_BOOLEAN from 'stories/definitions/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/boolean-boolean-all-of'

import NULL_NULL from 'stories/definitions/null-null'
import NULL_NULL_ENUM from 'stories/definitions/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/null-null-all-of'

storiesOf('Pinion', module)
  .add('String - String', () => toPinion(STRING_STRING, 'string'))
  .add('String - String - Enum', () => toPinion(STRING_STRING_ENUM, 'Three'))
  .add('String - String - Any Of', () => toPinion(STRING_STRING_ANY_OF, 'three'))
  .add('String - String - One Of', () => toPinion(STRING_STRING_ONE_OF, 'three'))
  .add('String - String - All Of', () => toPinion(STRING_STRING_ALL_OF, 'string'))

  .add('Number - Number', () => toPinion(NUMBER_NUMBER, 1))
  .add('Number - Number - Enum', () => toPinion(NUMBER_NUMBER_ENUM, 3))
  .add('Number - Number - Any Of', () => toPinion(NUMBER_NUMBER_ANY_OF, 3))
  .add('Number - Number - One Of', () => toPinion(NUMBER_NUMBER_ONE_OF, 3))
  .add('Number - Number - All Of', () => toPinion(NUMBER_NUMBER_ALL_OF, 1))

  .add('Object - String', () => toPinion(OBJECT_OBJECT_STRING, { string: 'string' }))
  .add('Object - Number', () => toPinion(OBJECT_OBJECT_NUMBER, { number: 1 }))
  .add('Object - Object', () => toPinion(OBJECT_OBJECT_OBJECT, { string: 'string', number: 1, boolean: true, null: null }))
  .add('Object - Array (Items is an object)', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT, { array: ['string (1)', 'string (2)', 'string (3)'] }))
  .add('Object - Array (Items is an array)', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY, { array: ['string', 1, true, null] }))
  .add('Object - Boolean', () => toPinion(OBJECT_OBJECT_BOOLEAN, { boolean: true }))
  .add('Object - Null', () => toPinion(OBJECT_OBJECT_NULL, { null: null }))

  .add('Array - Array (Items is an object) - String', () => toPinion(ARRAY_ARRAY_OBJECT_STRING, ['string']))
  .add('Array - Array (Items is an object) - String - Enum', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ENUM, ['Three']))
  .add('Array - Array (Items is an object) - String - Any Of', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, ['three']))
  .add('Array - Array (Items is an object) - String - One Of', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, ['three']))

  .add('Array - Array (Items is an object) - Number', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER, [1]))
  .add('Array - Array (Items is an object) - Number - Enum', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, [3]))
  .add('Array - Array (Items is an object) - Number - Any Of', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, [3]))
  .add('Array - Array (Items is an object) - Number - One Of', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, [3]))

  .add('Array - Array (Items is an object) - Object', () => toPinion(ARRAY_ARRAY_OBJECT_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }]))
  .add('Array - Array (Items is an object) - Array', () => toPinion(ARRAY_ARRAY_OBJECT_ARRAY, [['string', 1, true, null]]))
  .add('Array - Array (Items is an object) - Boolean', () => toPinion(ARRAY_ARRAY_OBJECT_BOOLEAN, [true]))
  .add('Array - Array (Items is an object) - Null', () => toPinion(ARRAY_ARRAY_OBJECT_NULL, [null]))

  .add('Array - Array (Items is an array) - String', () => toPinion(ARRAY_ARRAY_ARRAY_STRING, ['string']))
  .add('Array - Array (Items is an array) - String - Enum', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ENUM, ['Three']))
  .add('Array - Array (Items is an array) - String - Any Of', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, ['three']))
  .add('Array - Array (Items is an array) - String - One Of', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, ['three']))

  .add('Array - Array (Items is an array) - Number', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER, [1]))
  .add('Array - Array (Items is an array) - Number - Enum', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, [3]))
  .add('Array - Array (Items is an array) - Number - Any Of', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, [3]))
  .add('Array - Array (Items is an array) - Number - One Of', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, [3]))

  .add('Array - Array (Items is an array) - Object', () => toPinion(ARRAY_ARRAY_ARRAY_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }]))
  .add('Array - Array (Items is an array) - Array', () => toPinion(ARRAY_ARRAY_ARRAY_ARRAY, [['string', 1, true, null]]))
  .add('Array - Array (Items is an array) - Boolean', () => toPinion(ARRAY_ARRAY_ARRAY_BOOLEAN, [true]))
  .add('Array - Array (Items is an array) - Null', () => toPinion(ARRAY_ARRAY_ARRAY_NULL, [null]))

  .add('Boolean - Boolean', () => toPinion(BOOLEAN_BOOLEAN, true))
  .add('Boolean - Boolean - Enum', () => toPinion(BOOLEAN_BOOLEAN_ENUM, false))
  .add('Boolean - Boolean - Any Of', () => toPinion(BOOLEAN_BOOLEAN_ANY_OF, false))
  .add('Boolean - Boolean - One Of', () => toPinion(BOOLEAN_BOOLEAN_ONE_OF, false))
  .add('Boolean - Boolean - All Of', () => toPinion(BOOLEAN_BOOLEAN_ALL_OF, true))

  .add('Null - Null', () => toPinion(NULL_NULL, null))
  .add('Null - Null - Enum', () => toPinion(NULL_NULL_ENUM, null))
  .add('Null - Null - Any Of', () => toPinion(NULL_NULL_ANY_OF, null))
  .add('Null - Null - One Of', () => toPinion(NULL_NULL_ONE_OF, null))
  .add('Null - Null - All Of', () => toPinion(NULL_NULL_ALL_OF, null))

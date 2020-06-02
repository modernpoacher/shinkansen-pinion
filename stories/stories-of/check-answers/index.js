// import React from 'react'

import { storiesOf } from '@storybook/react'

import toCheckAnswers from 'shinkansen-pinion/to-check-answers'

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

const RESOURCE = {
  alpha: 'alpha',
  omega: 'omega'
}

storiesOf('Check Answers', module)
  .add('String - String', () => toCheckAnswers('String - String', STRING_STRING, 'string', RESOURCE))
  .add('String - String - Enum', () => toCheckAnswers('String - String - Enum', STRING_STRING_ENUM, 'Three', RESOURCE))
  .add('String - String - Any Of', () => toCheckAnswers('String - String - Any Of', STRING_STRING_ANY_OF, 'three', RESOURCE))
  .add('String - String - One Of', () => toCheckAnswers('String - String - One Of', STRING_STRING_ONE_OF, 'three', RESOURCE))
  .add('String - String - All Of', () => toCheckAnswers('String - String - All Of', STRING_STRING_ALL_OF, 'string', RESOURCE))

  .add('Number - Number', () => toCheckAnswers('Number - Number', NUMBER_NUMBER, 1, RESOURCE))
  .add('Number - Number - Enum', () => toCheckAnswers('Number - Number - Enum', NUMBER_NUMBER_ENUM, 3, RESOURCE))
  .add('Number - Number - Any Of', () => toCheckAnswers('Number - Number - Any Of', NUMBER_NUMBER_ANY_OF, 3, RESOURCE))
  .add('Number - Number - One Of', () => toCheckAnswers('Number - Number - One Of', NUMBER_NUMBER_ONE_OF, 3, RESOURCE))
  .add('Number - Number - All Of', () => toCheckAnswers('Number - Number - All Of', NUMBER_NUMBER_ALL_OF, 1, RESOURCE))

  .add('Object - String', () => toCheckAnswers('Object - String', OBJECT_OBJECT_STRING, { string: 'string' }, RESOURCE))
  .add('Object - Number', () => toCheckAnswers('Object - Number', OBJECT_OBJECT_NUMBER, { number: 1 }, RESOURCE))
  .add('Object - Object', () => toCheckAnswers('Object - Object', OBJECT_OBJECT_OBJECT, { string: 'string', number: 1, boolean: true, null: null }, RESOURCE))
  .add('Object - Array (Items is an object)', () => toCheckAnswers('Object - Array (Items is an object)', OBJECT_OBJECT_ARRAY_OBJECT, { array: ['string (1)', 'string (2)', 'string (3)'] }, RESOURCE))
  .add('Object - Array (Items is an array)', () => toCheckAnswers('Object - Array (Items is an array)', OBJECT_OBJECT_ARRAY_ARRAY, { array: ['string', 1, true, null] }, RESOURCE))
  .add('Object - Boolean', () => toCheckAnswers('Object - Boolean', OBJECT_OBJECT_BOOLEAN, { boolean: true }, RESOURCE))
  .add('Object - Null', () => toCheckAnswers('Object - Null', OBJECT_OBJECT_NULL, { null: null }, RESOURCE))

  .add('Array - Array (Items is an object) - String', () => toCheckAnswers('Array - Array (Items is an object) - String', ARRAY_ARRAY_OBJECT_STRING, ['string'], RESOURCE))
  .add('Array - Array (Items is an object) - String - Enum', () => toCheckAnswers('Array - Array (Items is an object) - String - Enum', ARRAY_ARRAY_OBJECT_STRING_ENUM, ['Three'], RESOURCE))
  .add('Array - Array (Items is an object) - String - Any Of', () => toCheckAnswers('Array - Array (Items is an object) - String - Any Of', ARRAY_ARRAY_OBJECT_STRING_ANY_OF, ['three'], RESOURCE))
  .add('Array - Array (Items is an object) - String - One Of', () => toCheckAnswers('Array - Array (Items is an object) - String - One Of', ARRAY_ARRAY_OBJECT_STRING_ONE_OF, ['three'], RESOURCE))

  .add('Array - Array (Items is an object) - Number', () => toCheckAnswers('Array - Array (Items is an object) - Number', ARRAY_ARRAY_OBJECT_NUMBER, [1], RESOURCE))
  .add('Array - Array (Items is an object) - Number - Enum', () => toCheckAnswers('Array - Array (Items is an object) - Number - Enum', ARRAY_ARRAY_OBJECT_NUMBER_ENUM, [3], RESOURCE))
  .add('Array - Array (Items is an object) - Number - Any Of', () => toCheckAnswers('Array - Array (Items is an object) - Number - Any Of', ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, [3], RESOURCE))
  .add('Array - Array (Items is an object) - Number - One Of', () => toCheckAnswers('Array - Array (Items is an object) - Number - One Of', ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, [3], RESOURCE))

  .add('Array - Array (Items is an object) - Object', () => toCheckAnswers('Array - Array (Items is an object) - Object', ARRAY_ARRAY_OBJECT_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }], RESOURCE))
  .add('Array - Array (Items is an object) - Array', () => toCheckAnswers('Array - Array (Items is an object) - Array', ARRAY_ARRAY_OBJECT_ARRAY, [['string', 1, true, null]], RESOURCE))
  .add('Array - Array (Items is an object) - Boolean', () => toCheckAnswers('Array - Array (Items is an object) - Boolean', ARRAY_ARRAY_OBJECT_BOOLEAN, [true], RESOURCE))
  .add('Array - Array (Items is an object) - Null', () => toCheckAnswers('Array - Array (Items is an object) - Null', ARRAY_ARRAY_OBJECT_NULL, [null], RESOURCE))

  .add('Array - Array (Items is an array) - String', () => toCheckAnswers('Array - Array (Items is an array) - String', ARRAY_ARRAY_ARRAY_STRING, ['string'], RESOURCE))
  .add('Array - Array (Items is an array) - String - Enum', () => toCheckAnswers('Array - Array (Items is an array) - String - Enum', ARRAY_ARRAY_ARRAY_STRING_ENUM, ['Three'], RESOURCE))
  .add('Array - Array (Items is an array) - String - Any Of', () => toCheckAnswers('Array - Array (Items is an array) - String - Any Of', ARRAY_ARRAY_ARRAY_STRING_ANY_OF, ['three'], RESOURCE))
  .add('Array - Array (Items is an array) - String - One Of', () => toCheckAnswers('Array - Array (Items is an array) - String - One Of', ARRAY_ARRAY_ARRAY_STRING_ONE_OF, ['three'], RESOURCE))

  .add('Array - Array (Items is an array) - Number', () => toCheckAnswers('Array - Array (Items is an array) - Number', ARRAY_ARRAY_ARRAY_NUMBER, [1], RESOURCE))
  .add('Array - Array (Items is an array) - Number - Enum', () => toCheckAnswers('Array - Array (Items is an array) - Number - Enum', ARRAY_ARRAY_ARRAY_NUMBER_ENUM, [3], RESOURCE))
  .add('Array - Array (Items is an array) - Number - Any Of', () => toCheckAnswers('Array - Array (Items is an array) - Number - Any Of', ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, [3], RESOURCE))
  .add('Array - Array (Items is an array) - Number - One Of', () => toCheckAnswers('Array - Array (Items is an array) - Number - One Of', ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, [3], RESOURCE))

  .add('Array - Array (Items is an array) - Object', () => toCheckAnswers('Array - Array (Items is an array) - Object', ARRAY_ARRAY_ARRAY_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }], RESOURCE))
  .add('Array - Array (Items is an array) - Array', () => toCheckAnswers('Array - Array (Items is an array) - Array', ARRAY_ARRAY_ARRAY_ARRAY, [['string', 1, true, null]], RESOURCE))
  .add('Array - Array (Items is an array) - Boolean', () => toCheckAnswers('Array - Array (Items is an array) - Boolean', ARRAY_ARRAY_ARRAY_BOOLEAN, [true], RESOURCE))
  .add('Array - Array (Items is an array) - Null', () => toCheckAnswers('Array - Array (Items is an array) - Null', ARRAY_ARRAY_ARRAY_NULL, [null], RESOURCE))

  .add('Boolean - Boolean', () => toCheckAnswers('Boolean - Boolean', BOOLEAN_BOOLEAN, true, RESOURCE))
  .add('Boolean - Boolean - Enum', () => toCheckAnswers('Boolean - Boolean - Enum', BOOLEAN_BOOLEAN_ENUM, false, RESOURCE))
  .add('Boolean - Boolean - Any Of', () => toCheckAnswers('Boolean - Boolean - Any Of', BOOLEAN_BOOLEAN_ANY_OF, false, RESOURCE))
  .add('Boolean - Boolean - One Of', () => toCheckAnswers('Boolean - Boolean - One Of', BOOLEAN_BOOLEAN_ONE_OF, false, RESOURCE))
  .add('Boolean - Boolean - All Of', () => toCheckAnswers('Boolean - Boolean - All Of', BOOLEAN_BOOLEAN_ALL_OF, true, RESOURCE))

  .add('Null - Null', () => toCheckAnswers('Null - Null', NULL_NULL, null, RESOURCE))
  .add('Null - Null - Enum', () => toCheckAnswers('Null - Null - Enum', NULL_NULL_ENUM, null, RESOURCE))
  .add('Null - Null - Any Of', () => toCheckAnswers('Null - Null - Any Of', NULL_NULL_ANY_OF, null, RESOURCE))
  .add('Null - Null - One Of', () => toCheckAnswers('Null - Null - One Of', NULL_NULL_ONE_OF, null, RESOURCE))
  .add('Null - Null - All Of', () => toCheckAnswers('Null - Null - All Of', NULL_NULL_ALL_OF, null, RESOURCE))

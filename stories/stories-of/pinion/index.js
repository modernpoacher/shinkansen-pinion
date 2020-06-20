// import React from 'react'

import { storiesOf } from '@storybook/react'
import StorybookReactRouter from 'storybook-react-router'

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

import OBJECT_OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/object-object-array-object-string'
import OBJECT_OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/object-object-array-object-number'
import OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/object-object-array-object-boolean'
import OBJECT_OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/object-object-array-object-null'

import OBJECT_OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/object-object-array-array-string'
import OBJECT_OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/object-object-array-array-number'
import OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/object-object-array-array-boolean'
import OBJECT_OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/object-object-array-array-null'

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
  .addDecorator(StorybookReactRouter())

  .add('String - String', () => toPinion(STRING_STRING, 'string'))
  .add('String - String (Error)', () => toPinion(STRING_STRING, 'string', {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('String - String - Enum', () => toPinion(STRING_STRING_ENUM, 'Three'))
  .add('String - String - Enum (Error)', () => toPinion(STRING_STRING_ENUM, 'Three', {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('String - String - Any Of', () => toPinion(STRING_STRING_ANY_OF, 'three'))
  .add('String - String - Any Of (Error)', () => toPinion(STRING_STRING_ANY_OF, 'three', {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('String - String - One Of', () => toPinion(STRING_STRING_ONE_OF, 'three'))
  .add('String - String - One Of (Error)', () => toPinion(STRING_STRING_ONE_OF, 'three', {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('String - String - All Of', () => toPinion(STRING_STRING_ALL_OF, 'string'))
  .add('String - String - All Of (Error)', () => toPinion(STRING_STRING_ALL_OF, 'string', {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))

  .add('Number - Number', () => toPinion(NUMBER_NUMBER, 1))
  .add('Number - Number (Error)', () => toPinion(NUMBER_NUMBER, 1, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Number - Number - Enum', () => toPinion(NUMBER_NUMBER_ENUM, 3))
  .add('Number - Number - Enum (Error)', () => toPinion(NUMBER_NUMBER_ENUM, 3, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Number - Number - Any Of', () => toPinion(NUMBER_NUMBER_ANY_OF, 3))
  .add('Number - Number - Any Of (Error)', () => toPinion(NUMBER_NUMBER_ANY_OF, 3, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Number - Number - One Of', () => toPinion(NUMBER_NUMBER_ONE_OF, 3))
  .add('Number - Number - One Of (Error)', () => toPinion(NUMBER_NUMBER_ONE_OF, 3, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Number - Number - All Of', () => toPinion(NUMBER_NUMBER_ALL_OF, 1))
  .add('Number - Number - All Of (Error)', () => toPinion(NUMBER_NUMBER_ALL_OF, 1, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))

  .add('Object - String', () => toPinion(OBJECT_OBJECT_STRING, { string: 'string' }))
  .add('Object - String (Error)', () => toPinion(OBJECT_OBJECT_STRING, { string: 'string' }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/string' }]))

  .add('Object - Number', () => toPinion(OBJECT_OBJECT_NUMBER, { number: 1 }))
  .add('Object - Number (Error)', () => toPinion(OBJECT_OBJECT_NUMBER, { number: 1 }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/number' }]))

  .add('Object - Object', () => toPinion(OBJECT_OBJECT_OBJECT, { string: 'string', number: 1, boolean: true, null: null }))
  .add('Object - Object (Error)', () => toPinion(OBJECT_OBJECT_OBJECT, { string: 'string', number: 1, boolean: true, null: null }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/object/string' }, { type: 'UNKNOWN', params: {}, uri: '#/object/number' }, { type: 'UNKNOWN', params: {}, uri: '#/object/boolean' }, { type: 'UNKNOWN', params: {}, uri: '#/object/null' }]))

  .add('Object - Array (Items is an object) - String', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_STRING, { array: ['string'] }))
  .add('Object - Array (Items is an object) - String (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_STRING, { array: ['string'] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an object) - Number', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_NUMBER, { array: [1] }))
  .add('Object - Array (Items is an object) - Number (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_NUMBER, { array: [1] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an object) - Boolean', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN, { array: [true] }))
  .add('Object - Array (Items is an object) - Boolean (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN, { array: [true] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an object) - Null', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_NULL, { array: [null] }))
  .add('Object - Array (Items is an object) - Null (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_OBJECT_NULL, { array: [null] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an array) - String', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_STRING, { array: ['string'] }))
  .add('Object - Array (Items is an array) - String (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_STRING, { array: ['string'] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an array) - Number', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_NUMBER, { array: [1] }))
  .add('Object - Array (Items is an array) - Number (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_NUMBER, { array: [1] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an array) - Boolean', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN, { array: [true] }))
  .add('Object - Array (Items is an array) - Boolean (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN, { array: [true] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Array (Items is an array) - Null', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_NULL, { array: [null] }))
  .add('Object - Array (Items is an array) - Null (Error)', () => toPinion(OBJECT_OBJECT_ARRAY_ARRAY_NULL, { array: [null] }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }]))

  .add('Object - Boolean', () => toPinion(OBJECT_OBJECT_BOOLEAN, { boolean: true }))
  .add('Object - Boolean (Error)', () => toPinion(OBJECT_OBJECT_BOOLEAN, { boolean: true }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }]))

  .add('Object - Null', () => toPinion(OBJECT_OBJECT_NULL, { null: null }))
  .add('Object - Null (Error)', () => toPinion(OBJECT_OBJECT_NULL, { null: null }, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/null' }]))

  .add('Array - Array (Items is an object) - String', () => toPinion(ARRAY_ARRAY_OBJECT_STRING, ['string']))
  .add('Array - Array (Items is an object) - String (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_STRING, ['string'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - String - Enum', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ENUM, ['Three']))
  .add('Array - Array (Items is an object) - String - Enum (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ENUM, ['Three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - String - Any Of', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, ['three']))
  .add('Array - Array (Items is an object) - String - Any Of (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, ['three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - String - One Of', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, ['three']))
  .add('Array - Array (Items is an object) - String - One Of (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, ['three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Array - Array (Items is an object) - Number', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER, [1]))
  .add('Array - Array (Items is an object) - Number (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER, [1], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - Number - Enum', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, [3]))
  .add('Array - Array (Items is an object) - Number - Enum (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - Number - Any Of', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, [3]))
  .add('Array - Array (Items is an object) - Number - Any Of (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - Number - One Of', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, [3]))
  .add('Array - Array (Items is an object) - Number - One Of (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Array - Array (Items is an object) - Object', () => toPinion(ARRAY_ARRAY_OBJECT_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }]))
  .add('Array - Array (Items is an object) - Object (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0/string' }, { type: 'UNKNOWN', params: {}, uri: '#/0/number' }, { type: 'UNKNOWN', params: {}, uri: '#/0/boolean' }, { type: 'UNKNOWN', params: {}, uri: '#/0/null' }]))
  .add('Array - Array (Items is an object) - Array', () => toPinion(ARRAY_ARRAY_OBJECT_ARRAY, [['string', 1, true, null]]))
  .add('Array - Array (Items is an object) - Array (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_ARRAY, [['string', 1, true, null]], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0/0' }, { type: 'UNKNOWN', params: {}, uri: '#/0/1' }, { type: 'UNKNOWN', params: {}, uri: '#/0/2' }, { type: 'UNKNOWN', params: {}, uri: '#/0/3' }]))
  .add('Array - Array (Items is an object) - Boolean', () => toPinion(ARRAY_ARRAY_OBJECT_BOOLEAN, [true]))
  .add('Array - Array (Items is an object) - Boolean (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_BOOLEAN, [true], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an object) - Null', () => toPinion(ARRAY_ARRAY_OBJECT_NULL, [null]))
  .add('Array - Array (Items is an object) - Null (Error)', () => toPinion(ARRAY_ARRAY_OBJECT_NULL, [null], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Array - Array (Items is an array) - String', () => toPinion(ARRAY_ARRAY_ARRAY_STRING, ['string']))
  .add('Array - Array (Items is an array) - String (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_STRING, ['string'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - String - Enum', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ENUM, ['Three']))
  .add('Array - Array (Items is an array) - String - Enum (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ENUM, ['Three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - String - Any Of', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, ['three']))
  .add('Array - Array (Items is an array) - String - Any Of (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, ['three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - String - One Of', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, ['three']))
  .add('Array - Array (Items is an array) - String - One Of (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, ['three'], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Array - Array (Items is an array) - Number', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER, [1]))
  .add('Array - Array (Items is an array) - Number (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER, [1], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - Number - Enum', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, [3]))
  .add('Array - Array (Items is an array) - Number - Enum (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - Number - Any Of', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, [3]))
  .add('Array - Array (Items is an array) - Number - Any Of (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - Number - One Of', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, [3]))
  .add('Array - Array (Items is an array) - Number - One Of (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, [3], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Array - Array (Items is an array) - Object', () => toPinion(ARRAY_ARRAY_ARRAY_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }]))
  .add('Array - Array (Items is an array) - Object (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_OBJECT, [{ string: 'string', number: 1, boolean: true, null: null }], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0/string' }, { type: 'UNKNOWN', params: {}, uri: '#/0/number' }, { type: 'UNKNOWN', params: {}, uri: '#/0/boolean' }, { type: 'UNKNOWN', params: {}, uri: '#/0/null' }]))
  .add('Array - Array (Items is an array) - Array', () => toPinion(ARRAY_ARRAY_ARRAY_ARRAY, [['string', 1, true, null]]))
  .add('Array - Array (Items is an array) - Array (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_ARRAY, [['string', 1, true, null]], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0/0' }, { type: 'UNKNOWN', params: {}, uri: '#/0/1' }, { type: 'UNKNOWN', params: {}, uri: '#/0/2' }, { type: 'UNKNOWN', params: {}, uri: '#/0/3' }]))
  .add('Array - Array (Items is an array) - Boolean', () => toPinion(ARRAY_ARRAY_ARRAY_BOOLEAN, [true]))
  .add('Array - Array (Items is an array) - Boolean (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_BOOLEAN, [true], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))
  .add('Array - Array (Items is an array) - Null', () => toPinion(ARRAY_ARRAY_ARRAY_NULL, [null]))
  .add('Array - Array (Items is an array) - Null (Error)', () => toPinion(ARRAY_ARRAY_ARRAY_NULL, [null], {}, [{ type: 'UNKNOWN', params: {}, uri: '#/0' }]))

  .add('Boolean - Boolean', () => toPinion(BOOLEAN_BOOLEAN, true))
  .add('Boolean - Boolean (Error)', () => toPinion(BOOLEAN_BOOLEAN, true, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Boolean - Boolean - Enum', () => toPinion(BOOLEAN_BOOLEAN_ENUM, false))
  .add('Boolean - Boolean - Enum (Error)', () => toPinion(BOOLEAN_BOOLEAN_ENUM, false, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Boolean - Boolean - Any Of', () => toPinion(BOOLEAN_BOOLEAN_ANY_OF, false))
  .add('Boolean - Boolean - Any Of (Error)', () => toPinion(BOOLEAN_BOOLEAN_ANY_OF, false, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Boolean - Boolean - One Of', () => toPinion(BOOLEAN_BOOLEAN_ONE_OF, false))
  .add('Boolean - Boolean - One Of (Error)', () => toPinion(BOOLEAN_BOOLEAN_ONE_OF, false, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Boolean - Boolean - All Of', () => toPinion(BOOLEAN_BOOLEAN_ALL_OF, true))
  .add('Boolean - Boolean - All Of (Error)', () => toPinion(BOOLEAN_BOOLEAN_ALL_OF, true, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))

  .add('Null - Null', () => toPinion(NULL_NULL, null))
  .add('Null - Null (Error)', () => toPinion(NULL_NULL, null, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Null - Null - Enum', () => toPinion(NULL_NULL_ENUM, null))
  .add('Null - Null - Enum (Error)', () => toPinion(NULL_NULL_ENUM, null, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Null - Null - Any Of', () => toPinion(NULL_NULL_ANY_OF, null))
  .add('Null - Null - Any Of (Error)', () => toPinion(NULL_NULL_ANY_OF, null, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Null - Null - One Of', () => toPinion(NULL_NULL_ONE_OF, null))
  .add('Null - Null - One Of (Error)', () => toPinion(NULL_NULL_ONE_OF, null, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))
  .add('Null - Null - All Of', () => toPinion(NULL_NULL_ALL_OF, null))
  .add('Null - Null - All Of (Error)', () => toPinion(NULL_NULL_ALL_OF, null, {}, [{ type: 'UNKNOWN', params: {}, uri: '#/' }]))

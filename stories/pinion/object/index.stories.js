import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import OBJECT_STRING from 'stories/definitions/pinion/object-string'
import OBJECT_STRING_ENUM from 'stories/definitions/pinion/object-string-enum'
import OBJECT_STRING_ANY_OF from 'stories/definitions/pinion/object-string-any-of'
import OBJECT_STRING_ONE_OF from 'stories/definitions/pinion/object-string-one-of'
import OBJECT_STRING_ALL_OF from 'stories/definitions/pinion/object-string-all-of'

import OBJECT_NUMBER from 'stories/definitions/pinion/object-number'
import OBJECT_NUMBER_ENUM from 'stories/definitions/pinion/object-number-enum'
import OBJECT_NUMBER_ANY_OF from 'stories/definitions/pinion/object-number-any-of'
import OBJECT_NUMBER_ONE_OF from 'stories/definitions/pinion/object-number-one-of'
import OBJECT_NUMBER_ALL_OF from 'stories/definitions/pinion/object-number-all-of'

import OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/pinion/object-array-object-string'
import OBJECT_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/pinion/object-array-object-string-enum'
import OBJECT_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/pinion/object-array-object-string-any-of'
import OBJECT_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/pinion/object-array-object-string-one-of'
import OBJECT_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/pinion/object-array-object-string-all-of'

import OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/pinion/object-array-object-number'
import OBJECT_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/pinion/object-array-object-number-enum'
import OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/pinion/object-array-object-number-any-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/pinion/object-array-object-number-one-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/pinion/object-array-object-number-all-of'

import OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/pinion/object-array-object-boolean'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/pinion/object-array-object-boolean-enum'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/pinion/object-array-object-boolean-any-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/pinion/object-array-object-boolean-one-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/pinion/object-array-object-boolean-all-of'

import OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/pinion/object-array-object-null'
import OBJECT_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/pinion/object-array-object-null-enum'
import OBJECT_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/pinion/object-array-object-null-any-of'
import OBJECT_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/pinion/object-array-object-null-one-of'
import OBJECT_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/pinion/object-array-object-null-all-of'

import OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/pinion/object-array-array-string'
import OBJECT_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/pinion/object-array-array-string-enum'
import OBJECT_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/pinion/object-array-array-string-any-of'
import OBJECT_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/pinion/object-array-array-string-one-of'
import OBJECT_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/pinion/object-array-array-string-all-of'

import OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/pinion/object-array-array-number'
import OBJECT_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/pinion/object-array-array-number-enum'
import OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/pinion/object-array-array-number-any-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/pinion/object-array-array-number-one-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/pinion/object-array-array-number-all-of'

import OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/pinion/object-array-array-boolean'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/pinion/object-array-array-boolean-enum'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/pinion/object-array-array-boolean-any-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/pinion/object-array-array-boolean-one-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/pinion/object-array-array-boolean-all-of'

import OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/pinion/object-array-array-null'
import OBJECT_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/pinion/object-array-array-null-enum'
import OBJECT_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/pinion/object-array-array-null-any-of'
import OBJECT_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/pinion/object-array-array-null-one-of'
import OBJECT_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/pinion/object-array-array-null-all-of'

import OBJECT_BOOLEAN from 'stories/definitions/pinion/object-boolean'
import OBJECT_BOOLEAN_ENUM from 'stories/definitions/pinion/object-boolean-enum'
import OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/pinion/object-boolean-any-of'
import OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/pinion/object-boolean-one-of'
import OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/pinion/object-boolean-all-of'

import OBJECT_NULL from 'stories/definitions/pinion/object-null'
import OBJECT_NULL_ENUM from 'stories/definitions/pinion/object-null-enum'
import OBJECT_NULL_ANY_OF from 'stories/definitions/pinion/object-null-any-of'
import OBJECT_NULL_ONE_OF from 'stories/definitions/pinion/object-null-one-of'
import OBJECT_NULL_ALL_OF from 'stories/definitions/pinion/object-null-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Object',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ObjectString = () => (
  <Pinion
    pinion={OBJECT_STRING}
    params={PARAMS}
  />
)

ObjectString.storyName = 'Object - String'
ObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringError = () => (
  <Pinion
    pinion={OBJECT_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }}
  />
)

ObjectStringError.storyName = 'Object - String - Error'
ObjectStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringEnum = () => (
  <Pinion
    pinion={OBJECT_STRING_ENUM}
    params={PARAMS}
  />
)

ObjectStringEnum.storyName = 'Object - String - Enum'
ObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringEnumError = () => (
  <Pinion
    pinion={OBJECT_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }}
  />
)

ObjectStringEnumError.storyName = 'Object - String - Enum - Error'
ObjectStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAnyOf = () => (
  <Pinion
    pinion={OBJECT_STRING_ANY_OF}
    params={PARAMS}
  />
)

ObjectStringAnyOf.storyName = 'Object - String - Any Of'
ObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAnyOfError = () => (
  <Pinion
    pinion={OBJECT_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }}
  />
)

ObjectStringAnyOfError.storyName = 'Object - String - Any Of - Error'
ObjectStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringOneOf = () => (
  <Pinion
    pinion={OBJECT_STRING_ONE_OF}
    params={PARAMS}
  />
)

ObjectStringOneOf.storyName = 'Object - String - One Of'
ObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringOneOfError = () => (
  <Pinion
    pinion={OBJECT_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }}
  />
)

ObjectStringOneOfError.storyName = 'Object - String - One Of - Error'
ObjectStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAllOf = () => (
  <Pinion
    pinion={OBJECT_STRING_ALL_OF}
    params={PARAMS}
  />
)

ObjectStringAllOf.storyName = 'Object - String - All Of'
ObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAllOfError = () => (
  <Pinion
    pinion={OBJECT_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }}
  />
)

ObjectStringAllOfError.storyName = 'Object - String - All Of - Error'
ObjectStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumber = () => (
  <Pinion
    pinion={OBJECT_NUMBER}
    params={PARAMS}
  />
)

ObjectNumber.storyName = 'Object - Number'
ObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberError = () => (
  <Pinion
    pinion={OBJECT_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }}
  />
)

ObjectNumberError.storyName = 'Object - Number - Error'
ObjectNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberEnum = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ENUM}
    params={PARAMS}
  />
)

ObjectNumberEnum.storyName = 'Object - Number - Enum'
ObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberEnumError = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }}
  />
)

ObjectNumberEnumError.storyName = 'Object - Number - Enum - Error'
ObjectNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAnyOf = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

ObjectNumberAnyOf.storyName = 'Object - Number - Any Of'
ObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAnyOfError = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }}
  />
)

ObjectNumberAnyOfError.storyName = 'Object - Number - Any Of - Error'
ObjectNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberOneOf = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

ObjectNumberOneOf.storyName = 'Object - Number - One Of'
ObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberOneOfError = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }}
  />
)

ObjectNumberOneOfError.storyName = 'Object - Number - One Of - Error'
ObjectNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAllOf = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

ObjectNumberAllOf.storyName = 'Object - Number - All Of'
ObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAllOfError = () => (
  <Pinion
    pinion={OBJECT_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }}
  />
)

ObjectNumberAllOfError.storyName = 'Object - Number - All Of - Error'
ObjectNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectString = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectString.storyName = 'Object - Array (Items is an object) - String'
ObjectArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectStringError.storyName = 'Object - Array (Items is an object) - String - Error'
ObjectArrayItemsIsAnObjectStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringEnum.storyName = 'Object - Array (Items is an object) - String - Enum'
ObjectArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectStringEnumError.storyName = 'Object - Array (Items is an object) - String - Enum - Error'
ObjectArrayItemsIsAnObjectStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringAnyOf.storyName = 'Object - Array (Items is an object) - String - Any Of'
ObjectArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectStringAnyOfError.storyName = 'Object - Array (Items is an object) - String - Any Of - Error'
ObjectArrayItemsIsAnObjectStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringOneOf.storyName = 'Object - Array (Items is an object) - String - One Of'
ObjectArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectStringOneOfError.storyName = 'Object - Array (Items is an object) - String - One Of - Error'
ObjectArrayItemsIsAnObjectStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringAllOf.storyName = 'Object - Array (Items is an object) - String - All Of'
ObjectArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectStringAllOfError.storyName = 'Object - Array (Items is an object) - String - All Of - Error'
ObjectArrayItemsIsAnObjectStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumber = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumber.storyName = 'Object - Array (Items is an object) - Number'
ObjectArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNumberError.storyName = 'Object - Array (Items is an object) - Number - Error'
ObjectArrayItemsIsAnObjectNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberEnum.storyName = 'Object - Array (Items is an object) - Number - Enum'
ObjectArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNumberEnumError.storyName = 'Object - Array (Items is an object) - Number - Enum - Error'
ObjectArrayItemsIsAnObjectNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberAnyOf.storyName = 'Object - Array (Items is an object) - Number - Any Of'
ObjectArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNumberAnyOfError.storyName = 'Object - Array (Items is an object) - Number - Any Of - Error'
ObjectArrayItemsIsAnObjectNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberOneOf.storyName = 'Object - Array (Items is an object) - Number - One Of'
ObjectArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNumberOneOfError.storyName = 'Object - Array (Items is an object) - Number - One Of - Error'
ObjectArrayItemsIsAnObjectNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberAllOf.storyName = 'Object - Array (Items is an object) - Number - All Of'
ObjectArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNumberAllOfError.storyName = 'Object - Array (Items is an object) - Number - All Of - Error'
ObjectArrayItemsIsAnObjectNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBoolean = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBoolean.storyName = 'Object - Array (Items is an object) - Boolean'
ObjectArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectBooleanError.storyName = 'Object - Array (Items is an object) - Boolean - Error'
ObjectArrayItemsIsAnObjectBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanEnum.storyName = 'Object - Array (Items is an object) - Boolean - Enum'
ObjectArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectBooleanEnumError.storyName = 'Object - Array (Items is an object) - Boolean - Enum - Error'
ObjectArrayItemsIsAnObjectBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Object - Array (Items is an object) - Boolean - Any Of'
ObjectArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectBooleanAnyOfError.storyName = 'Object - Array (Items is an object) - Boolean - Any Of - Error'
ObjectArrayItemsIsAnObjectBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanOneOf.storyName = 'Object - Array (Items is an object) - Boolean - One Of'
ObjectArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectBooleanOneOfError.storyName = 'Object - Array (Items is an object) - Boolean - One Of - Error'
ObjectArrayItemsIsAnObjectBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAllOf.storyName = 'Object - Array (Items is an object) - Boolean - All Of'
ObjectArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectBooleanAllOfError.storyName = 'Object - Array (Items is an object) - Boolean - All Of - Error'
ObjectArrayItemsIsAnObjectBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNull = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNull.storyName = 'Object - Array (Items is an object) - Null'
ObjectArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNullError.storyName = 'Object - Array (Items is an object) - Null - Error'
ObjectArrayItemsIsAnObjectNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullEnum.storyName = 'Object - Array (Items is an object) - Null - Enum'
ObjectArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNullEnumError.storyName = 'Object - Array (Items is an object) - Null - Enum - Error'
ObjectArrayItemsIsAnObjectNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullAnyOf.storyName = 'Object - Array (Items is an object) - Null - Any Of'
ObjectArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNullAnyOfError.storyName = 'Object - Array (Items is an object) - Null - Any Of - Error'
ObjectArrayItemsIsAnObjectNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullOneOf.storyName = 'Object - Array (Items is an object) - Null - One Of'
ObjectArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNullOneOfError.storyName = 'Object - Array (Items is an object) - Null - One Of - Error'
ObjectArrayItemsIsAnObjectNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullAllOf.storyName = 'Object - Array (Items is an object) - Null - All Of'
ObjectArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_OBJECT_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnObjectNullAllOfError.storyName = 'Object - Array (Items is an object) - Null - All Of - Error'
ObjectArrayItemsIsAnObjectNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayString = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayString.storyName = 'Object - Array (Items is an array) - String'
ObjectArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayStringError.storyName = 'Object - Array (Items is an array) - String - Error'
ObjectArrayItemsIsAnArrayStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringEnum.storyName = 'Object - Array (Items is an array) - String - Enum'
ObjectArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayStringEnumError.storyName = 'Object - Array (Items is an array) - String - Enum - Error'
ObjectArrayItemsIsAnArrayStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringAnyOf.storyName = 'Object - Array (Items is an array) - String - Any Of'
ObjectArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayStringAnyOfError.storyName = 'Object - Array (Items is an array) - String - Any Of - Error'
ObjectArrayItemsIsAnArrayStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringOneOf.storyName = 'Object - Array (Items is an array) - String - One Of'
ObjectArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayStringOneOfError.storyName = 'Object - Array (Items is an array) - String - One Of - Error'
ObjectArrayItemsIsAnArrayStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringAllOf.storyName = 'Object - Array (Items is an array) - String - All Of'
ObjectArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayStringAllOfError.storyName = 'Object - Array (Items is an array) - String - All Of - Error'
ObjectArrayItemsIsAnArrayStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumber = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumber.storyName = 'Object - Array (Items is an array) - Number'
ObjectArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNumberError.storyName = 'Object - Array (Items is an array) - Number - Error'
ObjectArrayItemsIsAnArrayNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberEnum.storyName = 'Object - Array (Items is an array) - Number - Enum'
ObjectArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNumberEnumError.storyName = 'Object - Array (Items is an array) - Number - Enum - Error'
ObjectArrayItemsIsAnArrayNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberAnyOf.storyName = 'Object - Array (Items is an array) - Number - Any Of'
ObjectArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNumberAnyOfError.storyName = 'Object - Array (Items is an array) - Number - Any Of - Error'
ObjectArrayItemsIsAnArrayNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberOneOf.storyName = 'Object - Array (Items is an array) - Number - One Of'
ObjectArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNumberOneOfError.storyName = 'Object - Array (Items is an array) - Number - One Of - Error'
ObjectArrayItemsIsAnArrayNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberAllOf.storyName = 'Object - Array (Items is an array) - Number - All Of'
ObjectArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNumberAllOfError.storyName = 'Object - Array (Items is an array) - Number - All Of - Error'
ObjectArrayItemsIsAnArrayNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBoolean = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBoolean.storyName = 'Object - Array (Items is an array) - Boolean'
ObjectArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayBooleanError.storyName = 'Object - Array (Items is an array) - Boolean - Error'
ObjectArrayItemsIsAnArrayBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanEnum.storyName = 'Object - Array (Items is an array) - Boolean - Enum'
ObjectArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayBooleanEnumError.storyName = 'Object - Array (Items is an array) - Boolean - Enum - Error'
ObjectArrayItemsIsAnArrayBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Object - Array (Items is an array) - Boolean - Any Of'
ObjectArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayBooleanAnyOfError.storyName = 'Object - Array (Items is an array) - Boolean - Any Of - Error'
ObjectArrayItemsIsAnArrayBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanOneOf.storyName = 'Object - Array (Items is an array) - Boolean - One Of'
ObjectArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayBooleanOneOfError.storyName = 'Object - Array (Items is an array) - Boolean - One Of - Error'
ObjectArrayItemsIsAnArrayBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAllOf.storyName = 'Object - Array (Items is an array) - Boolean - All Of'
ObjectArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayBooleanAllOfError.storyName = 'Object - Array (Items is an array) - Boolean - All Of - Error'
ObjectArrayItemsIsAnArrayBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNull = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNull.storyName = 'Object - Array (Items is an array) - Null'
ObjectArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNullError.storyName = 'Object - Array (Items is an array) - Null - Error'
ObjectArrayItemsIsAnArrayNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullEnum = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ENUM}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullEnum.storyName = 'Object - Array (Items is an array) - Null - Enum'
ObjectArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullEnumError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNullEnumError.storyName = 'Object - Array (Items is an array) - Null - Enum - Error'
ObjectArrayItemsIsAnArrayNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAnyOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ANY_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullAnyOf.storyName = 'Object - Array (Items is an array) - Null - Any Of'
ObjectArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAnyOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNullAnyOfError.storyName = 'Object - Array (Items is an array) - Null - Any Of - Error'
ObjectArrayItemsIsAnArrayNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullOneOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ONE_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullOneOf.storyName = 'Object - Array (Items is an array) - Null - One Of'
ObjectArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullOneOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNullOneOfError.storyName = 'Object - Array (Items is an array) - Null - One Of - Error'
ObjectArrayItemsIsAnArrayNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAllOf = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ALL_OF}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullAllOf.storyName = 'Object - Array (Items is an array) - Null - All Of'
ObjectArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAllOfError = () => (
  <Pinion
    pinion={OBJECT_ARRAY_ARRAY_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }}
  />
)

ObjectArrayItemsIsAnArrayNullAllOfError.storyName = 'Object - Array (Items is an array) - Null - All Of - Error'
ObjectArrayItemsIsAnArrayNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBoolean = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN}
    params={PARAMS}
  />
)

ObjectBoolean.storyName = 'Object - Boolean'
ObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanError = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }}
  />
)

ObjectBooleanError.storyName = 'Object - Boolean - Error'
ObjectBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanEnum = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

ObjectBooleanEnum.storyName = 'Object - Boolean - Enum'
ObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanEnumError = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }}
  />
)

ObjectBooleanEnumError.storyName = 'Object - Boolean - Enum - Error'
ObjectBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAnyOf = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

ObjectBooleanAnyOf.storyName = 'Object - Boolean - Any Of'
ObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAnyOfError = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }}
  />
)

ObjectBooleanAnyOfError.storyName = 'Object - Boolean - Any Of - Error'
ObjectBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanOneOf = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

ObjectBooleanOneOf.storyName = 'Object - Boolean - One Of'
ObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanOneOfError = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }}
  />
)

ObjectBooleanOneOfError.storyName = 'Object - Boolean - One Of - Error'
ObjectBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAllOf = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

ObjectBooleanAllOf.storyName = 'Object - Boolean - All Of'
ObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAllOfError = () => (
  <Pinion
    pinion={OBJECT_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }}
  />
)

ObjectBooleanAllOfError.storyName = 'Object - Boolean - All Of - Error'
ObjectBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNull = () => (
  <Pinion
    pinion={OBJECT_NULL}
    params={PARAMS}
  />
)

ObjectNull.storyName = 'Object - Null'
ObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullError = () => (
  <Pinion
    pinion={OBJECT_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }}
  />
)

ObjectNullError.storyName = 'Object - Null - Error'
ObjectNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullEnum = () => (
  <Pinion
    pinion={OBJECT_NULL_ENUM}
    params={PARAMS}
  />
)

ObjectNullEnum.storyName = 'Object - Null - Enum'
ObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullEnumError = () => (
  <Pinion
    pinion={OBJECT_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }}
  />
)

ObjectNullEnumError.storyName = 'Object - Null - Enum - Error'
ObjectNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAnyOf = () => (
  <Pinion
    pinion={OBJECT_NULL_ANY_OF}
    params={PARAMS}
  />
)

ObjectNullAnyOf.storyName = 'Object - Null - Any Of'
ObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAnyOfError = () => (
  <Pinion
    pinion={OBJECT_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }}
  />
)

ObjectNullAnyOfError.storyName = 'Object - Null - Any Of - Error'
ObjectNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullOneOf = () => (
  <Pinion
    pinion={OBJECT_NULL_ONE_OF}
    params={PARAMS}
  />
)

ObjectNullOneOf.storyName = 'Object - Null - One Of'
ObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullOneOfError = () => (
  <Pinion
    pinion={OBJECT_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }}
  />
)

ObjectNullOneOfError.storyName = 'Object - Null - One Of - Error'
ObjectNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAllOf = () => (
  <Pinion
    pinion={OBJECT_NULL_ALL_OF}
    params={PARAMS}
  />
)

ObjectNullAllOf.storyName = 'Object - Null - All Of'
ObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAllOfError = () => (
  <Pinion
    pinion={OBJECT_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }}
  />
)

ObjectNullAllOfError.storyName = 'Object - Null - All Of - Error'
ObjectNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

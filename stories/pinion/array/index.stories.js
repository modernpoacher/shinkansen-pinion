import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/pinion/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/pinion/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/pinion/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/pinion/array-array-object-string-one-of'
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/pinion/array-array-object-string-all-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/pinion/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/pinion/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/pinion/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/pinion/array-array-object-number-one-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/pinion/array-array-object-number-all-of'

import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/pinion/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/pinion/array-array-object-boolean-enum'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/pinion/array-array-object-boolean-any-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/pinion/array-array-object-boolean-one-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/pinion/array-array-object-boolean-all-of'

import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/pinion/array-array-object-null'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/pinion/array-array-object-null-enum'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/pinion/array-array-object-null-any-of'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/pinion/array-array-object-null-one-of'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/pinion/array-array-object-null-all-of'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/pinion/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/pinion/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/pinion/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/pinion/array-array-array-string-one-of'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/pinion/array-array-array-string-all-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/pinion/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/pinion/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/pinion/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/pinion/array-array-array-number-one-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/pinion/array-array-array-number-all-of'

import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/pinion/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/pinion/array-array-array-boolean-enum'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/pinion/array-array-array-boolean-any-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/pinion/array-array-array-boolean-one-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/pinion/array-array-array-boolean-all-of'

import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/pinion/array-array-array-null'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/pinion/array-array-array-null-enum'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/pinion/array-array-array-null-any-of'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/pinion/array-array-array-null-one-of'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/pinion/array-array-array-null-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Array',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ArrayArrayItemsIsAnObjectString = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectString.storyName = 'Array (Items is an object) - String'
ArrayArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectStringError.storyName = 'Array (Items is an object) - String - Error'
ArrayArrayItemsIsAnObjectStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringEnum.storyName = 'Array (Items is an object) - String - Enum'
ArrayArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectStringEnumError.storyName = 'Array (Items is an object) - String - Enum - Error'
ArrayArrayItemsIsAnObjectStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringAnyOf.storyName = 'Array (Items is an object) - String - Any Of'
ArrayArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectStringAnyOfError.storyName = 'Array (Items is an object) - String - Any Of - Error'
ArrayArrayItemsIsAnObjectStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringOneOf.storyName = 'Array (Items is an object) - String - One Of'
ArrayArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectStringOneOfError.storyName = 'Array (Items is an object) - String - One Of - Error'
ArrayArrayItemsIsAnObjectStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringAllOf.storyName = 'Array (Items is an object) - String - All Of'
ArrayArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectStringAllOfError.storyName = 'Array (Items is an object) - String - All Of - Error'
ArrayArrayItemsIsAnObjectStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumber = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumber.storyName = 'Array (Items is an object) - Number'
ArrayArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNumberError.storyName = 'Array (Items is an object) - Number - Error'
ArrayArrayItemsIsAnObjectNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberEnum.storyName = 'Array (Items is an object) - Number - Enum'
ArrayArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNumberEnumError.storyName = 'Array (Items is an object) - Number - Enum - Error'
ArrayArrayItemsIsAnObjectNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberAnyOf.storyName = 'Array (Items is an object) - Number - Any Of'
ArrayArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNumberAnyOfError.storyName = 'Array (Items is an object) - Number - Any Of - Error'
ArrayArrayItemsIsAnObjectNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberOneOf.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNumberOneOfError.storyName = 'Array (Items is an object) - Number - One Of - Error'
ArrayArrayItemsIsAnObjectNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberAllOf.storyName = 'Array (Items is an object) - Number - All Of'
ArrayArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNumberAllOfError.storyName = 'Array (Items is an object) - Number - All Of - Error'
ArrayArrayItemsIsAnObjectNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBoolean = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBoolean.storyName = 'Array (Items is an object) - Boolean'
ArrayArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectBooleanError.storyName = 'Array (Items is an object) - Boolean - Error'
ArrayArrayItemsIsAnObjectBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanEnum.storyName = 'Array (Items is an object) - Boolean - Enum'
ArrayArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectBooleanEnumError.storyName = 'Array (Items is an object) - Boolean - Enum - Error'
ArrayArrayItemsIsAnObjectBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Array (Items is an object) - Boolean - Any Of'
ArrayArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectBooleanAnyOfError.storyName = 'Array (Items is an object) - Boolean - Any Of - Error'
ArrayArrayItemsIsAnObjectBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanOneOf.storyName = 'Array (Items is an object) - Boolean - One Of'
ArrayArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectBooleanOneOfError.storyName = 'Array (Items is an object) - Boolean - One Of - Error'
ArrayArrayItemsIsAnObjectBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAllOf.storyName = 'Array (Items is an object) - Boolean - All Of'
ArrayArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectBooleanAllOfError.storyName = 'Array (Items is an object) - Boolean - All Of - Error'
ArrayArrayItemsIsAnObjectBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNull = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNull.storyName = 'Array (Items is an object) - Null'
ArrayArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNullError.storyName = 'Array (Items is an object) - Null - Error'
ArrayArrayItemsIsAnObjectNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullEnum.storyName = 'Array (Items is an object) - Null - Enum'
ArrayArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNullEnumError.storyName = 'Array (Items is an object) - Null - Enum - Error'
ArrayArrayItemsIsAnObjectNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullAnyOf.storyName = 'Array (Items is an object) - Null - Any Of'
ArrayArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNullAnyOfError.storyName = 'Array (Items is an object) - Null - Any Of - Error'
ArrayArrayItemsIsAnObjectNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullOneOf.storyName = 'Array (Items is an object) - Null - One Of'
ArrayArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNullOneOfError.storyName = 'Array (Items is an object) - Null - One Of - Error'
ArrayArrayItemsIsAnObjectNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullAllOf.storyName = 'Array (Items is an object) - Null - All Of'
ArrayArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_OBJECT_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnObjectNullAllOfError.storyName = 'Array (Items is an object) - Null - All Of - Error'
ArrayArrayItemsIsAnObjectNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayString = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayString.storyName = 'Array (Items is an array) - String'
ArrayArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayStringError.storyName = 'Array (Items is an array) - String - Error'
ArrayArrayItemsIsAnArrayStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringEnum.storyName = 'Array (Items is an array) - String - Enum'
ArrayArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayStringEnumError.storyName = 'Array (Items is an array) - String - Enum - Error'
ArrayArrayItemsIsAnArrayStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringAnyOf.storyName = 'Array (Items is an array) - String - Any Of'
ArrayArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayStringAnyOfError.storyName = 'Array (Items is an array) - String - Any Of - Error'
ArrayArrayItemsIsAnArrayStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringOneOf.storyName = 'Array (Items is an array) - String - One Of'
ArrayArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayStringOneOfError.storyName = 'Array (Items is an array) - String - One Of - Error'
ArrayArrayItemsIsAnArrayStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringAllOf.storyName = 'Array (Items is an array) - String - All Of'
ArrayArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayStringAllOfError.storyName = 'Array (Items is an array) - String - All Of - Error'
ArrayArrayItemsIsAnArrayStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumber = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumber.storyName = 'Array (Items is an array) - Number'
ArrayArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNumberError.storyName = 'Array (Items is an array) - Number - Error'
ArrayArrayItemsIsAnArrayNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberEnum.storyName = 'Array (Items is an array) - Number - Enum'
ArrayArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNumberEnumError.storyName = 'Array (Items is an array) - Number - Enum - Error'
ArrayArrayItemsIsAnArrayNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberAnyOf.storyName = 'Array (Items is an array) - Number - Any Of'
ArrayArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNumberAnyOfError.storyName = 'Array (Items is an array) - Number - Any Of - Error'
ArrayArrayItemsIsAnArrayNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberOneOf.storyName = 'Array (Items is an array) - Number - One Of'
ArrayArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNumberOneOfError.storyName = 'Array (Items is an array) - Number - One Of - Error'
ArrayArrayItemsIsAnArrayNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberAllOf.storyName = 'Array (Items is an array) - Number - All Of'
ArrayArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNumberAllOfError.storyName = 'Array (Items is an array) - Number - All Of - Error'
ArrayArrayItemsIsAnArrayNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBoolean = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBoolean.storyName = 'Array (Items is an array) - Boolean'
ArrayArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayBooleanError.storyName = 'Array (Items is an array) - Boolean - Error'
ArrayArrayItemsIsAnArrayBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanEnum.storyName = 'Array (Items is an array) - Boolean - Enum'
ArrayArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayBooleanEnumError.storyName = 'Array (Items is an array) - Boolean - Enum - Error'
ArrayArrayItemsIsAnArrayBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Array (Items is an array) - Boolean - Any Of'
ArrayArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayBooleanAnyOfError.storyName = 'Array (Items is an array) - Boolean - Any Of - Error'
ArrayArrayItemsIsAnArrayBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanOneOf.storyName = 'Array (Items is an array) - Boolean - One Of'
ArrayArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayBooleanOneOfError.storyName = 'Array (Items is an array) - Boolean - One Of - Error'
ArrayArrayItemsIsAnArrayBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAllOf.storyName = 'Array (Items is an array) - Boolean - All Of'
ArrayArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayBooleanAllOfError.storyName = 'Array (Items is an array) - Boolean - All Of - Error'
ArrayArrayItemsIsAnArrayBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNull = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNull.storyName = 'Array (Items is an array) - Null'
ArrayArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNullError.storyName = 'Array (Items is an array) - Null - Error'
ArrayArrayItemsIsAnArrayNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullEnum = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ENUM}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullEnum.storyName = 'Array (Items is an array) - Null - Enum'
ArrayArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullEnumError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNullEnumError.storyName = 'Array (Items is an array) - Null - Enum - Error'
ArrayArrayItemsIsAnArrayNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAnyOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ANY_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullAnyOf.storyName = 'Array (Items is an array) - Null - Any Of'
ArrayArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAnyOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNullAnyOfError.storyName = 'Array (Items is an array) - Null - Any Of - Error'
ArrayArrayItemsIsAnArrayNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullOneOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ONE_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullOneOf.storyName = 'Array (Items is an array) - Null - One Of'
ArrayArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullOneOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNullOneOfError.storyName = 'Array (Items is an array) - Null - One Of - Error'
ArrayArrayItemsIsAnArrayNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAllOf = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ALL_OF}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullAllOf.storyName = 'Array (Items is an array) - Null - All Of'
ArrayArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAllOfError = () => (
  <Pinion
    pinion={ARRAY_ARRAY_ARRAY_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] }}
  />
)

ArrayArrayItemsIsAnArrayNullAllOfError.storyName = 'Array (Items is an array) - Null - All Of - Error'
ArrayArrayItemsIsAnArrayNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

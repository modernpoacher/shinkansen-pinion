import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import NULL_NULL from 'stories/definitions/pinion/null-null'
import NULL_NULL_ENUM from 'stories/definitions/pinion/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/pinion/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/pinion/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/pinion/null-null-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Null',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NullNull = () => (
  <Pinion
    pinion={NULL_NULL}
    params={PARAMS}
  />
)

NullNull.storyName = 'Null'
NullNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullError = () => (
  <Pinion
    pinion={NULL_NULL}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NullNullError.storyName = 'Null - Error'
NullNullError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnum = () => (
  <Pinion
    pinion={NULL_NULL_ENUM}
    params={PARAMS}
  />
)

NullNullEnum.storyName = 'Null - Enum'
NullNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnumError = () => (
  <Pinion
    pinion={NULL_NULL_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NullNullEnumError.storyName = 'Null - Enum - Error'
NullNullEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOf = () => (
  <Pinion
    pinion={NULL_NULL_ANY_OF}
    params={PARAMS}
  />
)

NullNullAnyOf.storyName = 'Null - Any Of'
NullNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOfError = () => (
  <Pinion
    pinion={NULL_NULL_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NullNullAnyOfError.storyName = 'Null - Any Of - Error'
NullNullAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOf = () => (
  <Pinion
    pinion={NULL_NULL_ONE_OF}
    params={PARAMS}
  />
)

NullNullOneOf.storyName = 'Null - One Of'
NullNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOfError = () => (
  <Pinion
    pinion={NULL_NULL_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NullNullOneOfError.storyName = 'Null - One Of - Error'
NullNullOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOf = () => (
  <Pinion
    pinion={NULL_NULL_ALL_OF}
    params={PARAMS}
  />
)

NullNullAllOf.storyName = 'Null - All Of'
NullNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOfError = () => (
  <Pinion
    pinion={NULL_NULL_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NullNullAllOfError.storyName = 'Null - All Of - Error'
NullNullAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

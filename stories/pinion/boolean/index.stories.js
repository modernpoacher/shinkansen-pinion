import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import BOOLEAN_BOOLEAN from 'stories/definitions/pinion/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/pinion/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/pinion/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/pinion/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/pinion/boolean-boolean-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Boolean',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const BooleanBoolean = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN}
    params={PARAMS}
  />
)

BooleanBoolean.storyName = 'Boolean'
BooleanBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanError = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

BooleanBooleanError.storyName = 'Boolean - Error'
BooleanBooleanError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnum = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ENUM}
    params={PARAMS}
  />
)

BooleanBooleanEnum.storyName = 'Boolean - Enum'
BooleanBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnumError = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

BooleanBooleanEnumError.storyName = 'Boolean - Enum - Error'
BooleanBooleanEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOf = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ANY_OF}
    params={PARAMS}
  />
)

BooleanBooleanAnyOf.storyName = 'Boolean - Any Of'
BooleanBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOfError = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

BooleanBooleanAnyOfError.storyName = 'Boolean - Any Of - Error'
BooleanBooleanAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOf = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ONE_OF}
    params={PARAMS}
  />
)

BooleanBooleanOneOf.storyName = 'Boolean - One Of'
BooleanBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOfError = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

BooleanBooleanOneOfError.storyName = 'Boolean - One Of - Error'
BooleanBooleanOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOf = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ALL_OF}
    params={PARAMS}
  />
)

BooleanBooleanAllOf.storyName = 'Boolean - All Of'
BooleanBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOfError = () => (
  <Pinion
    pinion={BOOLEAN_BOOLEAN_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

BooleanBooleanAllOfError.storyName = 'Boolean - All Of - Error'
BooleanBooleanAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

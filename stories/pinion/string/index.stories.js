import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import STRING_STRING from 'stories/definitions/pinion/string-string'
import STRING_STRING_ENUM from 'stories/definitions/pinion/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/pinion/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/pinion/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/pinion/string-string-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/String',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const StringString = () => (
  <Pinion
    pinion={STRING_STRING}
    params={PARAMS}
  />
)

StringString.storyName = 'String'
StringString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringError = () => (
  <Pinion
    pinion={STRING_STRING}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

StringStringError.storyName = 'String - Error'
StringStringError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnum = () => (
  <Pinion
    pinion={STRING_STRING_ENUM}
    params={PARAMS}
  />
)

StringStringEnum.storyName = 'String - Enum'
StringStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnumError = () => (
  <Pinion
    pinion={STRING_STRING_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

StringStringEnumError.storyName = 'String - Enum - Error'
StringStringEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOf = () => (
  <Pinion
    pinion={STRING_STRING_ANY_OF}
    params={PARAMS}
  />
)

StringStringAnyOf.storyName = 'String - Any Of'
StringStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOfError = () => (
  <Pinion
    pinion={STRING_STRING_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

StringStringAnyOfError.storyName = 'String - Any Of - Error'
StringStringAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOf = () => (
  <Pinion
    pinion={STRING_STRING_ONE_OF}
    params={PARAMS}
  />
)

StringStringOneOf.storyName = 'String - One Of'
StringStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOfError = () => (
  <Pinion
    pinion={STRING_STRING_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

StringStringOneOfError.storyName = 'String - One Of - Error'
StringStringOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOf = () => (
  <Pinion
    pinion={STRING_STRING_ALL_OF}
    params={PARAMS}
  />
)

StringStringAllOf.storyName = 'String - All Of'
StringStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOfError = () => (
  <Pinion
    pinion={STRING_STRING_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

StringStringAllOfError.storyName = 'String - All Of - Error'
StringStringAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

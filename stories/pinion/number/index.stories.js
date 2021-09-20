import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-pinion/components/pinion'

import NUMBER_NUMBER from 'stories/definitions/pinion/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/pinion/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/pinion/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/pinion/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/pinion/number-number-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Number',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NumberNumber = () => (
  <Pinion
    pinion={NUMBER_NUMBER}
    params={PARAMS}
  />
)

NumberNumber.storyName = 'Number'
NumberNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberError = () => (
  <Pinion
    pinion={NUMBER_NUMBER}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NumberNumberError.storyName = 'Number - Error'
NumberNumberError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnum = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ENUM}
    params={PARAMS}
  />
)

NumberNumberEnum.storyName = 'Number - Enum'
NumberNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnumError = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ENUM}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NumberNumberEnumError.storyName = 'Number - Enum - Error'
NumberNumberEnumError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOf = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ANY_OF}
    params={PARAMS}
  />
)

NumberNumberAnyOf.storyName = 'Number - Any Of'
NumberNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOfError = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ANY_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NumberNumberAnyOfError.storyName = 'Number - Any Of - Error'
NumberNumberAnyOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOf = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ONE_OF}
    params={PARAMS}
  />
)

NumberNumberOneOf.storyName = 'Number - One Of'
NumberNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOfError = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ONE_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NumberNumberOneOfError.storyName = 'Number - One Of - Error'
NumberNumberOneOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOf = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ALL_OF}
    params={PARAMS}
  />
)

NumberNumberAllOf.storyName = 'Number - All Of'
NumberNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOfError = () => (
  <Pinion
    pinion={NUMBER_NUMBER_ALL_OF}
    params={{ errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }}
  />
)

NumberNumberAllOfError.storyName = 'Number - All Of - Error'
NumberNumberAllOfError.parameters = {
  controls: { hideNoControlsWarning: true }
}

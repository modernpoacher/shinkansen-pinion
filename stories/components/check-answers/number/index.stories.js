import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

import NUMBER_NUMBER from 'stories/definitions/check-answers/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/check-answers/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/check-answers/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/check-answers/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/check-answers/number-number-all-of'

export default {
  title: 'Components/Check Answers/Number',
  component: CheckAnswers,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const AllAnswers = () => (
  <CheckAnswers
    title='All Answers'
    checkAnswers={[
      NUMBER_NUMBER,
      NUMBER_NUMBER_ENUM,
      NUMBER_NUMBER_ANY_OF,
      NUMBER_NUMBER_ONE_OF,
      NUMBER_NUMBER_ALL_OF
    ]}
  />
)

AllAnswers.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NoAnswers = () => (
    <CheckAnswers
      title='No Answers'
      checkAnswers={[]}
    />
)

NoAnswers.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumber = () => (
  <CheckAnswers
    title='Number - Number'
    checkAnswers={[NUMBER_NUMBER]}
  />
)

NumberNumber.storyName = 'Number'
NumberNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnum = () => (
  <CheckAnswers
    title='Number - Number - Enum'
    checkAnswers={[NUMBER_NUMBER_ENUM]}
  />
)

NumberNumberEnum.storyName = 'Number - Enum'
NumberNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOf = () => (
  <CheckAnswers
    title='Number - Number - Any Of'
    checkAnswers={[NUMBER_NUMBER_ANY_OF]}
  />
)

NumberNumberAnyOf.storyName = 'Number - Any Of'
NumberNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOf = () => (
  <CheckAnswers
    title='Number - Number - One Of'
    checkAnswers={[NUMBER_NUMBER_ONE_OF]}
  />
)

NumberNumberOneOf.storyName = 'Number - One Of'
NumberNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOf = () => (
  <CheckAnswers
    title='Number - Number - All Of'
    checkAnswers={[NUMBER_NUMBER_ALL_OF]}
  />
)

NumberNumberAllOf.storyName = 'Number - All Of'
NumberNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

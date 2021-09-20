import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

import BOOLEAN_BOOLEAN from 'stories/definitions/check-answers/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/check-answers/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/boolean-boolean-all-of'

export default {
  title: 'Components/Check Answers/Boolean',
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
      BOOLEAN_BOOLEAN,
      BOOLEAN_BOOLEAN_ENUM,
      BOOLEAN_BOOLEAN_ANY_OF,
      BOOLEAN_BOOLEAN_ONE_OF,
      BOOLEAN_BOOLEAN_ALL_OF
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

export const BooleanBoolean = () => (
  <CheckAnswers
    title='Boolean - Boolean'
    checkAnswers={[BOOLEAN_BOOLEAN]}
  />
)

BooleanBoolean.storyName = 'Boolean'
BooleanBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnum = () => (
  <CheckAnswers
    title='Boolean - Boolean - Enum'
    checkAnswers={[BOOLEAN_BOOLEAN_ENUM]}
  />
)

BooleanBooleanEnum.storyName = 'Boolean - Enum'
BooleanBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOf = () => (
  <CheckAnswers
    title='Boolean - Boolean - Any Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ANY_OF]}
  />
)

BooleanBooleanAnyOf.storyName = 'Boolean - Any Of'
BooleanBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOf = () => (
  <CheckAnswers
    title='Boolean - Boolean - One Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ONE_OF]}
  />
)

BooleanBooleanOneOf.storyName = 'Boolean - One Of'
BooleanBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOf = () => (
  <CheckAnswers
    title='Boolean - Boolean - All Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ALL_OF]}
  />
)

BooleanBooleanAllOf.storyName = 'Boolean - All Of'
BooleanBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

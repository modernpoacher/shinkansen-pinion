import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

import NULL_NULL from 'stories/definitions/check-answers/null-null'
import NULL_NULL_ENUM from 'stories/definitions/check-answers/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/check-answers/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/check-answers/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/check-answers/null-null-all-of'

export default {
  title: 'Components/Check Answers/Null',
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
      NULL_NULL,
      NULL_NULL_ENUM,
      NULL_NULL_ANY_OF,
      NULL_NULL_ONE_OF,
      NULL_NULL_ALL_OF
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

export const NullNull = () => (
  <CheckAnswers
    title='Null - Null'
    checkAnswers={[NULL_NULL]}
  />
)

NullNull.storyName = 'Null'
NullNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnum = () => (
  <CheckAnswers
    title='Null - Null - Enum'
    checkAnswers={[NULL_NULL_ENUM]}
  />
)

NullNullEnum.storyName = 'Null - Enum'
NullNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOf = () => (
  <CheckAnswers
    title='Null - Null - Any Of'
    checkAnswers={[NULL_NULL_ANY_OF]}
  />
)

NullNullAnyOf.storyName = 'Null - Any Of'
NullNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOf = () => (
  <CheckAnswers
    title='Null - Null - One Of'
    checkAnswers={[NULL_NULL_ONE_OF]}
  />
)

NullNullOneOf.storyName = 'Null - One Of'
NullNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOf = () => (
  <CheckAnswers
    title='Null - Null - All Of'
    checkAnswers={[NULL_NULL_ALL_OF]}
  />
)

NullNullAllOf.storyName = 'Null - All Of'
NullNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

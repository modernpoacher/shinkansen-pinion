import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

import STRING_STRING from 'stories/definitions/check-answers/string-string'
import STRING_STRING_ENUM from 'stories/definitions/check-answers/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/check-answers/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/check-answers/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/check-answers/string-string-all-of'

export default {
  title: 'Components/Check Answers/String',
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
      STRING_STRING,
      STRING_STRING_ENUM,
      STRING_STRING_ANY_OF,
      STRING_STRING_ONE_OF,
      STRING_STRING_ALL_OF
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

export const StringString = () => (
  <CheckAnswers
    title='String - String'
    checkAnswers={[STRING_STRING]}
  />
)

StringString.storyName = 'String'
StringString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnum = () => (
  <CheckAnswers
    title='String - String - Enum'
    checkAnswers={[STRING_STRING_ENUM]}
  />
)

StringStringEnum.storyName = 'String - Enum'
StringStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOf = () => (
  <CheckAnswers
    title='String - String - Any Of'
    checkAnswers={[STRING_STRING_ANY_OF]}
  />
)

StringStringAnyOf.storyName = 'String - Any Of'
StringStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOf = () => (
  <CheckAnswers
    title='String - String - One Of'
    checkAnswers={[STRING_STRING_ONE_OF]}
  />
)

StringStringOneOf.storyName = 'String - One Of'
StringStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOf = () => (
  <CheckAnswers
    title='String - String - All Of'
    checkAnswers={[STRING_STRING_ALL_OF]}
  />
)

StringStringAllOf.storyName = 'String - All Of'
StringStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

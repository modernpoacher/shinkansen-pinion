import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/sprockets/check-answers'

import BOOLEAN_BOOLEAN from '#stories/definitions/check-answers/boolean-boolean.json'
import BOOLEAN_BOOLEAN_ENUM from '#stories/definitions/check-answers/boolean-boolean-enum.json'
import BOOLEAN_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/boolean-boolean-any-of.json'
import BOOLEAN_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/boolean-boolean-one-of.json'
import BOOLEAN_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/boolean-boolean-all-of.json'

const BOOLEAN = {
  BOOLEAN_BOOLEAN: [BOOLEAN_BOOLEAN],
  BOOLEAN_BOOLEAN_ENUM: [BOOLEAN_BOOLEAN_ENUM],
  BOOLEAN_BOOLEAN_ANY_OF: [BOOLEAN_BOOLEAN_ANY_OF],
  BOOLEAN_BOOLEAN_ONE_OF: [BOOLEAN_BOOLEAN_ONE_OF],
  BOOLEAN_BOOLEAN_ALL_OF: [BOOLEAN_BOOLEAN_ALL_OF]
}

export default {
  title: 'Stories/Components/Check Answers/Boolean',
  component: CheckAnswers,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    title: 'Check Answers',
    checkAnswers: 'BOOLEAN_BOOLEAN'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(BOOLEAN),
      mapping: BOOLEAN,
      control: {
        type: 'radio',
        labels: {
          BOOLEAN_BOOLEAN: 'Boolean',
          BOOLEAN_BOOLEAN_ENUM: 'Boolean - Enum',
          BOOLEAN_BOOLEAN_ANY_OF: 'Boolean - Any Of',
          BOOLEAN_BOOLEAN_ONE_OF: 'Boolean - One Of',
          BOOLEAN_BOOLEAN_ALL_OF: 'Boolean - All Of'
        }
      }
    }
  }
}

export const Default = (args) => (
  <CheckAnswers
    {...args}
  />
)

export const AllAnswers = () => (
  <CheckAnswers
    title='All Answers'
    checkAnswers={Object.values(BOOLEAN).map(([b]) => b)}
  />
)

AllAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <CheckAnswers
    title='No Answers'
    checkAnswers={[]}
  />
)

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

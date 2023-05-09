import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

import NUMBER_NUMBER from '#stories/definitions/check-answers/number-number.json'
import NUMBER_NUMBER_ENUM from '#stories/definitions/check-answers/number-number-enum.json'
import NUMBER_NUMBER_ANY_OF from '#stories/definitions/check-answers/number-number-any-of.json'
import NUMBER_NUMBER_ONE_OF from '#stories/definitions/check-answers/number-number-one-of.json'
import NUMBER_NUMBER_ALL_OF from '#stories/definitions/check-answers/number-number-all-of.json'

const NUMBER = {
  NUMBER_NUMBER: [NUMBER_NUMBER],
  NUMBER_NUMBER_ENUM: [NUMBER_NUMBER_ENUM],
  NUMBER_NUMBER_ANY_OF: [NUMBER_NUMBER_ANY_OF],
  NUMBER_NUMBER_ONE_OF: [NUMBER_NUMBER_ONE_OF],
  NUMBER_NUMBER_ALL_OF: [NUMBER_NUMBER_ALL_OF]
}

export default {
  title: 'Stories/Components/Check Answers/Number',
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
    checkAnswers: 'NUMBER_NUMBER'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(NUMBER),
      mapping: NUMBER,
      control: {
        type: 'radio',
        labels: {
          NUMBER_NUMBER: 'Number',
          NUMBER_NUMBER_ENUM: 'Number - Enum',
          NUMBER_NUMBER_ANY_OF: 'Number - Any Of',
          NUMBER_NUMBER_ONE_OF: 'Number - One Of',
          NUMBER_NUMBER_ALL_OF: 'Number - All Of'
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
    checkAnswers={Object.values(NUMBER).map(([n]) => n)}
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

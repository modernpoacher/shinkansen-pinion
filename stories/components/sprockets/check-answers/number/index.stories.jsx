/**
 *  @typedef {PinionTypes.Components.Sprockets.Sprocket.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import CheckAnswersSprocket from '#pinion/components/sprockets/check-answers'

import {
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF
} from './definitions.mjs'

/**
 *  @type {Array<(Story: () => React.JSX.Element) => React.JSX.Element>}
 */
const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
]

const NUMBER = {
  NUMBER_NUMBER: [NUMBER_NUMBER],
  NUMBER_NUMBER_ENUM: [NUMBER_NUMBER_ENUM],
  NUMBER_NUMBER_ANY_OF: [NUMBER_NUMBER_ANY_OF],
  NUMBER_NUMBER_ONE_OF: [NUMBER_NUMBER_ONE_OF],
  NUMBER_NUMBER_ALL_OF: [NUMBER_NUMBER_ALL_OF]
}

export default {
  title: 'Stories/Components/Sprockets/Check Answers/Number',
  component: CheckAnswersSprocket,
  decorators,
  args: {
    title: 'Check Answers',
    checkAnswers: 'NUMBER_NUMBER'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(NUMBER),
      mapping: NUMBER,
      control: {
        type: 'check',
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

/**
 *  @param {CheckAnswersProps} args
 *  @returns {React.JSX.Element}
 */
export function Default ({ checkAnswers = [], ...args }) {
  /**
   *  @type {CheckAnswersProps}
   */
  const props = {
    ...args,
    checkAnswers: checkAnswers.flat()
  }

  return (
    <CheckAnswersSprocket
      {...props}
    />
  )
}

Default.propTypes = {
  checkAnswers: PropTypes.array
}

import React from 'react'

import { storiesOf } from '@storybook/react'

import ToZashiki from 'shinkansen-pinion'

const definition = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    street_address: {
      type: 'string',
      title: 'Address (Camden - Question 1)',
      description: 'Number and street name'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    }
  },
  required: [
    'street_address',
    'city',
    'state'
  ]
}

storiesOf('Pinion', module)
  .add('Required and default props', () => (
    <ToZashiki definition={definition} />
  ))
  .add('Additional props', () => (
    <ToZashiki definition={definition} />
  ))

/**
 *  @typedef {PinionTypes.Components.Cogs.Cog.Number.NumberProps} NumberProps
 */

import React from 'react'

import NumberCog from '#pinion/components/cogs/number'
import errors from '#stories/errors'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Components/Cogs/Number',
  component: NumberCog,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'select',
        labels: {
          string: 'String',
          number: 'Number',
          array: 'Array',
          object: 'Object',
          boolean: 'Boolean',
          null: 'Null'
        }
      },
      description: 'errorMessage'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

/**
 *  @param {NumberProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <NumberState value={1}>
        <NumberCog {...args} />
      </NumberState>
    </form>
  )
}

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}

/**
 *  @param {NumberProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <NumberState defaultValue={1}>
        <NumberCog {...args} />
      </NumberState>
    </form>
  )
}

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}

/**
 *  @typedef {PinionTypes.Components.Cogs.Cog.Select.SelectProps} SelectProps
 */

import React from 'react'

import SelectCog from '#pinion/components/cogs/select'
import errors from '#stories/errors'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Components/Cogs/Select',
  component: SelectCog,
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
 *  @param {SelectProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <SelectState value='one'>
      <SelectCog {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
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
  id: 'select',
  name: 'select'
}

/**
 *  @param {SelectProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <SelectState defaultValue='one'>
      <SelectCog {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
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
  id: 'select',
  name: 'select'
}

/**
 *  @param {SelectProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleValue (args) {
  return (
    <SelectState value={['one', 'three']}>
      <SelectCog multiple {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
        <option value='four'>Four</option>
        <option value='five'>Five</option>
        <option value='six'>Six</option>
      </SelectCog>
    </SelectState>
  )
}

MultipleValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 *  @param {SelectProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleDefaultValue (args) {
  return (
    <SelectState defaultValue={['one', 'three']}>
      <SelectCog multiple {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
        <option value='four'>Four</option>
        <option value='five'>Five</option>
        <option value='six'>Six</option>
      </SelectCog>
    </SelectState>
  )
}

MultipleDefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

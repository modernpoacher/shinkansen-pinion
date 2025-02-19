/**
 *  @typedef {PinionTypes.Components.Sprockets.Sprocket.Fieldset.FieldsetProps} FieldsetProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import FieldsetSprocket from '#pinion/components/sprockets/fieldset'
import errors from '#stories/errors'

export default {
  title: 'Stories/Components/Sprockets/Fieldset',
  component: FieldsetSprocket,
  args: {
    title: 'Fieldset',
    description: 'Description',
    errorMessage: 'string'
  },
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'radio',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    }
  }
}

/**
 *  @param {FieldsetProps} props
 *  @returns {React.JSX.Element}
 */
export function Default (props) {
  return (
    <FieldsetSprocket
      {...props}
    />
  )
}

/**
 *  @param {FieldsetProps} props
 *  @returns {React.JSX.Element}
 */
export function WithError (props) {
  return (
    <FieldsetSprocket
      {...props}
    />
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.shape({})
}

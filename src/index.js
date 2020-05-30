import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

import Pinion from './pinion'

const log = debug('shinkansen:pinion')

log('`pinion` is awake')

function onChange () {
  /* */
}

const ToZashiki = ({ definition, response, components, errors, onChange }) => (
  <Pinion
    pinion={toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components)}
    params={{ components, errors }}
    onChange={onChange}
  />
)

ToZashiki.propTypes = {
  definition: PropTypes.shape().isRequired,
  response: PropTypes.shape(),
  components: PropTypes.shape(),
  errors: PropTypes.array,
  onChange: PropTypes.func
}

ToZashiki.defaultProps = {
  response: {},
  components: {},
  errors: [],
  onChange
}

export default ToZashiki

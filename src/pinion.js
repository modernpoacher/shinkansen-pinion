import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

import {
  CheckboxCog,
  RadioCog,
  EmailCog,
  NumberCog,
  PasswordCog,
  SelectCog,
  TextCog,
  TextareaCog
} from 'shinkansen-cogs'

import {
  hasEnum,
  hasOneOf,
  hasAnyOf,
  hasValue,
  getValue,
  hasComponent,
  getComponent,
  hasRequired,
  getRequired
} from './common'

// import toErrorMessage, { hasError, getError } from './to-error-message'

const log = debug('shinkansen:pinion')

log('`pinion` is awake')

function onChange () {
  /* */
}

function GroupComponent ({ component, meta, elements, params, onChange }) {

}

function FieldComponent ({ component, meta, elements, params, onChange }) {

}

function Group ({ meta, elements, params, onChange }) {
  const {
    title,
    fields = []
  } = elements

  return (
    <FieldsetSprocket title={title}>
      {fields.map((field) => {
        const {
          meta: {
            uri
          } = {}
        } = field

        return (
          <Pinion
            key={uri}
            pinion={field}
            params={params}
            onChange={onChange}
          />
        )
      })}
    </FieldsetSprocket>
  )
}

Group.propTypes = {
  meta: PropTypes.shape(),
  elements: PropTypes.shape(),
  params: PropTypes.shape(),
  onChange: PropTypes.func
}

function Field ({ meta, elements, params, onChange }) {
  const {
    type
  } = meta

  const {
    title,
    description,
    field: {
      id,
      isRequired = false
    } = {}
  } = elements

  switch (type) {
    case 'string':
      return (
        <TextCog
          title={title}
          description={description}
          name={id}
          required={isRequired}
          onChange={onChange}
        />
      )
    case 'number':
      return (
        <NumberCog
          title={title}
          description={description}
          name={id}
          required={isRequired}
          onChange={onChange}
        />
      )
    case 'boolean':
      return (
        <TextCog
          title={title}
          description={description}
          name={id}
          required={isRequired}
          onChange={onChange}
        />
      )
    case 'null':
      return (
        <TextCog
          title={title}
          description={description}
          name={id}
          required={isRequired}
          onChange={onChange}
        />
      )
  }
}

Field.propTypes = {
  meta: PropTypes.shape(),
  elements: PropTypes.shape(),
  params: PropTypes.shape(),
  onChange: PropTypes.func
}

function PinionGroup ({ pinion: { meta, elements }, params, onChange }) {
  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return (
      <GroupComponent
        component={component}
        meta={meta}
        elements={elements}
        params={params}
        onChange={onChange}
      />
    )
  }

  return (
    <Group
      meta={meta}
      elements={elements}
      params={params}
      onChange={onChange}
    />
  )
}

PinionGroup.propTypes = {
  pinion: PropTypes.shape({
    meta: PropTypes.shape().isRequired,
    elements: PropTypes.shape().isRequired
  }).isRequired,
  params: PropTypes.shape(),
  onChange: PropTypes.func
}

PinionGroup.defaultProps = {
  params: {},
  onChange
}

function PinionField ({ pinion: { meta, elements }, params, onChange }) {
  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return (
      <FieldComponent
        component={component}
        meta={meta}
        elements={elements}
        params={params}
        onChange={onChange}
      />
    )
  }

  return (
    <Field
      meta={meta}
      elements={elements}
      params={params}
      onChange={onChange}
    />
  )
}

PinionField.propTypes = {
  pinion: PropTypes.shape({
    meta: PropTypes.shape().isRequired,
    elements: PropTypes.shape().isRequired
  }).isRequired,
  params: PropTypes.shape(),
  onChange: PropTypes.func
}

PinionField.defaultProps = {
  params: {},
  onChange
}

function Pinion ({ pinion, params, onChange }) {
  const {
    meta: {
      type
    } = {}
  } = pinion

  return (type === 'object' || type === 'array')
    ? <PinionGroup pinion={pinion} params={params} onChange={onChange} />
    : <PinionField pinion={pinion} params={params} onChange={onChange} />
}

Pinion.propTypes = {
  pinion: PropTypes.shape({
    meta: PropTypes.shape().isRequired,
    elements: PropTypes.shape().isRequired
  }).isRequired,
  params: PropTypes.shape(),
  onChange: PropTypes.func
}

export default Pinion

import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

import {
  RadioCog,
  SelectCog,
  TextCog
} from 'shinkansen-cogs'

import hasEnum from 'shinkansen-pinion/transformers/common/has-enum'
import hasAnyOf from 'shinkansen-pinion/transformers/common/has-any-of'
import hasOneOf from 'shinkansen-pinion/transformers/common/has-one-of'
import hasComponent from 'shinkansen-pinion/transformers/common/has-component'
import getComponent from 'shinkansen-pinion/transformers/common/get-component'

const log = debug('shinkansen:pinion')

log('`pinion` is awake')

function onChange () {
  /* */
}

const getKey = (value, index) => `${value}-${index}`

/* eslint-disable-next-line react/prop-types */
export function renderToRadiosForEnum ({ items = [], selectedItems = [], uri }, { enum: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToRadiosForEnum')

  return items.map((value, index) => (
    <RadioCog
      key={getKey(uri, index)}
      title={String(value)}
      value={String(index)}
      name={name}
      required={isRequired}
      checked={selectedItems.includes(index)}
    />
  ))
}

/* eslint-disable-next-line react/prop-types */
export function renderToRadiosForAnyOf ({ items = [], selectedItems = [], uri }, { anyOf: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToRadiosForAnyOf')

  return items.map(({ meta: { uri }, elements: { title, description } }, index) => (
    <RadioCog
      key={uri}
      title={title}
      description={description}
      value={String(index)}
      name={name}
      required={isRequired}
      checked={selectedItems.includes(index)}
    />
  ))
}

/* eslint-disable-next-line react/prop-types */
export function renderToRadiosForOneOf ({ items = [], selectedItems = [], uri }, { oneOf: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToRadiosForOneOf')

  return items.map(({ meta: { uri }, elements: { title, description } }, index) => (
    <RadioCog
      key={uri}
      title={title}
      description={description}
      value={String(index)}
      name={name}
      required={isRequired}
      checked={selectedItems.includes(index)}
    />
  ))
}

/* eslint-disable-next-line react/prop-types */
export function renderToSelectForEnum ({ items = [], selectedItems = [], uri }, { title, description, enum: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToSelectForEnum')

  return (
    <SelectCog
      title={title}
      description={description}
      name={name}
      required={isRequired}>
      {items.map((value, index) => (
        <option
          key={getKey(uri, index)}
          value={String(index)}
          selected={selectedItems.includes(index)}>
          {value}
        </option>
      ))}
    </SelectCog>
  )
}

/* eslint-disable-next-line react/prop-types */
export function renderToSelectForAnyOf ({ items = [], selectedItems = [], uri }, { title, description, anyOf: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToSelectForAnyOf')

  return (
    <SelectCog
      title={title}
      description={description}
      name={name}
      required={isRequired}>
      {items.map(({ meta: { uri }, elements: { title } }, index) => (
        <option
          key={uri}
          value={String(index)}
          selected={selectedItems.includes(index)}>
          {title}
        </option>
      ))}
    </SelectCog>
  )
}

/* eslint-disable-next-line react/prop-types */
export function renderToSelectForOneOf ({ items = [], selectedItems = [], uri }, { title, description, oneOf: { id, name = id, isRequired = false } }, { components, errors }) {
  log('renderToSelectForOneOf')

  return (
    <SelectCog
      title={title}
      description={description}
      name={name}
      required={isRequired}>
      {items.map(({ meta: { uri }, elements: { title } }, index) => (
        <option
          key={uri}
          value={String(index)}
          selected={selectedItems.includes(index)}>
          {title}
        </option>
      ))}
    </SelectCog>
  )
}

export function renderToField (meta, elements, params, onChange) {
  log('renderToField')

  const {
    title,
    description,
    field: {
      id,
      value,
      defaultValue,
      isRequired = false
    } = {}
  } = elements

  return (
    <TextCog
      title={title}
      description={description}
      name={id}
      value={value}
      defaultValue={defaultValue}
      required={isRequired}
      onChange={onChange}
    />
  )
}

export function GroupComponent ({ component, meta, elements, params, onChange }) {

}

export function FieldComponent ({ component, meta, elements, params, onChange }) {

}

export function Group ({ meta, elements, params, onChange }) {
  const {
    title,
    fields = []
  } = elements

  return (
    <FieldsetSprocket title={title}>
      {fields.map((pinion) => {
        const {
          meta: {
            uri
          } = {}
        } = pinion

        return (
          <Pinion
            key={uri}
            pinion={pinion}
            params={params}
            onChange={onChange}
          />
        )
      })}
    </FieldsetSprocket>
  )
}

Group.propTypes = {
  meta: PropTypes.shape().isRequired,
  elements: PropTypes.shape().isRequired,
  params: PropTypes.shape().isRequired,
  onChange: PropTypes.func
}

Group.defaultProps = {
  onChange
}

export function Field ({ meta, elements, params, onChange }) {
  log('Field')

  if (hasEnum(elements)) {
    log('Field (`enum`)')

    return renderToRadiosForEnum(meta, elements, params)
  } else {
    if (hasAnyOf(elements)) {
      log('Field (`anyOf`)')

      return renderToRadiosForAnyOf(meta, elements, params)
    } else {
      if (hasOneOf(elements)) {
        log('Field (`oneOf`)')

        return renderToRadiosForOneOf(meta, elements, params)
      } else {
        log('Field (`field`)')

        return renderToField(meta, elements, params)
      }
    }
  }
}

Field.propTypes = {
  meta: PropTypes.shape().isRequired,
  elements: PropTypes.shape().isRequired,
  params: PropTypes.shape().isRequired,
  onChange: PropTypes.func
}

Field.defaultProps = {
  onChange
}

export function renderGroup ({ meta, elements }, params, onChange) { // eslint-disable-line
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

export function renderField ({ meta, elements }, params, onChange) { // eslint-disable-line
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

export default function Pinion ({ pinion, params, onChange }) {
  const {
    meta: {
      type
    } = {}
  } = pinion

  return (type === 'object' || type === 'array')
    ? renderGroup(pinion, params, onChange)
    : renderField(pinion, params, onChange)
}

Pinion.propTypes = {
  pinion: PropTypes.shape({
    meta: PropTypes.shape().isRequired,
    elements: PropTypes.shape().isRequired
  }).isRequired,
  params: PropTypes.shape({
    components: PropTypes.shape(),
    errors: PropTypes.array
  }),
  onChange: PropTypes.func
}

Pinion.defaultProps = {
  params: {},
  onChange
}

/**
 * Pinion component
 *
 * @typedef {import('shinkansen-pinion/pinion').PinionType} PinionType
 * @typedef {import('shinkansen-pinion/pinion').ParamsType} ParamsType
 * @typedef {import('shinkansen-pinion/pinion').GroupProps} GroupProps
 * @typedef {import('shinkansen-pinion/pinion').FieldProps} FieldProps
 * @typedef {import('shinkansen-pinion/pinion').PinionProps} PinionProps
 */

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
import {
  getError
} from 'shinkansen-pinion/transformers/error-message'

const log = debug('shinkansen-pinion/pinion')

log('`pinion` is awake')

function onChange () {
  /* */
}

const getKey = (value, index) => `${value}-${index}`
const getDefaultValue = (field) => Reflect.has(field, 'defaultValue') ? Reflect.get(field, 'defaultValue') : ''
const getValue = (field) => Reflect.has(field, 'value') ? Reflect.get(field, 'value') : getDefaultValue(field)

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsEnumType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToRadiosForEnum ({ items = [], selectedItems = [], uri }, { title, description, enum: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToRadiosForEnum')

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}>
      {items.map((value, index) => {
        const key = getKey(uri, index)

        return (
          <RadioCog
            key={key}
            title={String(value)}
            value={String(index)}
            id={key}
            name={name}
            onChange={onChange}
            required={isRequired}
            checked={selectedItems.includes(index)}
          />
        )
      })}
    </FieldsetSprocket>
  )
}

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsAnyOfType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToRadiosForAnyOf ({ items = [], selectedItems = [], uri }, { title, description, anyOf: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToRadiosForAnyOf')

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}>
      {items.map(({ meta: { uri }, elements: { title, description, field: { id } } }, index) => (
        <RadioCog
          key={uri}
          title={title}
          description={description}
          value={String(index)}
          id={id}
          name={name}
          onChange={onChange}
          required={isRequired}
          checked={selectedItems.includes(index)}
        />
      ))}
    </FieldsetSprocket>
  )
}

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsOneOfType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToRadiosForOneOf ({ items = [], selectedItems = [], uri }, { title, description, oneOf: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToRadiosForOneOf')

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}>
      {items.map(({ meta: { uri }, elements: { title, description, field: { id } } }, index) => (
        <RadioCog
          key={uri}
          title={title}
          description={description}
          value={String(index)}
          id={id}
          name={name}
          onChange={onChange}
          required={isRequired}
          checked={selectedItems.includes(index)}
        />
      ))}
    </FieldsetSprocket>
  )
}

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsEnumType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToSelectForEnum ({ items = [], selectedItems = [], uri }, { title, description, enum: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToSelectForEnum')

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}
      name={name}
      onChange={onChange}
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

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsAnyOfType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToSelectForAnyOf ({ items = [], selectedItems = [], uri }, { title, description, anyOf: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToSelectForAnyOf')

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}
      name={name}
      onChange={onChange}
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

/**
 * @param {PinionTypes.MetaType}
 * @param {PinionTypes.ElementsOneOfType}
 * @param {ParamsType}
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToSelectForOneOf ({ items = [], selectedItems = [], uri }, { title, description, oneOf: { id, name = id, isRequired = false } }, { components, errors }, onChange) {
  log('renderToSelectForOneOf')

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}
      name={name}
      onChange={onChange}
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

/**
 * @param {PinionTypes.MetaType} meta
 * @param {PinionTypes.ElementsFieldType} elements
 * @param {ParamsType} params
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderToField (meta, elements, params, onChange) {
  log('renderToField')

  const {
    uri
  } = meta

  const {
    title,
    description,
    field: {
      id,
      isRequired = false,
      ...field
    } = {}
  } = elements

  const {
    errors
  } = params

  return (
    <TextCog
      title={title}
      description={description}
      name={id}
      value={getValue(field)}
      errorMessage={getError(errors, uri)}
      required={isRequired}
      onChange={onChange}
    />
  )
}

export function ComponentGroup ({ component, meta, elements, params, onChange }) {

}

export function ComponentField ({ component, meta, elements, params, onChange }) {

}

/**
 * @param {GroupProps}
 * @returns {React.JSX.Element}
 */
export function Group ({ meta, elements, params, onChange }) {
  log('Group')

  const {
    uri
  } = meta

  const {
    title,
    description,
    fields = []
  } = elements

  const {
    errors
  } = params

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={getError(errors, uri)}>
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

/**
 * @param {FieldProps}
 * @returns {React.JSX.Element}
 */
export function Field ({ meta, elements, params, onChange }) {
  log('Field')

  if (hasEnum(elements)) {
    log('Field (`enum`)')

    return renderToRadiosForEnum(meta, elements, params, onChange)
  } else {
    if (hasAnyOf(elements)) {
      log('Field (`anyOf`)')

      return renderToRadiosForAnyOf(meta, elements, params, onChange)
    } else {
      if (hasOneOf(elements)) {
        log('Field (`oneOf`)')

        return renderToRadiosForOneOf(meta, elements, params, onChange)
      } else {
        log('Field (`field`)')

        return renderToField(meta, elements, params, onChange)
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

/**
 * @param {PinionTypes.PinionType}
 * @param {ParamsType} params
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderGroup ({ meta, elements }, params, onChange) { // eslint-disable-line
  log('renderGroup')

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return (
      <ComponentGroup
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

/**
 * @param {PinionType}
 * @param {ParamsType} params
 * @param {PinionTypes.OnChangeType} onChange
 * @returns {React.JSX.Element}
 */
export function renderField ({ meta, elements }, params, onChange) { // eslint-disable-line
  log('renderField')

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return (
      <ComponentField
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

/**
 * @param {PinionProps}
 * @returns {React.JSX.Element}
 */
export default function Pinion ({ pinion, params, onChange }) {
  log('Pinion')

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

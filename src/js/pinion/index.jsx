/**
 *  @typedef {PinionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {PinionTypes.ObjectType} ObjectType
 *  @typedef {PinionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {PinionTypes.ArrayType} ArrayType
 *
 *  @typedef {PinionTypes.FieldType} FieldType
 *
 *  @typedef {PinionTypes.MetaType} MetaType
 *  @typedef {PinionTypes.MetaEnumType} MetaEnumType
 *  @typedef {PinionTypes.MetaAnyOfType} MetaAnyOfType
 *  @typedef {PinionTypes.MetaOneOfType} MetaOneOfType
 *  @typedef {PinionTypes.MetaFieldType} MetaFieldType
 *
 *  @typedef {PinionTypes.ElementsType} ElementsType
 *  @typedef {PinionTypes.ElementsEnumType} ElementsEnumType
 *  @typedef {PinionTypes.ElementsAnyOfType} ElementsAnyOfType
 *  @typedef {PinionTypes.ElementsOneOfType} ElementsOneOfType
 *  @typedef {PinionTypes.ElementsFieldType} ElementsFieldType
 *
 *  @typedef {PinionTypes.OnEventType} OnEventType
 *  @typedef {PinionTypes.PinionType} PinionType
 *  @typedef {PinionTypes.ParamsType} ParamsType
 *  @typedef {PinionTypes.GroupProps} GroupProps
 *  @typedef {PinionTypes.FieldProps} FieldProps
 *  @typedef {PinionTypes.PinionProps} PinionProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import FieldsetSprocket from '#pinion/components/sprockets/fieldset'

import RadioCog from '#pinion/components/cogs/radio'
import SelectCog from '#pinion/components/cogs/select'
import TextCog from '#pinion/components/cogs/text'

import hasMetaEnum from '#pinion/common/meta/has-enum'
import hasMetaAnyOf from '#pinion/common/meta/has-any-of'
import hasMetaOneOf from '#pinion/common/meta/has-one-of'
import hasMetaField from '#pinion/common/meta/has-field'

import hasElementsEnum from '#pinion/common/elements/has-enum'
import hasElementsAnyOf from '#pinion/common/elements/has-any-of'
import hasElementsOneOf from '#pinion/common/elements/has-one-of'
import hasElementsField from '#pinion/common/elements/has-field'

import hasComponent from '#pinion/transformers/common/has-component'
import getComponent from '#pinion/transformers/common/get-component'
import {
  getError
} from '#pinion/transformers/error-message'

function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @type {ParamsType}
 */
const DEFAULT_PARAMS = {
  components: {},
  errors: []
}

const log = debug('shinkansen-pinion/pinion')

log('`shinkansen` is awake')

/**
 *  @param {string} value
 *  @param {number} index
 *  @returns {string}
 */
const getKey = (value, index) => `${value}-${index}`

/**
 *  @param {FieldType} field
 *  @returns {string | number | boolean | object | null | undefined}
 */
function getDefaultValue (field) {
  if ('defaultValue' in field) {
    return (
      field.defaultValue
    )
  }
}

/**
 *  @param {FieldType} field
 *  @returns {string | number | boolean | object | null | undefined}
 */
function getValue (field) {
  if ('value' in field) {
    return (
      field.value
    )
  }

  return (
    getDefaultValue(field)
  )
}

/**
 *  @param {MetaEnumType} meta
 *  @param {ElementsEnumType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToRadiosForEnum ({ items = [], selectedItems = [], uri }, { title, description, enum: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToRadiosForEnum')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={errorMessage}>
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
 *  @param {MetaAnyOfType} meta
 *  @param {ElementsAnyOfType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToRadiosForAnyOf ({ items = [], selectedItems = [], uri }, { title, description, anyOf: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToRadiosForAnyOf')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={errorMessage}>
      {items.map((item, index) => {
        const {
          elements: {
            field: {
              id
            } = {}
          }
        } = item

        if (id) {
          const {
            meta: {
              uri
            },
            elements: {
              title,
              description
            }
          } = item

          return (
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
          )
        }

        return null
      })}
    </FieldsetSprocket>
  )
}

/**
 *  @param {MetaOneOfType} meta
 *  @param {ElementsOneOfType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToRadiosForOneOf ({ items = [], selectedItems = [], uri }, { title, description, oneOf: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToRadiosForOneOf')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <FieldsetSprocket
      title={title}
      description={description}
      errorMessage={errorMessage}>
      {items.map((item, index) => {
        const {
          elements: {
            field: {
              id
            } = {}
          }
        } = item

        if (id) {
          const {
            meta: {
              uri
            },
            elements: {
              title,
              description
            }
          } = item

          return (
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
          )
        }

        return null
      })}
    </FieldsetSprocket>
  )
}

/**
 *  @param {MetaEnumType} meta
 *  @param {ElementsEnumType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToSelectForEnum ({ items = [], selectedItems = [], uri }, { title, description, enum: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToSelectForEnum')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={errorMessage}
      name={name}
      onChange={onChange}
      required={isRequired}>
      {items.map((value, index) => {
        return (
          <option
            key={getKey(uri, index)}
            value={String(index)}
            selected={selectedItems.includes(index)}>
            {String(value)}
          </option>
        )
      })}
    </SelectCog>
  )
}

/**
 *  @param {MetaAnyOfType} meta
 *  @param {ElementsAnyOfType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToSelectForAnyOf ({ items = [], selectedItems = [], uri }, { title, description, anyOf: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToSelectForAnyOf')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={errorMessage}
      name={name}
      onChange={onChange}
      required={isRequired}>
      {items.map(({ meta: { uri }, elements: { title } }, index) => {
        return (
          <option
            key={uri}
            value={String(index)}
            selected={selectedItems.includes(index)}>
            {title}
          </option>
        )
      })}
    </SelectCog>
  )
}

/**
 *  @param {MetaOneOfType} meta
 *  @param {ElementsOneOfType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderToSelectForOneOf ({ items = [], selectedItems = [], uri }, { title, description, oneOf: { id, name = id, isRequired = false } }, { errors }, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToSelectForOneOf')

  const errorMessage = getError(errors, uri) ?? undefined

  return (
    <SelectCog
      title={title}
      description={description}
      errorMessage={errorMessage}
      name={name}
      onChange={onChange}
      required={isRequired}>
      {items.map(({ meta: { uri }, elements: { title } }, index) => {
        return (
          <option
            key={uri}
            value={String(index)}
            selected={selectedItems.includes(index)}>
            {title}
          </option>
        )
      })}
    </SelectCog>
  )
}

/**
 *  @param {MetaFieldType} meta
 *  @param {ElementsFieldType} elements
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element | null}
 */
export function renderToField (meta, elements, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT) {
  log('renderToField')

  const {
    field
  } = elements

  if (field) {
    const {
      uri
    } = meta

    const {
      title,
      description
    } = elements

    const {
      id,
      isRequired = false
    } = field

    const {
      errors
    } = params

    const value = getValue(field) ?? ''
    const errorMessage = getError(errors, uri) ?? undefined

    return (
      <TextCog
        title={title}
        description={description}
        name={id}
        value={String(value)}
        errorMessage={errorMessage}
        required={isRequired}
        onChange={onChange}
      />
    )
  }

  return null
}

/**
 *  @param {GroupProps & { component?: ObjectLiteralType | ObjectType }} group
 *  @returns {React.JSX.Element | null}
 */
export function ComponentGroup ({ component, meta, elements, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT }) {
  log('ComponentGroup', component, meta, elements, params, onChange)

  return null
}

ComponentGroup.propTypes = {
  component: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  elements: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func
}

/**
 *  @param {FieldProps & { component?: ObjectLiteralType | ObjectType }} field
 *  @returns {React.JSX.Element | null}
 */
export function ComponentField ({ component, meta, elements, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT }) {
  log('ComponentField', component, meta, elements, params, onChange)

  return null
}

ComponentField.propTypes = {
  component: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  elements: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func
}

/**
 *  @overload
 *  @param {{ meta: MetaEnumType, elements: ElementsEnumType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaFieldType, elements: ElementsFieldType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @param {GroupProps} groupProps
 *  @returns {React.JSX.Element | null}
 */
export function Group ({ meta, elements, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT }) {
  log('Group')

  const {
    fields = []
  } = elements

  if (fields.length) {
    const {
      uri
    } = meta

    const {
      title,
      description
    } = elements

    const {
      errors
    } = params

    const errorMessage = getError(errors, uri) ?? undefined

    return (
      <FieldsetSprocket
        title={title}
        description={description}
        errorMessage={errorMessage}>
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

  return null
}

Group.propTypes = {
  meta: PropTypes.shape({
    uri: PropTypes.string.isRequired
  }).isRequired,
  elements: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    fields: PropTypes.array
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func
}

/**
 *  @overload
 *  @param {{ meta: MetaEnumType, elements: ElementsEnumType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @overload
 *  @param {{ meta: MetaFieldType, elements: ElementsFieldType, params: ParamsType, onChange: OnEventType }} fieldProps
 *  @returns {React.JSX.Element | null}
 *
 *  @param {FieldProps} fieldProps
 *  @returns {React.JSX.Element | null}
 */
export function Field ({ meta, elements, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT }) {
  log('Field')

  if (hasMetaEnum(meta)) {
    log('Field (`enum`)')

    if (hasElementsEnum(elements)) {
      return renderToRadiosForEnum(meta, elements, params, onChange)
    }
  } else {
    if (hasMetaAnyOf(meta)) {
      log('Field (`anyOf`)')

      if (hasElementsAnyOf(elements)) {
        return renderToRadiosForAnyOf(meta, elements, params, onChange)
      }
    } else {
      if (hasMetaOneOf(meta)) {
        log('Field (`oneOf`)')

        if (hasElementsOneOf(elements)) {
          return renderToRadiosForOneOf(meta, elements, params, onChange)
        }
      } else {
        if (hasMetaField(meta)) {
          log('Field (`field`)')

          if (hasElementsField(elements)) {
            return renderToField(meta, elements, params, onChange)
          }
        }
      }
    }
  }

  return null
}

Field.propTypes = {
  meta: PropTypes.shape({
    uri: PropTypes.string.isRequired
  }).isRequired,
  elements: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    fields: PropTypes.array
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func
}

/**
 *  @param {PinionType} pinion
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderGroup ({ meta, elements }, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT) {
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
 *  @param {PinionType} pinion
 *  @param {ParamsType} params
 *  @param {OnEventType} onChange
 *  @returns {React.JSX.Element}
 */
export function renderField ({ meta, elements }, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT) {
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
 *  @param {PinionProps} pinionProps
 *  @returns {React.JSX.Element}
 */
export default function Pinion ({ pinion, params = DEFAULT_PARAMS, onChange = DEFAULT_HANDLE_EVENT }) {
  log('Pinion')

  const {
    meta: {
      type
    } = {}
  } = pinion

  if (type === 'object' || type === 'array') {
    return (
      renderGroup(pinion, params, onChange)
    )
  }

  return (
    renderField(pinion, params, onChange)
  )
}

Pinion.propTypes = {
  pinion: PropTypes.shape({
    meta: PropTypes.shape({}).isRequired,
    elements: PropTypes.shape({}).isRequired
  }).isRequired,
  params: PropTypes.shape({
    components: PropTypes.shape({}),
    errors: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  onChange: PropTypes.func
}

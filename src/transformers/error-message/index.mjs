import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/error-message')

/**
 * @param {PinionTypes.FieldError[] | PinionTypes.ArrayLiteralType} errors
 * @param {string | null} uri
 * @returns {string}
 */
export function hasError (errors = [], uri = null) {
  log('hasError')

  return errors.some(({ uri: URI }) => '#'.concat(URI) === uri)
}

/**
 * @param {PinionTypes.FieldError[] | PinionTypes.ArrayLiteralType} errors
 * @param {string | null} uri
 * @returns {string}
 */
export function getError (errors = [], uri = null) {
  log('getError')

  return errors.find(({ uri: URI }) => '#'.concat(URI) === uri)
}

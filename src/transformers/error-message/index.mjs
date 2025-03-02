import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/error-message')

/**
 *  @param {PinionTypes.FieldError[]} [errors]
 *  @param {string | null} [uri]
 *  @returns {boolean}
 */
export function hasError (errors = [], uri = null) {
  log('hasError')

  return errors.some(({ uri: URI }) => '#' + URI === uri)
}

/**
 *  @param {PinionTypes.FieldError[]} [errors]
 *  @param {string | null} [uri]
 *  @returns {PinionTypes.FieldError | undefined}
 */
export function getError (errors = [], uri = null) {
  log('getError')

  return errors.find(({ uri: URI }) => '#' + URI === uri)
}

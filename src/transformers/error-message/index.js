import debug from 'debug'

const log = debug('shinkansen:pinion:transformers:error-message')

export function hasError (errors = [], uri) {
  log('hasError')

  return errors.some(({ uri: URI }) => URI === uri)
}

export function getError (errors = [], uri) {
  log('getError')

  return errors.find(({ uri: URI }) => URI === uri)
}

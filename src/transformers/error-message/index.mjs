import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/error-message')

export function hasError (errors = [], uri = null) {
  log('hasError')

  return errors.some(({ uri: URI }) => '#'.concat(URI) === uri)
}

export function getError (errors = [], uri = null) {
  log('getError')

  return errors.find(({ uri: URI }) => '#'.concat(URI) === uri)
}

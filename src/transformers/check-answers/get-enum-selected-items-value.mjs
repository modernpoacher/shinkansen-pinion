import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function getEnumSelectedItemsValue (items = [], selectedItems = []) {
  log('getEnumSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(Reflect.get(items, selectedItem))
        : accumulator
    ), '') // || 'Not answered'
  )
}

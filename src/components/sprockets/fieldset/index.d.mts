declare module '#pinion/components/fieldset' {
  /*
  import type React from 'react'
  import type { SprocketProps } from 'shinkansen-sprockets/sprockets'

  export default function FieldsetSprocket (props: SprocketProps): React.JSX.Element
  */

  export { FieldsetSprocket as default } from 'shinkansen-sprockets'
}

declare module 'shinkansen-pinion/components/fieldset' {
  export { default } from '#pinion/components/fieldset'
}

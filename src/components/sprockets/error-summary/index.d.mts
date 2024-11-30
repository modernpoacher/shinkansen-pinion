declare module '#pinion/components/error-summary' {
  /*
  import type React from 'react'
  import type { SprocketProps } from 'shinkansen-sprockets/sprockets'

  export default function ErrorSummarySprocket (props: SprocketProps): React.JSX.Element
  */

  export { ErrorSummarySprocket as default } from 'shinkansen-sprockets'
}

declare module 'shinkansen-pinion/components/error-summary' {
  export { default } from '#pinion/components/error-summary'
}

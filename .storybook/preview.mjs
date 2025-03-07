/**  @type { import('@storybook/react').Preview } */

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: [
          'Stories',
          [
            'Pinion',
            'Components',
            [
              'Check Answers',
              'Error Summary',
              'Fieldset'
            ]
          ]
        ]
      }
    }
  }
}

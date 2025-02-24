/**  @type { import('@storybook/react-webpack5').StorybookConfig } */

export default {
  stories: [
    '../stories/**/*.stories.jsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal (config) {
    const {
      module: {
        rules = []
      } = {}
    } = config

    rules.push({
      test: /\.(cjs|jsx|mjs)$/,
      use: {
        loader: 'babel-loader'
      },
      include: [
        /node_modules\/shinkansen/
      ],
      exclude: [
        /node_modules\/(?!shinkansen)/
      ]
    })

    return config
  }
}

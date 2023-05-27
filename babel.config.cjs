const debug = require('debug')

const log = debug('shinkansen-pinion')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ],
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook - Cogs
         */
        'shinkansen-cogs/cogs/checkbox': './node_modules/shinkansen-cogs/src/cogs/checkbox/index.cjs',
        'shinkansen-cogs/cogs/email': './node_modules/shinkansen-cogs/src/cogs/email/index.cjs',
        'shinkansen-cogs/cogs/number': './node_modules/shinkansen-cogs/src/cogs/number/index.cjs',
        'shinkansen-cogs/cogs/password': './node_modules/shinkansen-cogs/src/cogs/password/index.cjs',
        'shinkansen-cogs/cogs/radio': './node_modules/shinkansen-cogs/src/cogs/radio/index.cjs',
        'shinkansen-cogs/cogs/select': './node_modules/shinkansen-cogs/src/cogs/select/index.cjs',
        'shinkansen-cogs/cogs/text': './node_modules/shinkansen-cogs/src/cogs/text/index.cjs',
        'shinkansen-cogs/cogs/textarea': './node_modules/shinkansen-cogs/src/cogs/textarea/index.cjs',
        'shinkansen-cogs/cogs': './node_modules/shinkansen-cogs/src/cogs/index.cjs',
        'shinkansen-cogs/components/common/disabled': './node_modules/shinkansen-cogs/src/components/common/disabled/index.cjs',
        'shinkansen-cogs/components/common/readonly': './node_modules/shinkansen-cogs/src/components/common/readonly/index.cjs',
        'shinkansen-cogs/components/common/required': './node_modules/shinkansen-cogs/src/components/common/required/index.cjs',
        'shinkansen-cogs/components/common/text-content': './node_modules/shinkansen-cogs/src/components/common/text-content/index.cjs',
        'shinkansen-cogs/components/description/checkbox': './node_modules/shinkansen-cogs/src/components/description/checkbox/index.cjs',
        'shinkansen-cogs/components/description/email': './node_modules/shinkansen-cogs/src/components/description/email/index.cjs',
        'shinkansen-cogs/components/description/number': './node_modules/shinkansen-cogs/src/components/description/number/index.cjs',
        'shinkansen-cogs/components/description/password': './node_modules/shinkansen-cogs/src/components/description/password/index.cjs',
        'shinkansen-cogs/components/description/radio': './node_modules/shinkansen-cogs/src/components/description/radio/index.cjs',
        'shinkansen-cogs/components/description/select': './node_modules/shinkansen-cogs/src/components/description/select/index.cjs',
        'shinkansen-cogs/components/description/text': './node_modules/shinkansen-cogs/src/components/description/text/index.cjs',
        'shinkansen-cogs/components/description/textarea': './node_modules/shinkansen-cogs/src/components/description/textarea/index.cjs',
        'shinkansen-cogs/components/description': './node_modules/shinkansen-cogs/src/components/description/index.cjs',
        'shinkansen-cogs/components/error-message/checkbox': './node_modules/shinkansen-cogs/src/components/error-message/checkbox/index.cjs',
        'shinkansen-cogs/components/error-message/email': './node_modules/shinkansen-cogs/src/components/error-message/email/index.cjs',
        'shinkansen-cogs/components/error-message/number': './node_modules/shinkansen-cogs/src/components/error-message/number/index.cjs',
        'shinkansen-cogs/components/error-message/password': './node_modules/shinkansen-cogs/src/components/error-message/password/index.cjs',
        'shinkansen-cogs/components/error-message/radio': './node_modules/shinkansen-cogs/src/components/error-message/radio/index.cjs',
        'shinkansen-cogs/components/error-message/select': './node_modules/shinkansen-cogs/src/components/error-message/select/index.cjs',
        'shinkansen-cogs/components/error-message/text': './node_modules/shinkansen-cogs/src/components/error-message/text/index.cjs',
        'shinkansen-cogs/components/error-message/textarea': './node_modules/shinkansen-cogs/src/components/error-message/textarea/index.cjs',
        'shinkansen-cogs/components/error-message': './node_modules/shinkansen-cogs/src/components/error-message/index.cjs',
        'shinkansen-cogs/components/field/checkbox': './node_modules/shinkansen-cogs/src/components/field/checkbox/index.cjs',
        'shinkansen-cogs/components/field/email': './node_modules/shinkansen-cogs/src/components/field/email/index.cjs',
        'shinkansen-cogs/components/field/number': './node_modules/shinkansen-cogs/src/components/field/number/index.cjs',
        'shinkansen-cogs/components/field/password': './node_modules/shinkansen-cogs/src/components/field/password/index.cjs',
        'shinkansen-cogs/components/field/radio': './node_modules/shinkansen-cogs/src/components/field/radio/index.cjs',
        'shinkansen-cogs/components/field/select': './node_modules/shinkansen-cogs/src/components/field/select/index.cjs',
        'shinkansen-cogs/components/field/text': './node_modules/shinkansen-cogs/src/components/field/text/index.cjs',
        'shinkansen-cogs/components/field/textarea': './node_modules/shinkansen-cogs/src/components/field/textarea/index.cjs',
        'shinkansen-cogs/components/field': './node_modules/shinkansen-cogs/src/components/field/index.cjs',
        'shinkansen-cogs/components/title/checkbox': './node_modules/shinkansen-cogs/src/components/title/checkbox/index.cjs',
        'shinkansen-cogs/components/title/email': './node_modules/shinkansen-cogs/src/components/title/email/index.cjs',
        'shinkansen-cogs/components/title/number': './node_modules/shinkansen-cogs/src/components/title/number/index.cjs',
        'shinkansen-cogs/components/title/password': './node_modules/shinkansen-cogs/src/components/title/password/index.cjs',
        'shinkansen-cogs/components/title/radio': './node_modules/shinkansen-cogs/src/components/title/radio/index.cjs',
        'shinkansen-cogs/components/title/select': './node_modules/shinkansen-cogs/src/components/title/select/index.cjs',
        'shinkansen-cogs/components/title/text': './node_modules/shinkansen-cogs/src/components/title/text/index.cjs',
        'shinkansen-cogs/components/title/textarea': './node_modules/shinkansen-cogs/src/components/title/textarea/index.cjs',
        'shinkansen-cogs/components/title': './node_modules/shinkansen-cogs/src/components/title/index.cjs',
        'shinkansen-cogs/transformers/error-message': './node_modules/shinkansen-cogs/src/transformers/error-message/index.mjs',
        /**
         *  Storybook - Sprockets
         */
        'shinkansen-sprockets/sprockets/check-answers': './node_modules/shinkansen-sprockets/src/sprockets/check-answers/index.cjs',
        'shinkansen-sprockets/sprockets/error-summary': './node_modules/shinkansen-sprockets/src/sprockets/error-summary/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset': './node_modules/shinkansen-sprockets/src/sprockets/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets': './node_modules/shinkansen-sprockets/src/sprockets/index.cjs',
        'shinkansen-sprockets/components/common/text-content': './node_modules/shinkansen-sprockets/src/components/common/text-content/index.cjs',
        'shinkansen-sprockets/components/description/fieldset': './node_modules/shinkansen-sprockets/src/components/description/fieldset/index.cjs',
        'shinkansen-sprockets/components/description': './node_modules/shinkansen-sprockets/src/components/description/index.cjs',
        'shinkansen-sprockets/components/error-message/fieldset': './node_modules/shinkansen-sprockets/src/components/error-message/fieldset/index.cjs',
        'shinkansen-sprockets/components/error-message': './node_modules/shinkansen-sprockets/src/components/error-message/index.cjs',
        'shinkansen-sprockets/components/group/check-answers/answer-title': './node_modules/shinkansen-sprockets/src/components/group/check-answers/answer-title.cjs',
        'shinkansen-sprockets/components/group/check-answers/answer-value': './node_modules/shinkansen-sprockets/src/components/group/check-answers/answer-value.cjs',
        'shinkansen-sprockets/components/group/check-answers/change-answer': './node_modules/shinkansen-sprockets/src/components/group/check-answers/change-answer.cjs',
        'shinkansen-sprockets/components/group/check-answers/visually-hidden-text': './node_modules/shinkansen-sprockets/src/components/group/check-answers/visually-hidden-text.cjs',
        'shinkansen-sprockets/components/group/check-answers': './node_modules/shinkansen-sprockets/src/components/group/check-answers/index.cjs',
        'shinkansen-sprockets/components/group/error-summary': './node_modules/shinkansen-sprockets/src/components/group/error-summary/index.cjs',
        'shinkansen-sprockets/components/group/fieldset': './node_modules/shinkansen-sprockets/src/components/group/fieldset/index.cjs',
        'shinkansen-sprockets/components/group': './node_modules/shinkansen-sprockets/src/components/group/index.cjs',
        'shinkansen-sprockets/components/title/check-answers': './node_modules/shinkansen-sprockets/src/components/title/check-answers/index.cjs',
        'shinkansen-sprockets/components/title/error-summary': './node_modules/shinkansen-sprockets/src/components/title/error-summary/index.cjs',
        'shinkansen-sprockets/components/title/fieldset': './node_modules/shinkansen-sprockets/src/components/title/fieldset/index.cjs',
        'shinkansen-sprockets/components/title': './node_modules/shinkansen-sprockets/src/components/title/index.cjs',
        'shinkansen-sprockets/transformers/check-answers': './node_modules/shinkansen-sprockets/src/transformers/check-answers/index.mjs',
        'shinkansen-sprockets/transformers/common': './node_modules/shinkansen-sprockets/src/transformers/common/index.mjs',
        'shinkansen-sprockets/transformers/error-message': './node_modules/shinkansen-sprockets/src/transformers/error-message/index.mjs',
        'shinkansen-sprockets/transformers/error-summary': './node_modules/shinkansen-sprockets/src/transformers/error-summary/index.mjs',
        /**
         *  Storybook - Pinion
         */
        'shinkansen-pinion/components/sprockets/check-answers': './src/components/sprockets/check-answers/index.cjs',
        'shinkansen-pinion/components/sprockets/error-summary': './src/components/sprockets/error-summary/index.cjs',
        'shinkansen-pinion/components/sprockets/fieldset': './src/components/sprockets/fieldset/index.cjs',
        'shinkansen-pinion/components/sprockets': './src/components/sprockets/index.mjs',
        'shinkansen-pinion/components/cogs/radio': './src/components/cogs/radio/index.cjs',
        'shinkansen-pinion/components/cogs/select': './src/components/cogs/select/index.cjs',
        'shinkansen-pinion/components/cogs/text': './src/components/cogs/text/index.cjs',
        'shinkansen-pinion/components/cogs': './src/components/cogs/index.mjs',
        'shinkansen-pinion/components': './src/components/index.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-title': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-array': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-object': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-any-of-selected-item-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-any-of-selected-items-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-change-answer': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-enum-selected-item-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-enum-selected-items-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-one-of-selected-item-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-one-of-selected-items-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-visually-hidden-text': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/index': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/to-answer-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-answer-title': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-answer-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-any-of-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-enum-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-field-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-one-of-value': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-array-answers': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-boolean-answer': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-null-answer': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-number-answer': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-object-answers': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-string-answer': './src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers': './src/transformers/check-answers/index.mjs',
        'shinkansen-pinion/transformers/common/get-any-of': './src/transformers/common/get-any-of.mjs',
        'shinkansen-pinion/transformers/common/get-component': './src/transformers/common/get-component.mjs',
        'shinkansen-pinion/transformers/common/get-description': './src/transformers/common/get-description.mjs',
        'shinkansen-pinion/transformers/common/get-elements-title': './src/transformers/common/get-elements-title.mjs',
        'shinkansen-pinion/transformers/common/get-enum': './src/transformers/common/get-enum.mjs',
        'shinkansen-pinion/transformers/common/get-field': './src/transformers/common/get-field.mjs',
        'shinkansen-pinion/transformers/common/get-group': './src/transformers/common/get-group.mjs',
        'shinkansen-pinion/transformers/common/get-one-of': './src/transformers/common/get-one-of.mjs',
        'shinkansen-pinion/transformers/common/get-required': './src/transformers/common/get-required.mjs',
        'shinkansen-pinion/transformers/common/get-resource-url': './src/transformers/common/get-resource-url.mjs',
        'shinkansen-pinion/transformers/common/get-title': './src/transformers/common/get-title.mjs',
        'shinkansen-pinion/transformers/common/get-type': './src/transformers/common/get-type.mjs',
        'shinkansen-pinion/transformers/common/get-value': './src/transformers/common/get-value.mjs',
        'shinkansen-pinion/transformers/common/has-any-of': './src/transformers/common/has-any-of.mjs',
        'shinkansen-pinion/transformers/common/has-component': './src/transformers/common/has-component.mjs',
        'shinkansen-pinion/transformers/common/has-description': './src/transformers/common/has-description.mjs',
        'shinkansen-pinion/transformers/common/has-elements-title': './src/transformers/common/has-elements-title.mjs',
        'shinkansen-pinion/transformers/common/has-enum': './src/transformers/common/has-enum.mjs',
        'shinkansen-pinion/transformers/common/has-field': './src/transformers/common/has-field.mjs',
        'shinkansen-pinion/transformers/common/has-one-of': './src/transformers/common/has-one-of.mjs',
        'shinkansen-pinion/transformers/common/has-required': './src/transformers/common/has-required.mjs',
        'shinkansen-pinion/transformers/common/has-title': './src/transformers/common/has-title.mjs',
        'shinkansen-pinion/transformers/common/has-type': './src/transformers/common/has-type.mjs',
        'shinkansen-pinion/transformers/common/has-value': './src/transformers/common/has-value.mjs',
        'shinkansen-pinion/transformers/common/index': './src/transformers/common/index.mjs',
        'shinkansen-pinion/transformers/common': './src/transformers/common/index.mjs',
        'shinkansen-pinion/transformers/error-message': './src/transformers/error-message/index.mjs',
        'shinkansen-pinion/transformers': './src/transformers/index.mjs',
        'shinkansen-pinion/pinion': './src/pinion/index.cjs',
        /**
         *  Storybook
         */
        '#stories/errors': './stories/errors.mjs',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen|@modernpoacher)/
    ]
  }
}

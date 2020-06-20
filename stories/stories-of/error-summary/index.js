// import React from 'react'

import { storiesOf } from '@storybook/react'
import StorybookReactRouter from 'storybook-react-router'

import toErrorSummary from 'shinkansen-pinion/to-error-summary'

import ERROR_MAX_ITEMS from 'stories/definitions/error-max-items'
import ERROR_MIN_ITEMS from 'stories/definitions/error-min-items'
import ERROR_MAX_LENGTH from 'stories/definitions/error-max-length'
import ERROR_MIN_LENGTH from 'stories/definitions/error-min-length'
import ERROR_MAX_PROPERTIES from 'stories/definitions/error-max-properties'
import ERROR_MIN_PROPERTIES from 'stories/definitions/error-min-properties'
import ERROR_ADDITIONAL_ITEMS from 'stories/definitions/error-additional-items'
import ERROR_MAXIMUM from 'stories/definitions/error-maximum'
import ERROR_MINIMUM from 'stories/definitions/error-minimum'
import ERROR_FORMAT from 'stories/definitions/error-format'
import ERROR_ADDITIONAL_PROPERTIES from 'stories/definitions/error-additional-properties'
import ERROR_DEPENDENCIES from 'stories/definitions/error-dependencies'
import ERROR_UNIQUE_ITEMS from 'stories/definitions/error-unique-items'
import ERROR_PROPERTY_REQUIRED from 'stories/definitions/error-property-required'
import ERROR_PROPERTY_NAMES from 'stories/definitions/error-property-names'
import ERROR_PATTERN_REQUIRED from 'stories/definitions/error-pattern-required'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING from 'stories/definitions/error-type-invalid-expected-type-string'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER from 'stories/definitions/error-type-invalid-expected-type-number'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT from 'stories/definitions/error-type-invalid-expected-type-object'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY from 'stories/definitions/error-type-invalid-expected-type-array'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN from 'stories/definitions/error-type-invalid-expected-type-boolean'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL from 'stories/definitions/error-type-invalid-expected-type-null'
import ERROR_MULTIPLE_OF from 'stories/definitions/error-multiple-of'
import ERROR_PATTERN from 'stories/definitions/error-pattern'
import ERROR_CONST from 'stories/definitions/error-const'
import ERROR_ENUM from 'stories/definitions/error-enum'
import ERROR_$REF from 'stories/definitions/error-$ref'
import ERROR_ONE_OF from 'stories/definitions/error-one-of'
import ERROR_UNKNOWN from 'stories/definitions/error-unknown'

storiesOf('Error Summary', module)
  .addDecorator(StorybookReactRouter())

  .add('Error - Max Items', () => toErrorSummary('Error - Max Items', [ERROR_MAX_ITEMS]))
  .add('Error - Min Items', () => toErrorSummary('Error - Min Items', [ERROR_MIN_ITEMS]))
  .add('Error - Max Length', () => toErrorSummary('Error - Max Length', [ERROR_MAX_LENGTH]))
  .add('Error - Min Length', () => toErrorSummary('Error - Min Length', [ERROR_MIN_LENGTH]))
  .add('Error - Max Properties', () => toErrorSummary('Error - Max Properties', [ERROR_MAX_PROPERTIES]))
  .add('Error - Min Properties', () => toErrorSummary('Error - Min Properties', [ERROR_MIN_PROPERTIES]))
  .add('Error - Additional Items', () => toErrorSummary('Error - Additional Items', [ERROR_ADDITIONAL_ITEMS]))
  .add('Error - Maximum', () => toErrorSummary('Error - Maximum', [ERROR_MAXIMUM]))
  .add('Error - Minimum', () => toErrorSummary('Error - Minimum', [ERROR_MINIMUM]))
  .add('Error - Format', () => toErrorSummary('Error - Format', [ERROR_FORMAT]))
  .add('Error - Additional Properties', () => toErrorSummary('Error - Additional Properties', [ERROR_ADDITIONAL_PROPERTIES]))
  .add('Error - Dependencies', () => toErrorSummary('Error - Dependencies', [ERROR_DEPENDENCIES]))
  .add('Error - Unique Items', () => toErrorSummary('Error - Unique Items', [ERROR_UNIQUE_ITEMS]))
  .add('Error - Property Required', () => toErrorSummary('Error - Property Required', [ERROR_PROPERTY_REQUIRED]))
  .add('Error - Property Names', () => toErrorSummary('Error - Property Names', [ERROR_PROPERTY_NAMES]))
  .add('Error - Pattern Required', () => toErrorSummary('Error - Pattern Required', [ERROR_PATTERN_REQUIRED]))
  .add('Error - Type Invalid (expected string)', () => toErrorSummary('Error - Type Invalid (expected string)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING]))
  .add('Error - Type Invalid (expected number)', () => toErrorSummary('Error - Type Invalid (expected number)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER]))
  .add('Error - Type Invalid (expected object)', () => toErrorSummary('Error - Type Invalid (expected object)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT]))
  .add('Error - Type Invalid (expected array)', () => toErrorSummary('Error - Type Invalid (expected array)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY]))
  .add('Error - Type Invalid (expected boolean)', () => toErrorSummary('Error - Type Invalid (expected boolean)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN]))
  .add('Error - Type Invalid (expected null)', () => toErrorSummary('Error - Type Invalid (expected null)', [ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL]))
  .add('Error - Multiple Of', () => toErrorSummary('Error - Multiple Of', [ERROR_MULTIPLE_OF]))
  .add('Error - Pattern', () => toErrorSummary('Error - Pattern', [ERROR_PATTERN]))
  .add('Error - Const', () => toErrorSummary('Error - Const', [ERROR_CONST]))
  .add('Error - Enum', () => toErrorSummary('Error - Enum', [ERROR_ENUM]))
  .add('Error - $Ref', () => toErrorSummary('Error - $Ref', [ERROR_$REF]))
  .add('Error - One Of', () => toErrorSummary('Error - One Of', [ERROR_ONE_OF]))
  .add('Error - Unknown', () => toErrorSummary('Error - Unknown', [ERROR_UNKNOWN]))

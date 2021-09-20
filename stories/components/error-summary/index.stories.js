import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import ErrorSummary from 'shinkansen-pinion/components/error-summary'

import ERROR_MAX_ITEMS from 'stories/definitions/error-summary/error-max-items'
import ERROR_MIN_ITEMS from 'stories/definitions/error-summary/error-min-items'
import ERROR_MAX_LENGTH from 'stories/definitions/error-summary/error-max-length'
import ERROR_MIN_LENGTH from 'stories/definitions/error-summary/error-min-length'
import ERROR_MAX_PROPERTIES from 'stories/definitions/error-summary/error-max-properties'
import ERROR_MIN_PROPERTIES from 'stories/definitions/error-summary/error-min-properties'
import ERROR_ADDITIONAL_ITEMS from 'stories/definitions/error-summary/error-additional-items'
import ERROR_MAXIMUM from 'stories/definitions/error-summary/error-maximum'
import ERROR_MINIMUM from 'stories/definitions/error-summary/error-minimum'
import ERROR_FORMAT from 'stories/definitions/error-summary/error-format'
import ERROR_ADDITIONAL_PROPERTIES from 'stories/definitions/error-summary/error-additional-properties'
import ERROR_DEPENDENCIES from 'stories/definitions/error-summary/error-dependencies'
import ERROR_UNIQUE_ITEMS from 'stories/definitions/error-summary/error-unique-items'
import ERROR_PROPERTY_REQUIRED from 'stories/definitions/error-summary/error-property-required'
import ERROR_PROPERTY_NAMES from 'stories/definitions/error-summary/error-property-names'
import ERROR_PATTERN_REQUIRED from 'stories/definitions/error-summary/error-pattern-required'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING from 'stories/definitions/error-summary/error-type-invalid-expected-type-string'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER from 'stories/definitions/error-summary/error-type-invalid-expected-type-number'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT from 'stories/definitions/error-summary/error-type-invalid-expected-type-object'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY from 'stories/definitions/error-summary/error-type-invalid-expected-type-array'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN from 'stories/definitions/error-summary/error-type-invalid-expected-type-boolean'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL from 'stories/definitions/error-summary/error-type-invalid-expected-type-null'
import ERROR_MULTIPLE_OF from 'stories/definitions/error-summary/error-multiple-of'
import ERROR_PATTERN from 'stories/definitions/error-summary/error-pattern'
import ERROR_CONST from 'stories/definitions/error-summary/error-const'
import ERROR_ENUM from 'stories/definitions/error-summary/error-enum'
import ERROR_$REF from 'stories/definitions/error-summary/error-$ref'
import ERROR_ONE_OF from 'stories/definitions/error-summary/error-one-of'
import ERROR_UNKNOWN from 'stories/definitions/error-summary/error-unknown'

export default {
  title: 'Components/Error Summary',
  component: ErrorSummary,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const AllErrors = () => (
  <ErrorSummary
    title='All Errors'
    errorSummary={[
      ERROR_MAX_ITEMS,
      ERROR_MIN_ITEMS,
      ERROR_MAX_LENGTH,
      ERROR_MIN_LENGTH,
      ERROR_MAX_PROPERTIES,
      ERROR_MIN_PROPERTIES,
      ERROR_ADDITIONAL_ITEMS,
      ERROR_MAXIMUM,
      ERROR_MINIMUM,
      ERROR_FORMAT,
      ERROR_ADDITIONAL_PROPERTIES,
      ERROR_DEPENDENCIES,
      ERROR_UNIQUE_ITEMS,
      ERROR_PROPERTY_REQUIRED,
      ERROR_PROPERTY_NAMES,
      ERROR_PATTERN_REQUIRED,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN,
      ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL,
      ERROR_MULTIPLE_OF,
      ERROR_PATTERN,
      ERROR_CONST,
      ERROR_ENUM,
      ERROR_$REF,
      ERROR_ONE_OF,
      ERROR_UNKNOWN
    ]}
  />
)

AllErrors.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NoErrors = () => (
  <ErrorSummary
    title='No Errors'
    errorSummary={[]}
  />
)

NoErrors.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMaxItems = () => (
  <ErrorSummary
    title='Error - Max Items'
    errorSummary={[ERROR_MAX_ITEMS]}
  />
)

ErrorMaxItems.storyName = 'Error - Max Items'
ErrorMaxItems.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMinItems = () => (
  <ErrorSummary
    title='Error - Min Items'
    errorSummary={[ERROR_MIN_ITEMS]}
  />
)

ErrorMinItems.storyName = 'Error - Min Items'
ErrorMinItems.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMaxLength = () => (
  <ErrorSummary
    title='Error - Max Length'
    errorSummary={[ERROR_MAX_LENGTH]}
  />
)

ErrorMaxLength.storyName = 'Error - Max Length'
ErrorMaxLength.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMinLength = () => (
  <ErrorSummary
    title='Error - Min Length'
    errorSummary={[ERROR_MIN_LENGTH]}
  />
)

ErrorMinLength.storyName = 'Error - Min Length'
ErrorMinLength.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMaxProperties = () => (
  <ErrorSummary
    title='Error - Max Properties'
    errorSummary={[ERROR_MAX_PROPERTIES]}
  />
)

ErrorMaxProperties.storyName = 'Error - Max Properties'
ErrorMaxProperties.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMinProperties = () => (
  <ErrorSummary
    title='Error - Min Properties'
    errorSummary={[ERROR_MIN_PROPERTIES]}
  />
)

ErrorMinProperties.storyName = 'Error - Min Properties'
ErrorMinProperties.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorAdditionalItems = () => (
  <ErrorSummary
    title='Error - Additional Items'
    errorSummary={[ERROR_ADDITIONAL_ITEMS]}
  />
)

ErrorAdditionalItems.storyName = 'Error - Additional Items'
ErrorAdditionalItems.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMaximum = () => (
  <ErrorSummary
    title='Error - Maximum'
    errorSummary={[ERROR_MAXIMUM]}
  />
)

ErrorMaximum.storyName = 'Error - Maximum'
ErrorMaximum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMinimum = () => (
  <ErrorSummary
    title='Error - Minimum'
    errorSummary={[ERROR_MINIMUM]}
  />
)

ErrorMinimum.storyName = 'Error - Minimum'
ErrorMinimum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorFormat = () => (
  <ErrorSummary
    title='Error - Format'
    errorSummary={[ERROR_FORMAT]}
  />
)

ErrorFormat.storyName = 'Error - Format'
ErrorFormat.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorAdditionalProperties = () => (
  <ErrorSummary
    title='Error - Additional Properties'
    errorSummary={[ERROR_ADDITIONAL_PROPERTIES]}
  />
)

ErrorAdditionalProperties.storyName = 'Error - Additional Properties'
ErrorAdditionalProperties.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorDependencies = () => (
  <ErrorSummary
    title='Error - Dependencies'
    errorSummary={[ERROR_DEPENDENCIES]}
  />
)

ErrorDependencies.storyName = 'Error - Dependencies'
ErrorDependencies.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorUniqueItems = () => (
  <ErrorSummary
    title='Error - Unique Items'
    errorSummary={[ERROR_UNIQUE_ITEMS]}
  />
)

ErrorUniqueItems.storyName = 'Error - Unique Items'
ErrorUniqueItems.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorPropertyRequired = () => (
  <ErrorSummary
    title='Error - Property Required'
    errorSummary={[ERROR_PROPERTY_REQUIRED]}
  />
)

ErrorPropertyRequired.storyName = 'Error - Property Required'
ErrorPropertyRequired.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorPropertyNames = () => (
  <ErrorSummary
    title='Error - Property Names'
    errorSummary={[ERROR_PROPERTY_NAMES]}
  />
)

ErrorPropertyNames.storyName = 'Error - Property Names'
ErrorPropertyNames.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorPatternRequired = () => (
  <ErrorSummary
    title='Error - Pattern Required'
    errorSummary={[ERROR_PATTERN_REQUIRED]}
  />
)

ErrorPatternRequired.storyName = 'Error - Pattern Required'
ErrorPatternRequired.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedString = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected string)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING]}
  />
)

ErrorTypeInvalidExpectedString.storyName = 'Error - Type Invalid (expected string)'
ErrorTypeInvalidExpectedString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedNumber = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected number)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER]}
  />
)

ErrorTypeInvalidExpectedNumber.storyName = 'Error - Type Invalid (expected number)'
ErrorTypeInvalidExpectedNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedObject = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected object)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT]}
  />
)

ErrorTypeInvalidExpectedObject.storyName = 'Error - Type Invalid (expected object)'
ErrorTypeInvalidExpectedObject.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedArray = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected array)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY]}
  />
)

ErrorTypeInvalidExpectedArray.storyName = 'Error - Type Invalid (expected array)'
ErrorTypeInvalidExpectedArray.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedBoolean = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected boolean)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN]}
  />
)

ErrorTypeInvalidExpectedBoolean.storyName = 'Error - Type Invalid (expected boolean)'
ErrorTypeInvalidExpectedBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorTypeInvalidExpectedNull = () => (
  <ErrorSummary
    title='Error - Type Invalid (expected null)'
    errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL]}
  />
)

ErrorTypeInvalidExpectedNull.storyName = 'Error - Type Invalid (expected null)'
ErrorTypeInvalidExpectedNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorMultipleOf = () => (
  <ErrorSummary
    title='Error - Multiple Of'
    errorSummary={[ERROR_MULTIPLE_OF]}
  />
)

ErrorMultipleOf.storyName = 'Error - Multiple Of'
ErrorMultipleOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorPattern = () => (
  <ErrorSummary
    title='Error - Pattern'
    errorSummary={[ERROR_PATTERN]}
  />
)

ErrorPattern.storyName = 'Error - Pattern'
ErrorPattern.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorConst = () => (
  <ErrorSummary
    title='Error - Const'
    errorSummary={[ERROR_CONST]}
  />
)

ErrorConst.storyName = 'Error - Const'
ErrorConst.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorEnum = () => (
  <ErrorSummary
    title='Error - Enum'
    errorSummary={[ERROR_ENUM]}
  />
)

ErrorEnum.storyName = 'Error - Enum'
ErrorEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const Error$Ref = () => (
  <ErrorSummary
    title='Error - $Ref'
    errorSummary={[ERROR_$REF]}
  />
)

Error$Ref.storyName = 'Error - $Ref'
Error$Ref.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorOneOf = () => (
  <ErrorSummary
    title='Error - One Of'
    errorSummary={[ERROR_ONE_OF]}
  />
)

ErrorOneOf.storyName = 'Error - One Of'
ErrorOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ErrorUnknown = () => (
  <ErrorSummary
    title='Error - Unknown'
    errorSummary={[ERROR_UNKNOWN]}
  />
)

ErrorUnknown.storyName = 'Error - Unknown'
ErrorUnknown.parameters = {
  controls: { hideNoControlsWarning: true }
}

#!/bin/bash

DEBUG="${DEBUG:-shinkansen-pinion*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'

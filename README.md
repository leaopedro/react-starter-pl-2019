# React + Redux Starter V2
Author: Pedro Leão

## Launching:

#### Preconditions
- node and yarn

## Development
Basic rules and development guide

#### Development mode
- `yarn install` install the ecosystem as it is needed.
- `yarn run dev` run next in dev mod.

#### Tools:

##### Unit testing
Project uses test tools for code quality:

###### Test scripts
- `yarn test` - run unit all tests.
- `yarn test:watch` - run tests all in watch mode.

##### Code linting
Project uses lint tools for code validation:
- `ESLint` - for JavaScript code. Configuration is provided in `.eslintrc` file. if you want to ignore an specific path use `.eslintignore`

###### Lint scripts
- `yarn eslint` - run ESLint.
- `yarn eslint:fix` - run ESLint and fix what is possible by the tool.
- `yarn eslint:watch` - run ESLint in watch mode while.

###### Editorconfig
Project contains .editorconfig, please add corresponding plugin to your IDE.

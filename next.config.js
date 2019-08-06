const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass(
  {
    webpack(config) {
      const c = config;
      c.resolve.alias.actions = path.join(__dirname, 'actions');
      c.resolve.alias.components = path.join(__dirname, 'components');
      c.resolve.alias.mocks = path.join(__dirname, 'mocks');
      c.resolve.alias.pages = path.join(__dirname, 'pages');
      c.resolve.alias.reducers = path.join(__dirname, 'reducers');
      c.resolve.alias.selectors = path.join(__dirname, 'selectors');
      c.resolve.alias.utils = path.join(__dirname, 'utils');
      c.module.rules.push(
        {
          test: /\.test.js$/,
          loader: 'ignore-loader',
        },
      );
      return c;
    },
  },
);

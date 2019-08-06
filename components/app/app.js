import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ConfigureStore from 'utils/configurestore';

const Store = ConfigureStore();

const App = ({ compact, children }) => (
  <Provider store={Store}>
      {children}
  </Provider>
);

App.propTypes = {
  children: PropTypes.element,
  compact: PropTypes.bool,
};

App.defaultProps = {
  children: <span />,
  compact: false,
};

export default App;

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from 'components/presentational/app';
import Layout from 'components/presentational/layout';

describe('App', () => {
  let mountedApp;

  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
    expect(mountedApp).toMatchSnapshot();
  });

  it('expect to have a Provider component', () => {
    const layout = mountedApp.find(Provider);
    expect(layout).toHaveLength(1);
  });

  it('expect to have Layout component with span', () => {
    const layout = mountedApp.find(Layout);
    expect(layout).toHaveLength(1);
    expect(layout.find('span')).toHaveLength(1);
  });
});

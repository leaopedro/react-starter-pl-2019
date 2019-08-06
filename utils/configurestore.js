import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers';

const ConfigureStore = () => createStore(reducers, {}, composeWithDevTools(applyMiddleware()));

export default ConfigureStore;

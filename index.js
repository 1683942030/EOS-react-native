import ReactNative, { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/configureStore';

const store = configureStore();

const EOS_react_native = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('EOS_react_native', () => EOS_react_native);

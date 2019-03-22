import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blockReducer from './src/components/BlockReducer';
import AppNavigator from './AppNavigator';

const store = createStore(blockReducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
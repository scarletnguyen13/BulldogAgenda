import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blockReducer from './src/components/BlockReducer';
import AppContainer from './Routes';

const store = createStore(blockReducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;
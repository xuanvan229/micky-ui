import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import RootApp from './route'
import rootSaga from './redux/sagas'

import 'antd/dist/antd.css'; 
const store = configureStore()
store.runSaga(rootSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootApp/>
      </Provider>
    );
  }
}

export default App;

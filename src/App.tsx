import React, { Component } from 'react';
import './App.css';
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import RootApp from './route'
import rootSaga from './redux/sagas'

import 'antd/dist/antd.css'; 
import './scss/main.scss'

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

import React, {Component} from 'react';
import Navigating from './Wovv/Wovv/Navigating';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Indexs from './Wovv/Wovv/Api/Redux/Reducer/Indexs';
export default class HelloApp extends Component {
  render() {
    return <Navigating />
  }
}

// ( <Provider store={createStore(Indexs)}>
// <Navigating />
// </Provider>)
import React, { Component } from 'react';
import logo from './logo.svg';
import {add} from '../../../redux/actions'
// import Button from 'antd/lib/button';
import { Button } from 'antd'


import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

const Home = (props:any) => {
    const add = props.add
    return (
        <div className="App">
          <header className="App-header">
            <h1>
              {props.post}
            </h1>
            <Button type="primary" onClick={() => add()}>Button</Button>
            
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
}

const mapStateToProps = (state:any) => {
  const { post } = state
  return {post}
}



const HomeConnected = connect(mapStateToProps, {add,})(Home);;

export default HomeConnected

import React, { Component, useEffect } from 'react';
import { Switch, Route } from 'react-router'
import {BrowserRouter, Redirect} from 'react-router-dom';
import Home from '../app/home/page'
import English from '../app/english/page';
import LoginConnected from '../app/login/page'
import Note from '../app/note/page'
import {Loading}  from '../components/Loading'
import { connect } from 'react-redux';
import loading from '../assets/images/others/loading.gif'
import axios from 'axios';
import {sendRequestAuth} from '../redux/actions'
import Nav from '../components/Nav'
import { withRouter } from "react-router";




const mapStateToPropsRender = (state:any) => {
  const { checkAuth } = state
  return { checkAuth }
}

const PrivateRoute = (props:any) =>{
  if(props.checkAuth.isSend) {
    return (
      <Loading></Loading>
    )
  } else {
    if(props.checkAuth.isLogin) {
      return (
        <Route path ={props.path} component={props.component} />
      )
    } else {
        return (
          <Redirect to='/login' />
        )
    }
  }
}

const PrivateRouteConnected = connect(mapStateToPropsRender, {sendRequestAuth})(PrivateRoute)

export const PostList =(props:any) => {
  if(props.page.isFetching) {
    return (
      <div>
        It isFetching
      </div>
    )
  } else {
    return (
      <div>
        {props.page.data.map((item:any) => {
         return (
          <h1 key={item.id}>  
            {item.title}
          </h1>
         )
        })}
      </div>
    )
  }
}

const Post = (props:any) => {
  return (
    <div>
      Hello Post
      <PostList page = {props.page} />
    </div>
  )
}


const mapStateToProps = (state:any) => {
  const { page } = state
  return { page }
}

const PostConnected = connect(mapStateToProps)(Post);;

const RootApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <div className="app">
        <Switch>
          <>
            <Route exact path="/" component={Home}/>  
            <Route path="/post" component={PostConnected}/>
            <Route path="/note" component={Note}/>
            <Route path="/en" component={English}/>
          </>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

const RootAppRouter = withRouter(RootApp) 

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginConnected}/>
        <PrivateRouteConnected path="/" component={RootAppRouter}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Root
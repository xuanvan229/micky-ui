import React, { Component, useEffect } from 'react';
import { Switch, Route } from 'react-router'
import {BrowserRouter, Redirect} from 'react-router-dom';
import Home from '../app/home/page'
import LoginConnected from '../app/login/page'
import {Loading}  from '../components/Loading'
import { connect } from 'react-redux';
import loading from '../assets/images/others/loading.gif'
import axios from 'axios';
import {sendRequestAuth} from '../redux/actions'




const RenderComponent = (props:any) => {
  console.log("propsssss", props.checkAuth.isLogin)
  if(!props.checkAuth.isSend) {
    return (
      props.checkAuth.isLogin === true
          ? <Component/>
          : <Redirect to='/login' />
    );
  }
  return (
    <h1>Loading</h1>
  )
  
}
const mapStateToPropsRender = (state:any) => {
  const { checkAuth } = state
  return { checkAuth }
}


const RenderComponentConnected = connect(mapStateToPropsRender)(RenderComponent)



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
  // console.log(props.page.isFetching)
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


const Login = () => {
  return (
    <div>
      Hello Login
    </div>
  )
}

const RootApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouteConnected exact path="/" component={Home}/>  
        <Route path="/login" component={LoginConnected}/>
        <PrivateRouteConnected path="/post" component={PostConnected}/>
      </Switch>
    </BrowserRouter>
  )
}
export default RootApp
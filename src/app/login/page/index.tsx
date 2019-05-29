import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Row, Col, Menu
} from 'antd';
import { connect } from 'react-redux';
import './style.scss';
import {changeUsername, changePassword, sendLogin} from '../conf/actions'
import {sendRequestAuth} from '../../../redux/actions'

const Login = (props:any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    props.form.validateFields((err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    props.sendLogin()
  }
  const { getFieldDecorator } = props.form;
  
  if(props.loginState.isLogin) {
    props.sendRequestAuth()
    props.history.push('/')
  }
  return (
    <div className = "login">
      <Row justify="center" align="middle" className="login-row"  type="flex">
        <Col className="gutter-row" span={6} xs={12} sm={12} lg={6}>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
        </Form>
      </Col>
     </Row>
    </div>
    
  );
}

const WrappedNormalLoginForm = Form.create({ 
  name: 'normal_login', 
  onFieldsChange(props:any, changedFields:any) {
    if(changedFields.username) {
      props.changeUsername(changedFields.username.value)
    } else if (changedFields.password) {
      props.changePassword(changedFields.password.value)
    }
  },
  mapPropsToFields(props:any) {
    return {
      username: Form.createFormField({
        value: props.loginState.user.username
      }),
      password: Form.createFormField({
        value: props.loginState.user.password
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
 })(Login);


const mapStateToProps = (state:any) => {
  const { loginState } = state
  return {loginState}
}



const LoginConnected = connect(mapStateToProps, {changeUsername, changePassword, sendLogin, sendRequestAuth})(WrappedNormalLoginForm);

export default LoginConnected
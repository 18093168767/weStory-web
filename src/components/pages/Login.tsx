/*
 * @Author: your name
 * @Date: 2021-06-17 19:58:51
 * @LastEditTime: 2021-10-12 15:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\components\pages\Login.tsx
 */
import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { GithubOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Route, useHistory, Redirect, withRouter } from 'react-router-dom';
import {get, post} from "../../service/tools"
const FormItem = Form.Item; 

const Login = (props: any) => {
  let history = useHistory();
  // const { history } = props;
  const handleSubmit = (values: any) => {
    checkUser(values)
  };
  const checkUser = (values: any) => {
    const url = "api/login"
    post({
      data: {
        name: values.userName,
        password: values.password
      },
      url: url
    }).then((res: any)=>{
      if (res.code === 1000) {
        message.success('登录成功');
        history.push('/app/home')
      } else {
        message.success('登录失败');
      }
    })
};

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-logo">
          <h1>vDrag</h1>
          {/* <PwaInstaller /> */}
        </div>
        <Form onFinish={handleSubmit} style={{ maxWidth: '300px' }}>
          <FormItem
            name="userName"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              placeholder="请输入"
            />
          </FormItem>
          <FormItem name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input
              type="password"
              placeholder="请输入密码"
            />
          </FormItem>
          <FormItem>
              <span className="login-form-forgot" style={{ float: 'right', color: "#fff" }}>
                  忘记密码
              </span>
              <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: '100%' }}
              >
                  登录
              </Button>
              <p style={{ display: 'flex', justifyContent: 'space-between', color: "#fff" }}>
                  <span>或 现在就去注册!</span>
                  <span>
                      (第三方登录)
                  </span>
              </p>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default Login
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { GithubOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Route, useHistory, Redirect, withRouter } from 'react-router-dom';


const FormItem = Form.Item; 

const Login = (props: any) => {
  let history = useHistory();
  // const { history } = props;
  const handleSubmit = (values: any) => {
    if (checkUser(values)) {
      history.push('/app/home');
    }
  };
  const checkUser = (values: any) => {
    const users = [
      ['admin', 'admin'],
      ['guest', 'guest'],
    ];
    return users.some((user) => user[0] === values.userName && user[1] === values.password);
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
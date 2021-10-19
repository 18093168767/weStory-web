/*
 * @Author: your name
 * @Date: 2021-10-18 13:56:17
 * @LastEditTime: 2021-10-18 15:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\components\pages\Register.tsx
 */
import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { GithubOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Route, useHistory, Redirect, withRouter } from 'react-router-dom';
import {get, post} from "../../service/tools"
import { KEY, IV, Encrypt } from "../../utils/crypto"
const FormItem = Form.Item; 

const Register = (props: any) => {
  let history = useHistory();
  const handleSubmit = (values: any) => {
    addUser(values)
  };
  const addUser = (values: any) => {
    const url = "api/addUser"
    console.log({
      name: values.userName,
      password: Encrypt(values.password)
    })
    post({
      data: {
        name: values.userName,
        password: Encrypt(values.password)
      },
      url: url
    }).then((res: any)=>{
      if (res && res.code === 1000) {
        message.success('注册成功');
        history.push('/login')
      } else {
        if (res && res.code === 2001) {
          message.error(res.msg);
        } else {
          message.error('网络异常');
        }
      }
    })
  };

  const loginFn = () => {
    history.push('/login')
  }

  return (
    <div className="register">
      <div className="register-form">
        <div className="register-logo">
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
          <FormItem name="passwordConfirm" rules={[{ required: true, message: '请再次输入密码!' }]}>
            <Input
              type="password"
              placeholder="请再次输入密码"
            />
          </FormItem>
          <FormItem>
              <Button
                  type="primary"
                  htmlType="submit"
                  className="register-form-button"
                  style={{ width: '100%' }}
              >
                  注册
              </Button>
              <p style={{ display: 'flex', justifyContent: 'space-between', color: "#fff" }}>
                <span onClick={ loginFn }>登录</span>
              </p>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default Register

import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');

const layout = {
  labelCol: {
    xs: {
      span: 6,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    xs: {
      offset: 0,
      span: 8,
    },
    sm: {
      offset: 8,
      span: 8,
    },
  },
};

export default class SigninPage extends Component {
  notifySuccess = () => {
    toast.success('🦄  successfully logged in!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  Demo = () => {
    const onFinish = (values) => {
      console.log('Success:', values);

      let that = this;

      axios
        .get('https://5ea82ce535f37200166089b5.mockapi.io/api/users', {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          response.data.forEach((value) => {
            if (
              values.email === value.email &&
              values.password === value.password
            ) {
              localStorage.setItem('login', values);
              that.notifySuccess();

              return setTimeout(() => that.props.history.push('/Home'), 1000);
            } else {
              return console.log('check email ,  password');
            }
          });
        })
        .catch(function (error) {
          console.log('error');
        });
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <Form
        {...layout}
        name="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            style={{ marginBottom: '1rem' }}
            block
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          Or <Link to="/signup">Register Now!</Link>
        </Form.Item>
        <ToastContainer />
      </Form>
    );
  };

  render() {
    return <div className="login-form-wrap">{this.Demo()}</div>;
  }
}

// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { QuestionCircleOutlined } from '@ant-design/icons';
const axios = require('axios');
const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 12,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0,
    },
    sm: {
      span: 12,
      offset: 6,
    },
  },
};

function SignupPage(props) {
  const notifySuccess = () => {
    toast.success('🦄  successfully register!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
      // console.log('Received values of form: ', values);
      let that = this;

      axios
        .post('https://5ea82ce535f37200166089b5.mockapi.io/api/users', {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          response.data.forEach((value) => {
            if (
              values.username === value.email &&
              values.password === value.password
            ) {
              return that.props.history.push('/home');
            } else {
              return console.log('check username ,  password');
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      notifySuccess();
      const {
        history: { push },
      } = props;
      setTimeout(() => push('/signin'), 1500);
    };

    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register-form"
        onFinish={onFinish}
        scrollToFirstError
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          name="nickname"
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <Link to="">agreement</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            style={{ marginBottom: '1rem' }}
            block
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
          Or <Link to="/signin">Login</Link>
        </Form.Item>
        <ToastContainer />
      </Form>
    );
  };

  return <div className="register-form-wrap">{RegistrationForm()}</div>;
}

export default SignupPage;

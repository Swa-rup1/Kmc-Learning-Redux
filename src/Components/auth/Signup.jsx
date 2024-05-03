import React from "react";
import { Card, Button, Checkbox, Form, Input, ConfigProvider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const HandelNavigate = () => {
    navigate(-1);
  };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {},
          },
        }}
      >
        <div>
          <Card className=" w-[400px]  mt-5 bg-[#CCCCFF] border-transparent">
            <button onClick={HandelNavigate}>
              <ArrowLeftOutlined /> Back
            </button>
            <div className="text-center font-bold text-base mb-3"> SignUp </div>
            <div>
              <Form
                // className="w-full "
                onFinish={onFinish}
                layout="vertical"
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
              >
                <div className="grid grid-cols-12 gap-x-2 ">
                  <div className=" col-span-6">
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>

                  <div className=" col-span-6">
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>

                  <div className=" col-span-6">
                    <Form.Item
                      label="Contact"
                      name="contact"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Contact No.!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>

                  <div className=" col-span-6">
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </div>

                  <div className=" col-span-6">
                    <Form.Item
                      label="Conform Password"
                      name="cpassword"
                      rules={[
                        {
                          required: true,
                          message: "Conform Your Password!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>

                  <div className=" col-span-12">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </div>

                  <div className=" col-span-12">
                    <Form.Item>
                      <Button
                        className=" font-medium  border-none"
                        htmlType="submit"
                        style={{
                          backgroundColor: " #006400",
                          color: "whitesmoke",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#50623A")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#006400")
                        }
                      >
                        Sign-In
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Signup;

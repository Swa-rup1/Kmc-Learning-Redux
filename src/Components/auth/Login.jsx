import { Card } from "antd";
import { React } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Services/LoginAction";
import { useSelector } from "react-redux";
//import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  //const [isLoading,setIsLoading]=useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("val:", values);
    await userLogin(values)(dispatch).unwrap();
    navigate("/");
  };
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const data=useSelector((state)=>state.authinfo)

  // useEffect(()=>{
  //   if(data.userToken){
  //        navigate("/");
  //   }
  // })

  return (
    <div className=" flex justify-center py-5  bg-[#CCCCFF]">
      <Card
        className=" w-[540px] min-h-80 font-varela border-none bg-transparent 
   "
      >
        <h1 className=" text-lg pb-4 font-bold">Login</h1>
        <div className=" flex">
          <div>
            <Form onFinish={onFinish} layout="vertical">
              <section className=" text-left">
                <Form.Item
                  label="UserName"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  className=" my-2"
                >
                  <Input className=" w-64" />
                </Form.Item>

                <Form.Item
                  label="PassWord"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  className=" my-2"
                >
                  <Input.Password className=" w-64 " />
                </Form.Item>
              </section>

              <section className=" text-left ">
                <Form.Item className=" my-2">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <section className="flex gap-2">
                  <Form.Item>
                    <Button
                      className=" bg-black text-white border-none "
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className=" bg-black text-white border-none "
                      htmlType="submit"
                    >
                      <Link to="/auth/signup">
                        {" "}
                        <p className=" font-varela">SignUp</p>
                      </Link>
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to="/"> </Link>
                  </Form.Item>
                </section>
                <section>
                  <div
                    className="cursor-pointer underline text-white"
                    onClick={showModal}
                  >
                    Forget Password{" "}
                  </div>
                </section>
              </section>
            </Form>
            <div className="flex justify-center mt-4">
              <Button className="bg-white text-black border-black border-solid border w-64">
                Log in with Google
              </Button>
            </div>
          </div>

          <Modal
            title="Get a code"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          ></Modal>
        </div>
      </Card>
    </div>
  );
};

export default Login;

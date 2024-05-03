import React from "react";

import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
import { adminItems } from "../UserDashboard/utils/Array";

const Adminlayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const handelRoute = (e) => {
    console.log("event", e);
    navigate(`${e.key}`);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className=" text-white"
      >
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={adminItems}
            onClick={handelRoute}
          />
        </Sider>

        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Adminlayout;

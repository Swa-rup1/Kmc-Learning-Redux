import React, { useState } from "react";
import Order from "../UserDashboard/Order";
import {
  Button,
  Image,
  Layout,
  theme,
  Avatar,
  Badge,
  Drawer,
  Space,
  Dropdown,
  AutoComplete,
  Input,
} from "antd";

import { ConfigProvider } from "antd";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import {
  LoginOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProduct } from "../../Services/AllProduct";

// import { useAppContext } from "../UserDashboard/ContextApi";

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  // Drawer Antd JS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Redux API OF REUSABLE COMPONENT
  const cardItem = useSelector((state) => state);
  // console.log("cardlist", cardItem);

  // Context API OF REUSABLE COMPONENT

  // const { appState } = useAppContext();
  const handleNavigate = (item) => {
    navigate(item.link);
  };

  const navItems = [
    {
      name: "Blog",
      link: "/blog",
      key: 1,
    },
    {
      name: "AboutUs",
      link: "/aboutus",
      key: 2,
    },
    {
      name: "ContactUs",
      link: "/contact",
      key: 3,
    },
  ];

  const authInfo = [
    {
      name: "Login",
      link: "../auth/Login",
      key: 11,
    },
    {
      name: "Signup",
      link: "../auth/Signup",
      key: 12,
    },
  ];

  const items = [
    {
      key: "1",
      label: <div onClick={() => handelClick("/user/profile")}>Profile</div>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <div onClick={() => handelClick("/user/settings")}>Settings</div>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <div onClick={() => handelClick("/user/login")}>Logout</div>,
      icon: <LoginOutlined />,
    },
  ];

  // const handelClick = (e) => {
  //   if (e === 3) {
  //     dispatch(logout());
  //   } else {
  //     navigate(`${e}`);
  //   }
  //   console.log("frr", e);
  // };
  // console.log("test", cardItem?.authinfo.userInfo.token);

  const handleSearch = (value) => {
    console.log("hhh", value);
    dispatch(fetchSearchProduct(value.target.value));
  };

  const data = useSelector((state) => state.searchProduct);

  console.log("aa", data.users.data);

  const { data: searchdata, loading: searchloading } = useSelector(
    (state) => state?.searchProduct
  );

  const onSelect = (e, option) => {
    console.log("onselect", e, option);
    navigate(`/searchproduct/${option.id}`);
   
  };

  return (
    <ConfigProvider>
      <Layout>
        <Header
          style={{
            background: "linear-gradient(to right, #800080, #FF1493)",
            position: "sticky",
            top: 0,
            zIndex: 0,
            width: "100%",
          }}
        >
          <div className="flex flex-row justify-between items-center m-2 h-10 Header">
            <div className="logo">
              <div>
                <Image
                  className=" object-contain "
                  width={30}
                  height={30}
                  src="/src/image/Story.jpeg"
                />
              </div>
            </div>

            {/* AutoComplete Search Bar */}
            <div>
              <AutoComplete
                popupMatchSelectWidth={200}
                style={{
                  width: 300,
                }}
                options={searchdata?.data?.map((item) => {
                  return {
                    ...item,
                    value: item?.title,
                    label: item.category,
                  };
                })}
                onSelect={onSelect}
                size="large"
              >
                <Input.Search
                  size="large"
                  placeholder="Search Category"
                  enterButton
                  onPressEnter={handleSearch}
                />
              </AutoComplete>
            </div>

            {/* Nav-Ul */}

            <div className="iteminfo font-bold  flex flex-row p-4  gap-3  ">
              {navItems?.map((item, index) => {
                return (
                  <div
                    onClick={() => handleNavigate(item)}
                    className=" hover:text-green-700 hover:cursor-pointer"
                    key={index}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* Login Component */}

            <div className=" iteminfo login flex gap-2">
              {/* Badge */}
              <div>
                <Badge
                  count={
                    cardItem?.addtocard.data
                      ? [...new Set(cardItem.addtocard.data)].length
                      : 0
                  }
                >
                  {/* {[...new Set(appState?.addtocart)].length} */}
                  <Avatar
                    size={28}
                    icon={<ShoppingCartOutlined />}
                    onClick={showDrawer}
                  />
                </Badge>
              </div>

              {authInfo?.map((item) => (
                <div key={item.link} onClick={() => navigate(item.link)}>
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold     py-px rounded  "
                    type="primary"
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
            </div>

            {/* <ShoppingCartOutlined /> Area */}

            {/* Badge Of Cart */}
          </div>
        </Header>

        {/* Content Area */}
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer
          style={{
            background: "linear-gradient(to right, #800080, #FF1493)",
            textAlign: "center",
            color: "white",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Order />
      </Drawer>
    </ConfigProvider>
  );
};
export default UserLayout;

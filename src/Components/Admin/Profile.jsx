import React from "react";
import Header from "./Header";
import { Form } from "antd";
import { AntInput, SaveButton } from "../Common";

const Profile = () => {
  return (
    <>
      <div>
        <Header name="Profile Section" />
      </div>

      <Form
        className="grid md:grid-cols-12 gap-3 grid-flow-row"
        layout="vertical"
      >
        <div className="md:col-span-3">
          <AntInput required name="first_name" label="First Name" />
        </div>
        <div className="md:col-span-3">
          <AntInput required name="mid_name" label="Midname" />
        </div>
        <div className="md:col-span-3">
          <AntInput required name="last_name" label="Last Name" />
        </div>
        <div className="md:col-span-10">
          <AntInput required name="email" label="Email" type="email" />
        </div>
        <div className="md:col-span-10">
          <AntInput required name="password" label="Password" type="password" />
        </div>

        <div className="md:col-span-4 flex items-center justify-center">
          <SaveButton name="Save" htmlType="submit" />
        </div>
      </Form>
    </>
  );
};

export default Profile;

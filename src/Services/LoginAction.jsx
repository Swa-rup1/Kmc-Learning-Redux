import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Button, Divider, notification, Space } from "antd";

// Common practice of developers is services vitra all api integration hunxa

export const userLogin = createAsyncThunk(
  // This is key which should be unique
  "auth/Login",

  async ({ username, password }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        { username, password },
        config
      );

      notification.success({
        message: "Success",
        description: "Login successful",
      });

      return data;
    } catch (error) {
      console.log("errormsg: ", error?.response?.data);

      notification.error({
        message: "Error",
        description: error?.response?.data,
      });
    }
  }
);

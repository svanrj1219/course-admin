import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import "../style/login.scss";
import { LoginApi } from "../request/api";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { showToast, ToastmapDispatchToProps } from "../utils";
import logo from "../assets/image/LOGO.png";

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  const login = () => {
    LoginApi({ username: user, password }).then((res) => {
      if (!res.code) {
        showToast(
          { showToast: true, type: "success", content: "登录成功" },
          props
        );
        localStorage.setItem("x-auth-token", "Bearer " + res.token);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        showToast(
          { showToast: true, type: "error", content: res.message },
          props
        );
      }
    });
  };
  return (
    <div className="login-main">
      <div className="bg"></div>
      <div className="header">
        <h1 className="title">
          欢迎使用貮拾忆小程序
          <br />
          后台管理系统
        </h1>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="login-form">
        <Input
          className="user"
          placeholder="请输入账号"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></Input>
        <Input
          className="password"
          placeholder="请输入密码"
          type="password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        ></Input>
        <Button variant="contained" className="login" onClick={login}>
          登录
        </Button>
      </div>
    </div>
  );
}
export default connect(ToastmapDispatchToProps, null)(Login);

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../page/app";
import Home from "../page/home";
import Login from "../page/login";
import Manage from "../page/manage";
import Message from "../page/message";
import TaskLog from "../page/taskLog";
import MallLog from "../page/mallLog";
import Task from "../page/task";
import AddCourse from "../page/addCourse";

// RequireAuth 组件相当于一个拦截器，是否返回被拦截的组件要听他的
function RequireAuth({ children }) {
  const authed = localStorage.getItem("x-auth-token");

  return authed ? ( // 判断 localstorage 中登录状态是否为 true
    children
  ) : (
    <Navigate to="/login" replace /> // 跳转到登录
  );
}

export default function IRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="app" element={<App />}></Route>
                <Route path="manage" element={<Manage />}></Route>
                <Route path="message" element={<Message />}></Route>
                <Route path="manage/tasklog" element={<TaskLog />}></Route>
                <Route path="manage/Task" element={<Task />}></Route>
                <Route path="manage/mallLog" element={<MallLog />}></Route>
                <Route path="manage/addCourse" element={<AddCourse />}></Route>
              </Routes>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import Tabbar from "../components/tabbar";
import NavBar from "../components/navBar";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import "../style/manage.scss";
import classInfo from "../assets/icon/classInfo.png";
import add from "../assets/icon/add.png";
import mall from "../assets/icon/mall.png";
import task from "../assets/icon/task.png";
import tasklog from "../assets/icon/tasklog.png";
import malllog from "../assets/icon/malllog.png";
import addmall from "../assets/icon/addmall.png";
import addtask from "../assets/icon/addtask.png";

import { useNavigate } from "react-router-dom";

export default function Manage() {
  const Navigate= useNavigate()
  return (
    <div>
      <NavBar>内容管理</NavBar>
      <List className="manage-list">
        <Card className="manage">
          <span className="title">课程管理</span>
          <div className="class" style={{ justifyContent: "start" }}>
            <div className="item">
              <img src={classInfo} alt="" />
              <span>课程查看</span>
            </div>
            <div className="item">
              <img src={add} alt="" />
              <span>添加课程</span>
            </div>
          </div>
        </Card>
        <Card className="manage">
          <span className="title">积分商城</span>
          <div className="class">
            <div className="item">
              <img src={task} alt="" />
              <span>任务查看</span>
            </div>
            <div className="item">
              <img src={mall} alt="" />
              <span>商品查看</span>
            </div>
            <div className="item" onClick={()=>{
              return Navigate("/manage/tasklog")
            }}>
              <img src={tasklog} alt="" />
              <span>任务日志</span>
            </div>
            <div className="item">
              <img src={malllog} alt="" />
              <span>兑换日志</span>
            </div>
            <div className="item">
              <img src={addmall} alt="" />
              <span>添加商品</span>
            </div>
            <div className="item">
              <img src={addtask} alt="" />
              <span>添加任务</span>
            </div>
          </div>
        </Card>
      </List>
      <Tabbar></Tabbar>
    </div>
  );
}

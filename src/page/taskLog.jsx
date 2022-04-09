import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { GettaskLog } from "../request/api";
import nil from "../assets/image/nil.png";
import "../style/taskLog.scss";

function TaskLog(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    GettaskLog().then((res) => {
      if (res.data.length === 0) {
        setData(
          <div
            className="nil"
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={nil} alt="" style={{ width: "100%" }} />
          </div>
        );
      } else {
        setData(
          res.data.map((d) => {
            return (
              <div className="item" key={d.id}>
                <div className="left">
                  <div className="user">
                    <Avatar
                      alt={d.username}
                      src={d.avatar}
                      sx={{ width: 24, height: 24 }}
                    />
                    <span className="name">{d.username}</span>
                  </div>
                  <div className="time">{d.date}</div>
                </div>
                <div className="right">
                  <span>+{d.integration}</span>
                  <div className="content">{d.remarks}</div>
                </div>
              </div>
            );
          })
        );
      }
    });
  }, []);
  return (
    <div className="taskLog">
      <NavBar>任务日志</NavBar>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>{data}</List>
    </div>
  );
}
export default TaskLog;

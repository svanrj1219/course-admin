import React, { useEffect, useState } from "react";
import Tabbar from "../components/tabbar";
import NavBar from "../components/navBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { showToast, ToastmapDispatchToProps } from "../utils";
import { GetUnconverted, UpdateUnconverted } from "../request/api";

function Message(props) {
  const [data, setData] = useState([]);
  const update = (e) => {
    UpdateUnconverted({ id: e }).then((res) => {
      showToast(
        { showToast: true, type: "success", content: res.message },
        props
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };
  useEffect(() => {
    GetUnconverted().then((res) => {
      setData(
        res.data.map((d) => {
          return (
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              key={d.id}
            >
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="mall"
                    src={d.url}
                    sx={{ width: 60, height: 60, marginRight: 3 }}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <ListItemText primary={d.name} />
                <Button variant="contained" onClick={() => update(d.id)}>
                  兑换
                </Button>
              </ListItem>
              <Divider
                variant="inset"
                component="li"
                sx={{ width: "100%", marginLeft: 0 }}
              />
            </List>
          );
        })
      );
    });
  }, []);
  return (
    <div>
      <NavBar>通知</NavBar>
      {data}
      <Tabbar></Tabbar>
    </div>
  );
}
export default connect(ToastmapDispatchToProps, null)(Message);

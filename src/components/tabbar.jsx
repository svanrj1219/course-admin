import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Badge from "@mui/material/Badge";
import "../style/tabbar.scss";
import shuju from "../assets/icon/shuju.png";
import shoucang from "../assets/icon/shoucang.png";
import yonghu from "../assets/icon/yonghu.png";
import youjian from "../assets/icon/youjian.png";
import { useNavigate } from "react-router-dom";
import withRouter from "../router/withRouter";
import { GetUnconverted } from "../request/api";

function Tabbar(props) {
  const [value, setValue] = React.useState("1");
  const [count, setCount] = React.useState();
  const navigate = useNavigate();

  useEffect(() => {
    GetUnconverted().then((res) => {
      setCount(res.data.count);
    });
    switch (props.location.pathname) {
      case "/home":
        setValue("4");
        break;
      case "/":
        setValue("1");
        break;
      case "/manage":
        setValue("2");
        break;
      case "/message":
        setValue("3");
        break;
      default:
        break;
    }
  }, [props.location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTimeout(() => {
      switch (newValue) {
        case "1":
          navigate("/");
          break;
        case "4":
          navigate("/home");
          break;
        case "3":
          navigate("/message");
          break;
        case "2":
          navigate("/manage");
          break;
        default:
          break;
      }
    }, 300);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="首页"
        value="1"
        to="/"
        icon={<img src={shuju} alt="" style={{ width: 35 }} />}
      />
      <BottomNavigationAction
        label="内容管理"
        value="2"
        to="/home"
        icon={<img src={shoucang} alt="" style={{ width: 35 }} />}
      />
      <BottomNavigationAction
        label="通知"
        value="3"
        icon={
          <Badge badgeContent={count} color="primary">
            <img src={youjian} alt="" style={{ width: 35 }} />
          </Badge>
        }
      />
      <BottomNavigationAction
        label="我的"
        value="4"
        icon={<img src={yonghu} alt="" style={{ width: 35 }} />}
      />
    </BottomNavigation>
  );
}

export default withRouter(Tabbar);

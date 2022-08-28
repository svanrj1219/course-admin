import React from "react";
import Tabbar from "../components/tabbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../style/home.scss";

export default function Home() {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="home">
      <Button variant="contained" onClick={exit}>
        退出
      </Button>
      <Tabbar></Tabbar>
    </div>
  );
}

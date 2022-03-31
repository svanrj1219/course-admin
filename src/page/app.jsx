import React from "react";
import Tabbar from "../components/tabbar";
import TodayTask from "../components/todayTask";
import Integral from "../components/integral";
import TaskSummary from "../components/taskSummary";
import MallSummary from "../components/mallSummary";
import NavBar from "../components/navBar";
import "../style/App.scss";

function App(props) {
  return (
    <div className="App">
      <NavBar>首页</NavBar>
      <TodayTask></TodayTask>
      <Integral></Integral>
      <TaskSummary></TaskSummary>
      <MallSummary></MallSummary>
      <Tabbar></Tabbar>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "../style/App.scss";
import ReactEcharts from "echarts-for-react";
import { Card } from "@mui/material";
import { GetTaskSummary } from "../request/api";

function TaskSummary(props) {
  const [optiop, setOption] = useState([]);
  const getOption = () => {
    let option = {
      title: {
        text: "任务累积完成数量",
        left: "center",
        top: 0,
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}{c}次",
      },

      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          data: optiop,
          label: {
            show: true,
            formatter: "{d}%",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    return option;
  };
  useEffect(() => {
    GetTaskSummary().then((res) => {
      let series = [];
      res.data.forEach((e) => {
        if (e.value!==0) {
          series.push({ value: e.value, name: e.name });
        }
      });
      setOption(series);
    });
  }, []);
  return (
    <div className="App">
      <Card
        style={{
          width: "90%",
          height: "100%",
          marginTop: "20px",
          position: "relative",
          padding: "10px 0",
        }}
      >
        <ReactEcharts option={getOption()} />
      </Card>
    </div>
  );
}

export default TaskSummary;

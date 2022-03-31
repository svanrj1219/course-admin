import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import "../style/App.scss";
import ReactEcharts from "echarts-for-react";
import { Card } from "@mui/material";
import { GetTodayTaskApi } from "../request/api";

function TodayTask(props) {
  const [optiop, setOption] = useState({});
  const [open, setOpen] = useState(true);
  const getOption = () => {
    let option = {
      title: {
        text: "今日任务完成数量",
        left: "center",
        top: 10,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          barMaxWidth: 30,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
            },
          },
        },
      ],
    };
    return option;
  };
  useEffect(() => {
    var options = getOption();
    GetTodayTaskApi().then((res) => {
      let xAxis = [];
      let series = [];
      res.data.forEach((e) => {
        xAxis.push(e.name);
        series.push(e.count);
         options.yAxis.max = e.count + 5;
         if (e.jf > options.xAxis.max) {
           options.yAxis.max = e.conut + 5;
         }
      });
      options.xAxis.data = xAxis;
      options.series[0].data = series;
      setOption(options);
      setOpen(false);
    });
  }, []);
  return (
    <div className="App">
      <Loading open={open}></Loading>
      <Card
        style={{
          width: "90%",
          marginTop: "20px",
          position: "relative",
          padding: "10px 0",
        }}
      >
        <ReactEcharts option={optiop} />
      </Card>
    </div>
  );
}

export default TodayTask;

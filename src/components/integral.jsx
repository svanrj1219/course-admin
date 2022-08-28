import React, { useEffect, useState } from "react";
import "../style/App.scss";
import ReactEcharts from "echarts-for-react";
import { Card } from "@mui/material";
import { GetHistoryJf } from "../request/api";

function Integral() {
  const [optiop, setOption] = useState({});
  const getOption = () => {
    let option = {
      title: {
        text: "累计积分数量",
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
        type: "value",
      },
      yAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          interval: 0,
          rotate: 50,
        },
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
                position: "right", //在上方显示
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
    GetHistoryJf().then((res) => {
      let yAxis = [];
      let series = [];
      res.data.forEach((e) => {
        yAxis.push(e.name);
        series.push(e.jf);
        options.xAxis.max = e.jf + 1000;
        if (e.jf > options.xAxis.max) {
          options.xAxis.max = e.jf + 1000;
        }
      });
      options.yAxis.data = yAxis;
      options.series[0].data = series;

      setOption(options);
    });
  }, []);
  return (
    <div className="App">
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

export default Integral;

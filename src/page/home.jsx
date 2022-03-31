import React, { useState } from "react";
import { Button } from "antd";
import Tabbar from "../components/tabbar";

export default function Home() {
  var [count, setCount] = useState(0);

  return (
    <div className="home">
      <p>{count}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        增加
      </Button>
      <Tabbar></Tabbar>
    </div>
  );
}

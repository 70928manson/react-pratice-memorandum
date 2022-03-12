import { useState } from "react";
//useState -> 變數改變時，畫面也會同步渲染

import Edit from "./components/Edit";
import List from "./components/List";
import "./Home.css";

//className連接css
const Home = () => {
  //useState有幾個內容物，執行幾次
  //最一開始備忘錄沒有東西，初始值為空陣列
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;

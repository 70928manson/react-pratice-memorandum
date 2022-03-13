import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./components/Edit";
import List from "./components/List";
import "./Home.css";

//簡化程式碼
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  //SyntaxError: Unexpected token < in JSON at position 0   res.json不會正確轉檔
  //忘記先npm run server把server開起來 OAO
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  // fetch vs axios
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

//className連接css
const Home = () => {
  //useState -> 變數改變時，畫面也會同步渲染
  //最一開始備忘錄沒有東西，初始值為空陣列
  const [data, setData] = useState([]);

  //useRef 不管渲染幾次，除非f5，畫面都會是預設值
  const submittingStatus = useRef(false);

  //useEffect -> 狀態被變動後會觸發某事情
  useEffect(() => {
    //如果不是在送資料的狀態，直接return掉
    if(!submittingStatus.current) {
      return
    }
    //點下去新增按鈕設成true，fetch完成設定回false
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData}  submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;

import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  //text input初始值: 空字串
  const [text, setText] = useState("");
  function textChange(e) {
    setText(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  //變數text date time跟useState綁一起，再新增到item裡面
  console.log(text, date, time);

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      //搭配解構
      return [
        {
          id: v4(), //uuid 生成獨一無二的id
          text,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>Manson備忘錄</h1>
      <p>記事:</p>
      <input type="text" value={text} onChange={textChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;

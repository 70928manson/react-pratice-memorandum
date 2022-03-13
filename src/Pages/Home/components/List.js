import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  //listData來自Home prop過來的陣列
  return (
    <div className="list">
      {
        //key不能用index，會影響效能 -> 項目刪除會導致順序重排
        listData.map((item) => {
          const { text, date, time, id } = item;
          //左邊text為item裡的變數
          return (
            <Item
              key={id}
              id={id}
              text={text}
              date={date}
              time={time}
              deleteData={deleteData}
              submittingStatus={submittingStatus}
            />
          );
        })
      }
    </div>
  );
};

export default List;

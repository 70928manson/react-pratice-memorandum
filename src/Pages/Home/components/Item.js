//從list prop傳出 text date time資料
const Item = ({ id, text, date, time, deleteData, submittingStatus }) => {

  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function(prev) {
        return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>{text}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;

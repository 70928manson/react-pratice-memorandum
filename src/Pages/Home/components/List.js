import Item from './Item'; 

const arr = [1, 2, 3];

//array for many item
const List = () => {
    return <div className="list">
        {
            arr.map(item => <div>{item}</div>)
        }
        <Item />
    </div>;
}

export default List;
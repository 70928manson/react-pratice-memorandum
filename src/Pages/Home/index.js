import Edit from "./components/Edit";
import List from "./components/List";
import './index.css'

//className連接css
const Home = () => {
    return <div className = "app">
        <Edit />
        <List />
    </div>;
}

export default Home;
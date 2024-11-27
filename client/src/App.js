import "./App.css";
import Header from "./component/Header.jsx";
import Description from "./component/Description.jsx";
import Footer from "./component/Footer.jsx";
import List from "./component/List.jsx";
import Bar from "./component/Bar.jsx";
import AddTask from "./component/AddTask.jsx";
import ViewPost from "./component/ViewPost.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <AddTask />
      <ViewPost />
      <Bar />
      <List/>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./component/Header.jsx";
import Description from "./component/Description.jsx";
import Footer from "./component/Footer.jsx";
import List from "./component/List.jsx";
import Bar from "./component/Bar.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Bar />
      <List />
      <Footer />
    </div>
  );
}

export default App;

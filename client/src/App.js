import "./App.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import AppRouter from "./component/AppRouter.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import AppRouter from "./component/AppRouter.jsx";
import loginState from "./store/loginState.js"
import { useEffect } from "react";

function App() {
  const {setIsAuth, setIsLoadingAuth} = loginState();

  useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoadingAuth(false)
  }, [])

  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import loginState from "../store/loginState.js";

export default function Signup() {
    const navigate = useNavigate();
    const setIsAuth = loginState((state) => state.setIsAuth);
    
    const signup = () => {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }

  return (
    <div className="container">
      <h1>Регистрация</h1>
      <form>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Почта" />
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Подтвердите пароль"
          />
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-info" onClick={() => signup()}>
            Регистрация
          </button>
        </div>
        <button onClick={() => navigate("/signin")} type="button" className="btn btn-link">
          Вход
        </button>
      </form>
    </div>
  );
}

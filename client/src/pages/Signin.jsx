import React from "react";
import { useNavigate } from "react-router-dom";
import loginState from "../store/loginState.js";

export default function Signin() {
  const navigate = useNavigate();
  const setIsAuth = loginState((state) => state.setIsAuth);
  return (
    <div className="container">
      <h1>Вход</h1>
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
          <button className="btn btn-info" onClick={() => setIsAuth(true)}>
            Войти
          </button>
        </div>
        <button
          onClick={() => navigate("/signup")}
          type="button"
          className="btn btn-link"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
}

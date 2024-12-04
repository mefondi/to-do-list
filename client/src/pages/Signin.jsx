import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginState from "../store/loginState.js";

export default function Signin() {
  const navigate = useNavigate();
  const login = loginState((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <div className="container">
      <h1>Вход</h1>
      <form>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            placeholder="Почта"
          />
        </div>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            placeholder="Пароль"
          />
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-info" onClick={(event) => signin(event)}>
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

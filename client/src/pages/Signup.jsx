import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginState from "../store/loginState.js";

export default function Signup() {
  const navigate = useNavigate();
  const registration = loginState((state) => state.registration);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    await registration(email, password, name);
  };

  return (
    <div className="container">
      <h1>Регистрация</h1>
      <form>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-control"
            placeholder="Имя"
          />
        </div>
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
          <button className="btn btn-info" onClick={(event) => signup(event)}>
            Регистрация
          </button>
        </div>
        <button
          onClick={() => navigate("/signin")}
          type="button"
          className="btn btn-link"
        >
          Вход
        </button>
      </form>
    </div>
  );
}

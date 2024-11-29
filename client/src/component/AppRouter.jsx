import React from "react";
import Posts from "../pages/Posts.jsx";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Error from "../pages/Error.jsx";
import loginState from '../store/loginState.js'
import { Route, Routes, Navigate } from "react-router-dom";

export default function AppRouter() {
  const {isAuth, isLoadingAuth} = loginState();

  if (isLoadingAuth) {
    return <div className="spinner-border" role="status"></div>
  }

  return (
    <div className="App">
      {isAuth ? (
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/Signin" element={<Navigate to="/" />} />
          <Route path="/Signup" element={<Navigate to="/" />} />
          <Route path="/error" element={<Error/>}/>
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="*" element={<Navigate to="/Signin" />} />
        </Routes>
      )}
    </div>
  );
}

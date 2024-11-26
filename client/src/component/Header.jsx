import React from "react";
import cl from './style/Header.module.css'

export default function MyHeader() {
  return (
    <nav className='navbar navbar-expand-lg= navbar-light bg-light'>
      <a className={['navbar-brand', cl.Navbar].join(' ')} href="#">
        Navbar
      </a>
      <button className={['btn', 'btn-outline-success', cl.Auth].join(' ')} type="submit">
        Auth
      </button>
    </nav>
  );
}

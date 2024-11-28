import React from "react";
import cl from './style/Header.module.css'
import loginState from '../store/loginState.js'

export default function MyHeader() {
  const {isAuth, setIsAuth} = loginState();
  return (
    <nav className='navbar navbar-expand-lg= navbar-light bg-light'>
      <p className={['navbar-brand', cl.Navbar].join(' ')} >
        Navbar
      </p>
      {isAuth? 
      (<button onClick={() => setIsAuth(false)} className={['btn', 'btn-outline-success', cl.Auth].join(' ')} type="submit">
        Выйти
      </button>)
      :(<div></div>)
      }
    </nav>
  );
}

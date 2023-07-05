//import React from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'

function Nav_Mobile() {
  return (
    <div className='nav-mobile'>
      <Menu id={ "sidebar" } className={ "my-menu" } width={'100%'}>
        <NavLink id="home" className="menu-item" to="/">Página Inicial</NavLink>
        <NavLink id="about" className="menu-item" to="/historia">Nossa História</NavLink>
        <NavLink id="contact" className="menu-item" to="/quem_somos">Quem Somos</NavLink>
        <NavLink id="contact" className="menu-item" to="/servicos">Nossos Serviços</NavLink>
      </Menu>
      <Outlet />

    </div>
  )
}

export default Nav_Mobile

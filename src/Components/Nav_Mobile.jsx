//import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'
import MENU from '../assets/menu.svg'

function Nav_Mobile() {
  
  return (
    <div className='nav-mobile'>
      <img src={MENU} className='menu-svg' />
      <Menu id={ "slide" } className={ "my-menu" } width={'100%'}>
        <NavLink id="home" className="menu-item mi1" to="/">Página Inicial</NavLink>
        <NavLink id="about" className="menu-item" to="/historia">Nossa História</NavLink>
        <NavLink id="contact" className="menu-item" to="/quem_somos">Quem Somos</NavLink>
        <NavLink id="contact" className="menu-item" to="/servicos">Nossos Serviços</NavLink>
        
      </Menu>
      <Outlet />

    </div>
  )
}

export default Nav_Mobile

//import React from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import './nav.css'

function Nav_Mobile() {
  return (
    <div className='nav-mobile'>
      <Menu id={ "sidebar" } className={ "my-menu" } width={'100%'}>
        <a id="home" className="menu-item" href="/">Página Inicial</a>
        <a id="about" className="menu-item" href="/historia">Nossa História</a>
        <a id="contact" className="menu-item" href="/quem_somos">Quem Somos</a>
        <a id="contact" className="menu-item" href="/servicos">Nossos Serviços</a>
      </Menu>
    </div>
  )
}

export default Nav_Mobile

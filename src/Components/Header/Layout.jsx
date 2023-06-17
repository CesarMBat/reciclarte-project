//import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import '../../App.css'
const Layout = () => {
    return (
        <div>
            <header className='header-menu-true'>
                <div className="nav">
                    <h1 className="title" to="/index">Recicl&#39;Arte</h1>

                    <ul className="nav-header">
                        <li className="list-header">
                            {' '}
                            <NavLink to="/" className="a-nav">
                                Página Inicial
                            </NavLink>{' '}
                        </li>
                        <li className="list-header">
                            <NavLink to="/historia" className="a-nav">
                                Nossa História
                            </NavLink>
                        </li>
                        <li className="list-header">
                            {' '}
                            <NavLink to="/quem_somos" className="a-nav">
                                Quem Somos
                            </NavLink>{' '}
                        </li>
                        <li className="list-header">
                            {' '}
                            <NavLink to="/servicos" className="a-nav">
                                Nossos Serviços
                            </NavLink>{' '}
                        </li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;

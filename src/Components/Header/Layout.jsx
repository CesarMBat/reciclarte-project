import { Outlet, NavLink } from 'react-router-dom';
import '../../App.css'
import Media from 'react-media';
import Nav_Mobile from '../Nav_Mobile';


const Layout = () => {
    return (
        <div>
            <Media query="(min-width: 600px)">{matches => {
                return matches ? <header className='header-menu-true'>
                <div className="nav">
                    <NavLink to="/" className='h1-title'>
                        <h1 className="title">Recicl&#39;Arte</h1>
                    </NavLink>

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
            </header>  : < Nav_Mobile />
            }}
            </Media>
            
            <Outlet />
        </div>
    );
};

export default Layout;

import './App.css';
import History from './Components/carrousel.jsx';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
    return (
        <>
            <HashRouter>
                <header>
                    <div className="nav">
                        <h1 className="title">Recicl&#39;Arte</h1>
    
                        <ul className="nav-header">
                            <li className="list-header">
                                {' '}
                                <NavLink href="#" className="a-nav">
                                    Página Inicial
                                </NavLink>{' '}
                            </li>
                            <li className="list-header">
                                {' '}
                                <NavLink href="/history" className="a-nav">
                                    Nossa História
                                </NavLink>{' '}
                            </li>
                            <li className="list-header">
                                {' '}
                                <NavLink href="#" className="a-nav">
                                    Quem Somos
                                </NavLink>{' '}
                            </li>
                            <li className="list-header">
                                {' '}
                                <NavLink href="#" className="a-nav">
                                    Nossos Serviços
                                </NavLink>{' '}
                            </li>
                        </ul>
                    </div>
                </header>
                <Routes>
                        <Route path="/history" Component={History} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;

import Layout from './Layout';
import grupo from '../assets/grupo.png';
import './quemsomos.css';
import { NavLink } from 'react-router-dom';
//import React from 'react'
const Quemsomos = () => {
    return (
        <div>
            <Layout />
            <main className="main-who">
                <h1>Conheça a gente</h1>
                <img
                    src={grupo}
                    alt="Foto em grupo de TCC da turma de Gestão"
                />
                <ul className='ul-timeline'>
                  <li className='li-timeline'>
                      <NavLink to="/timeline">
                          Veja a nossa linha do tempo
                      </NavLink>
                  </li>{' '}
                </ul>
            </main>
        </div>
    );
};

export default Quemsomos;

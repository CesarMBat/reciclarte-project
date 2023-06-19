import Layout from './Layout';
import grupo from '../assets/grupo.png';
import { NavLink } from 'react-router-dom';
import './quemsomos.css';

//import React from 'react'
const Quemsomos = () => {
    return (
        <div>
            <Layout />
            <main className="main-who main-margin">
                <section className="section-us">
                    <h1>Conheça a gente</h1>
                    <img
                        src={grupo}
                        alt="Foto em grupo de TCC da turma de Gestão"
                    />
                    
                </section>
                <section className="section-timeline">
                    <ul className="ul-timeline">
                        <li>
                            <NavLink to="/timeline" className={'li-timeline'}>
                                LINHA DO TEMPO{' '}
                            </NavLink>
                        </li>{' '}
                        <li>
                            <NavLink to="/objetivo" className={'li-timeline'}>
                                OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL
                            </NavLink>
                        </li>{' '}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Quemsomos;

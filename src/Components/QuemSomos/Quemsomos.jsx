import Layout from '../Header/Layout';
import grupo from '../../assets/grupo.png';
import { NavLink } from 'react-router-dom';
import './quemsomos.css';
import Timeline from './Timeline'
import { useRef } from 'react';
import Objetivo from './Objetivo';
import arrow from '../../assets/up-arrow-svgrepo-com.svg'
//import React from 'react'
const Quemsomos = () => {
    const ref_Timeline = useRef(null);
    const ref_goBack = useRef(null)
    const ref_Objective = useRef(null)
    const handleClick = () => {
        ref_Timeline.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goBack = () => {
        ref_goBack.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goObjetive = () => {
        ref_Objective.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div ref={ref_goBack}>
            <Layout />
            <main className="main-who main-margin">
                <section className="section-us">
                    <h1>Conheça a gente</h1>
                    <img
                        src={grupo}
                        alt="Foto em grupo de TCC da turma de Gestão"
                    />
                    <div className='hover-div hv1'></div>
                    <div className='hover-div hv2'></div>
                    <div className='hover-div hv3'></div>
                    <div className='hover-div hv4'></div>
                    <div className='hover-div hv5'></div>
                    <div className='hover-div hv6'></div>
                </section>
                <section className="section-timeline">
                    <ul className="ul-timeline">
                        <li >
                            <NavLink onClick={handleClick} className={'li-timeline'}>
                                LINHA DO TEMPO{' '}
                            </NavLink>
                        </li>{' '}
                        <li>
                            <NavLink onClick={goObjetive} className={'li-timeline'}>
                                OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL
                            </NavLink>
                        </li>{' '}
                    </ul>
                </section>
                <div style={{ height: '50rem' }}></div>
                <div ref={ref_Timeline}>
                    <Timeline />
                </div>
                <div style={{ height: '50rem' }}></div>

                <div ref={ref_Objective}>
                    <Objetivo />
                </div>



                <div className='div-start-page'>
                    <button onClick={goBack} className='button-start-page'>
                        <img src={arrow} alt="voltar para o começo da página" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Quemsomos;

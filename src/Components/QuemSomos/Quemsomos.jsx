import Layout from '../Header/Layout';
import grupo from '../../assets/grupo.png';
import { NavLink } from 'react-router-dom';
import './quemsomos.css';
import Timeline from './Timeline';
import { useRef } from 'react';
import Objetivo from './Objetivo';

import arrow from '../../assets/up-arrow-svgrepo-com.svg';
import Web from './Web';
import Media from 'react-media';
import TimelineMob from './Timeline_mob';
//import React from 'react'
const Quemsomos = () => {
    const ref_Timeline = useRef(null);
    const ref_goBack = useRef(null);
    const ref_Objective = useRef(null);
    const ref_Web = useRef(null);
    const goTimeline = () => {
        ref_Timeline.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goBack = () => {
        ref_goBack.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goObjetive = () => {
        ref_Objective.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goWeb = () => {
        ref_Web.current?.scrollIntoView({ behavior: 'smooth' });
    };
    let menu_nav = document.getElementsByClassName('section-timeline');

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 100) {
            menu_nav.className = 'section-timeline show';
        } else {
            menu_nav.className = 'section-timeline hide';
        }
    };

    window.addEventListener('scroll', myScrollFunc);

    return (
        <div className="main-overflow">
            <div>
                <Layout />
            </div>{' '}
            <main className="main-who main-margin">
                <section className="section-timeline">
                    <h3 className="h3-nav">Navegue</h3>
                    <ul className="ul-timeline">
                        <li className="li-timeline-">
                            <NavLink
                                onClick={goTimeline}
                                className={'li-timeline'}
                            >
                                LINHA DO TEMPO{' '}
                            </NavLink>
                        </li>{' '}
                        <li className="li-timeline-">
                            <NavLink onClick={goWeb} className={'li-timeline'}>
                                STAKEHOLDERS{' '}
                            </NavLink>
                        </li>{' '}
                        <li className="li-timeline-">
                            <NavLink
                                onClick={goObjetive}
                                className={'li-timeline'}
                            >
                                OBJETIVOS DE <br /> DESENVOLVIMENTO <br />
                                SUSTENTÁVEL
                            </NavLink>
                        </li>{' '}
                    </ul>
                </section>
                <div className="div-start-page">
                    <button onClick={goBack} className="button-start-page">
                        <img src={arrow} alt="voltar para o começo da página" />
                    </button>
                </div>
                <section
                    className="section-us"
                    ref={ref_goBack}
                    style={{ backgroundColor: '#f5f5f5' }}
                >
                    <h1 className="home-title">Conheça nossa equipe</h1>

                    <img
                        src={grupo}
                        alt="Foto do grupo de gestão"
                        className="img-grupo"
                    />
                </section>

                <div style={{ height: '50rem' }} className="div-space"></div>
                <div ref={ref_Timeline}>
                    <Media query="(min-width: 600px)">
                        {matches => {
                            return matches ? <Timeline /> : <TimelineMob />;
                        }}
                    </Media>
                </div>
                <div
                    style={{ height: '30rem', marginBottom: '10vh' }}
                    className="div-space"
                ></div>
                <div
                    ref={ref_Web}
                    style={{ textAlign: 'center', marginTop: '10vh' }}
                >
                    <Web />
                </div>
                <div style={{ height: '20rem' }} className="div-space"></div>

                <div ref={ref_Objective}>
                    <Objetivo />
                </div>
            </main>
        </div>
    );
};

export default Quemsomos;

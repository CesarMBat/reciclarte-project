//import React from 'react'
import './services.css';
import Layout from '../Header/Layout';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import svgs_images from '../../assets/how';
import Metodos from './Metodos';
import INSTA from '../../assets/SVGSOCIAL/instagram2.svg';
import WPP from '../../assets/SVGSOCIAL/wpp.svg';
import Flor from '../../assets/flor.jpg';
import arrow from '../../assets/up-arrow-svgrepo-com.svg'

const Services = () => {
    const ref_How = useRef(null);
    const ref_Met = useRef(null);
    const ref_goBack = useRef(null)
    const ref_Work = useRef(null)
    const goHow = () => {
        ref_How.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goMet = () => {
        ref_Met.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const goWork = () => {
        ref_Work.current?.scrollIntoView({behavior: 'smooth'})
    }
    const goBack = () => {
        ref_goBack.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div>
            <Layout />
            <div ref={ref_goBack} style={{height: '2vh'}}></div>


            <main className="main-services main-margin">
                <section className="section-timeline-ser">
                    <h3 className="h3-nav">Navegue</h3>

                    <ul className="ul-timeline-ser">
                        <li className="li-timeline-">
                            <NavLink onClick={goHow} className={'li-timeline'}>
                                COMO TRABALHAMOS{' '}
                            </NavLink>
                        </li>{' '}
                        <li className="li-timeline-">
                            <NavLink onClick={goMet} className={'li-timeline'}>
                                MÉTODOS{' '}
                            </NavLink>
                        </li>{' '}
                        <li className="li-timeline-">
                            <NavLink onClick={goWork} className={'li-timeline'}>
                                TRABALHE CONOSCO{' '}
                            </NavLink>
                        </li>{' '}
                        
                    </ul>
                    <div className="div-start-page">
                        <button onClick={goBack} className="button-start-page">
                            <img
                                src={arrow}
                                alt="voltar para o começo da página"
                            />
                        </button>
                    </div>
                </section>
                
                <div ref={ref_How}></div>
                <section className="section-how">
                    <h1 className="h2-how">Como Trabalhamos</h1>
                    <div className="div-how">
                        <section className="section-materials m1">
                            <div className="div-center">
                                <img
                                    src={svgs_images.a}
                                    className="svg-image"
                                />
                                <h1 className="h1-services">Matérias-primas</h1>
                            </div>
                            <ul className="ul-services">
                                <li className="li-service">
                                    Garrafas de vidro
                                </li>
                                <li className="li-service">
                                    Retalhos de tecido
                                </li>
                            </ul>
                        </section>
                        <section className="section-materials m2">
                            <div className="div-center">
                                <img
                                    src={svgs_images.b}
                                    className="svg-image"
                                />
                                <h1 className="h1-services">
                                    Materiais de consumo
                                </h1>
                            </div>

                            <ul className="ul-services">
                                <li className="li-service smaller">
                                    Kit do produtor
                                </li>
                                <li className="li-service smaller">
                                    Tintas, colas e vernizes
                                </li>
                                <li className="li-service smaller">
                                    Ferramentas de corte e acabamento
                                </li>
                            </ul>
                        </section>
                        <section className="section-materials m3">
                            <div className="div-center">
                                <img
                                    src={svgs_images.c}
                                    className="svg-image"
                                />
                                <h1 className="h1-services">Produção</h1>
                            </div>

                            <ul className="ul-services">
                                <li className="li-service smaller">
                                    Coleta dos materiais
                                </li>
                                <li className="li-service smaller">
                                    Higienização
                                </li>
                                <li className="li-service smaller">
                                    Corte e acabamento
                                </li>
                                <li className="li-service smaller">
                                    Práticas de reciclagem
                                </li>
                            </ul>
                        </section>
                        <section className="section-materials m4">
                            <div className="div-center">
                                <img
                                    src={svgs_images.d}
                                    className="svg-image"
                                />
                                <h1 className="h1-services">
                                    Prazo de produção
                                </h1>
                            </div>

                            <ul className="ul-services">
                                <li className="li-service">Média de 2 dias</li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section ref={ref_Met}>
                    <Metodos />
                </section>
                <section className="section-workus" ref={ref_Work}>
                    <h1 className='h1-work'>Trabalhe Conosco</h1>
                    <div className="div-workus">
                        <div className="div-left">
                            <h2 className="h2-msg">
                                Nos mande seu pedido por email:
                            </h2>
                            <NavLink
                                to="/trabalhe_conosco"
                                className="btn-index"
                            >
                                TRABALHE CONOSCO
                            </NavLink>
                        </div>
                        <div className="div-right">
                            <h2 className="h2-msg">Ou por:</h2>
                            <div className="div-contact">
                                <a
                                    className="a-social"
                                    href="https://www.instagram.com/reciclarte.ios/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={INSTA} className='img-svg-social' />
                                </a>
                                <a
                                    href="https://www.instagram.com/reciclarte.ios/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="a-social"
                                >
                                    <img src={WPP} className='img-svg-social' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={Flor} alt="" className="flor" />
                </section>
            </main>{' '}
        </div>
    );
};

export default Services;

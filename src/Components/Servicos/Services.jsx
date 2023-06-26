//import React from 'react'
import './services.css'
import Layout from '../Header/Layout';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import svgs_images from '../../assets/how';

const Services = () => {
    const ref_How = useRef(null)

    const goHow = () => {
        ref_How.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <Layout />
            <main className="main-services main-margin">
                <section className="section-timeline" >
                    <h3 className='h3-nav'>Navegue</h3>

                    <ul className="ul-timeline">
                        <li className='li-timeline-'>
                            <NavLink
                                onClick={goHow}
                                className={'li-timeline'}
                            >
                                COMO TRABALHAMOS{' '}
                            </NavLink>
                        </li>{' '}
                        <li className='li-timeline-'>
                            <NavLink className={'li-timeline'}>
                                VALORES{' '}
                            </NavLink>
                        </li>{' '}
                        <li className='li-timeline-'>
                            <NavLink

                                className={'li-timeline'}
                            >
                                OBJETIVOS DE DESENVOLVIMENTO <br />
                                SUSTENTÁVEL
                            </NavLink>
                        </li>{' '}
                    </ul>
                </section>


                <section className="section-how">


                    <h1 className='h2-how'>Como Trabalhamos</h1>
                    <div className="div-how" ref={ref_How}>
                        <section className="section-materials m1">
                            <div className="div-center">
                                <img src={svgs_images.a} className='svg-image' />
                                <h1 className='h1-services'>Matérias-primas</h1>
                            </div>
                            <ul className='ul-services'>
                                <li className='li-service'>Garrafas de vidro</li>
                                <li className='li-service'>Retalhos de tecido</li>
                            </ul>
                        </section>
                        <section className="section-materials m2">
                            <div className="div-center">
                                <img src={svgs_images.b} className='svg-image' />
                                <h1 className='h1-services'>Materiais de consumo</h1>
                            </div>

                            <ul className='ul-services'>
                                <li className='li-service smaller'>Kit do produtor</li>
                                <li className='li-service smaller'>Tintas, colas e vernizes</li>
                                <li className='li-service smaller'>Ferramentas de corte e acabamento</li>
                            </ul>
                        </section>
                        <section className="section-materials m3">
                            <div className="div-center">
                                <img src={svgs_images.c} className='svg-image' />
                                <h1 className='h1-services'>Produção</h1>
                            </div>

                            <ul className='ul-services'>
                                <li className='li-service smaller'>Coleta dos materiais</li>
                                <li className='li-service smaller'>Higienização</li>
                                <li className='li-service smaller'>Corte e acabamento</li>
                                <li className='li-service smaller'>Práticas de reciclagem</li>
                            </ul>
                        </section>
                        <section className="section-materials m4">
                            <div className="div-center">
                                <img src={svgs_images.d} className='svg-image' />
                                <h1 className='h1-services'>Prazo de produção</h1>
                            </div>

                            <ul className='ul-services'>
                                <li className='li-service'>Média de 2 dias</li>
                            </ul>
                        </section>
                    </div>
                </section>
            </main>{' '}
        </div>
    );
};

export default Services;

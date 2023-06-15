//import React from 'react'
import './services.css'
import Layout from './Layout';

const Services = () => {
    return (
        <div>
            <Layout />
            <main className="main-services main-margin">
                <section className="section-materials m1">
                    <h1>Matérias-primas</h1>
                    <ul className='ul-services'>
                      <li className='li-service'>Garrafas de vidro</li>
                      <li className='li-service'>Retalhos de tecido</li>
                    </ul>
                </section>
                <section className="section-materials m2">
                    <h1>Materiais de consumo</h1>
                    <ul className='ul-services'>
                      <li className='li-service'>Kit do produtor</li>
                      <li className='li-service'>Tintas, colas e vernizes</li>
                      <li className='li-service'>Ferramentas de corte e acabamento</li>
                    </ul>
                </section>
                <section className="section-materials m3">
                    <h1>Produção</h1>
                    <ul className='ul-services'>
                      <li className='li-service'>Coleta dos materiais</li>
                      <li className='li-service'>Higienização</li>
                      <li className='li-service'>Corte e acabamento</li>
                      <li className='li-service'>Práticas de reciclagem</li>
                    </ul>
                </section>
                <section className="section-materials m4">
                    <h1>Prazo de produção</h1>
                    <ul className='ul-services'>
                      <li className='li-service'>Média de 2 dias</li>
                    </ul>
                </section>
            </main>{' '}
        </div>
    );
};

export default Services;

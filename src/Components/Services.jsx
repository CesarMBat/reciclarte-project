//import React from 'react'
import './services.css'
import Layout from './Layout';

const Services = () => {
    return (
        <div>
            <Layout />
            <main className="main-services main-margin">
                <section className="section-materials m1">
                    <h1 className='h1-services'>Matérias-primas</h1>
                    <ul className='ul-services'>
                      <li>Garrafas de vidro</li>
                      <li>Retalhos de tecido</li>
                    </ul>
                </section>
                <section className="section-materials m2">
                    <h1 className='h1-services'>Materiais de consumo</h1>
                    <ul className='ul-services'>
                      <li>Kit do produtor</li>
                      <li>Tintas, colas e vernizes</li>
                      <li>Ferramentas de corte e acabamento</li>
                    </ul>
                </section>
                <section className="section-materials m3">
                    <h1 className='h1-services'>Produção</h1>
                    <ul className='ul-services'>
                      <li>Coleta dos materiais</li>
                      <li>Higienização</li>
                      <li>Corte e acabamento</li>
                      <li>Práticas de reciclagem</li>
                    </ul>
                </section>
                <section className="section-materials m4">
                    <h1 className='h1-services'>Prazo de produção</h1>
                    <ul className='ul-services'>
                      <li>Média de 2 dias</li>
                    </ul>
                </section>
            </main>{' '}
        </div>
    );
};

export default Services;

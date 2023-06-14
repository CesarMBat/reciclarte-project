//import React from 'react'
import './objetivo.css'
import Layout from './Layout';

const Objetivo = () => {
    return (
        <div>
            <Layout />
            <main className='main-objetive main-margin'>
                <h1> OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL</h1>
                <ul className='ul-objetive'>
                    <li>Educação de qualidade</li>
                    <li>Trabalho decente e Crescimento econômico</li>
                    <li>Indústria, Inovação e Infraestrutura</li>
                    <li>Consumo e Produção Responsáveis</li>
                </ul>
            </main>
        </div>
    );
};

export default Objetivo;

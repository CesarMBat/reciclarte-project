//import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import Layout from '../Header/Layout';
import Logo from '../../assets/reciclarte-logo.png';
import './index.css';
import Flowers from '../../assets/teste.png';
import Footer from '../Footer/Footer';
import { useState } from 'react';
const Index = () => {
    const [show, setShow] = useState(null);
    const showClick = () => {
        setShow(!show);
    };

    return (
        <>
            <Layout />
            <main className="main-index main-margin">
                <div className="div-index">
                    <h1>OLÁ! CONHEÇA A: RECICL&#39;ARTE</h1>
                    <h2>ARRANJO DE FLORES</h2>
                    <h2>COM MATERIAIS RECICLADOS</h2>
                    <NavLink to="/trabalhe_conosco" className="btn-index">
                        TRABALHE CONOSCO
                    </NavLink>

                    <img
                        src={Logo}
                        alt="logo da Recicl'arte"
                        className="img-logo"
                        onClick={showClick}
                    />
                    <div className={`show-div ${show ? 'teste' : ''}`}>
                        <p className='p-showing'>
                            A RECICL&#39;ARTE é uma empresa que presta serviços
                            de decoração com materiais reciclados, podemos
                            oferecer diversos produtos que deixarão seu local de
                            escolha mais agradável.
                        </p>
                    </div>
                </div>
                <div className="div-imgs-home">
                    <img
                        src={Flowers}
                        alt="flores-lindas"
                        className="imgs-flowers"
                    />
                </div>
            </main>
            <Footer />
            <Outlet />
        </>
    );
};

export default Index;

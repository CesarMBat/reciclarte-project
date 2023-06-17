//import React from 'react'
import Layout from '../Header/Layout';
import Logo from '../../assets/reciclarte-logo.png'
import './index.css'
import Flowers from '../../assets/teste.png'
import Footer from '../Footer/Footer';
const index = () => {
    return (
        <>
            <Layout/>
            <main className="main-index main-margin">
                <div className="div-index">
                    <h1>OLÁ! CONHEÇA A: RECICL&#39;ARTE</h1>
                    <h2>ARRANJO DE FLORES</h2>
                    <h2>COM MATERIAIS RECICLADOS</h2>
                    <img src={Logo} alt="logo da Recicl'arte" />
                </div>
                <div className="div-imgs-home">
                    <img src={Flowers} alt="flores-lindas" className="imgs-flowers"/>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default index;

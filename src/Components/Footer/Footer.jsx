//import React from 'react'
import './footer.css';
import Insta from '../../assets/instagram.svg';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <section className="section-footer section-left">
                    <small className="small-footer">Entre em contato: </small>
                    <a
                        href="https://www.instagram.com/reciclarte.ios/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Insta} alt="Nosso Instagram" />
                    </a>{' '}
                    <small className="small-footer">(11) 96383-7232 / recilarteios@gmail.com</small>
                </section>
                <section className="section-footer section-center">
                    <small className="small-footer small-center">
                        Desenvolvido por{' '}
                        <small className="cytech">&copy; CYTECH</small>
                    </small>
                </section>
                <section className="section-footer section-right">
                    <small className="small-footer">Nosso endereço: </small>
                    <small className="small-footer">
                        R. Madalena, 172 - Vila Madalena, São Paulo - SP
                    </small>
                </section>
            </footer>
        </>
    );
};

export default Footer;

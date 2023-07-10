//import React from 'react'
import EMAIL from '../../assets/email.svg'
import Layout from '../Header/Layout';
import './workus.css'
const WorkUs = () => {
    return (
        <div>
            <Layout />
            <div className='div-form'>
                <form action="post" className='form-msg'>
                <h1 className='h1-form'>Mande sua mensagem com seu pedido: <img src={EMAIL} alt="" /></h1>
                    
                    <div className="div-section">
                        <label htmlFor="" className='label'>Seu nome: </label>
                        <input type="text" id="input"  required/>
                    </div>
                    <div className="div-section">
                        <label htmlFor="" className='label'>Seu e-mail: </label>
                        <input type="email" id="input" required/>
                    </div>
                    <div className="div-section">
                        <label htmlFor="" className='label'>Sua mensagem: </label>
                        <input type="text" id="input" className='msg' required/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkUs;

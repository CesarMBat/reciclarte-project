//import React from 'react'
import Layout from '../Header/Layout';
import './workus.css'
const WorkUs = () => {
    return (
        <div>
            <Layout />
            <div className='div-form'>
                <form action="post" className='form-msg'>
                <h1 className='h1-form'>Mande sua mensagem com seu pedido:</h1>

                    <div className="div-section">
                        <label htmlFor="" className='label'>Nome: </label>
                        <input type="text" id="input"  required/>
                    </div>
                    <div className="div-section">
                        <label htmlFor="" className='label'>E-mail: </label>
                        <input type="email" id="input" required/>
                    </div>
                    <div className="div-section">
                        <label htmlFor="" className='label'>Mensagem: </label>
                        <input type="text" id="input" className='msg' height={'30vh'} required/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkUs;

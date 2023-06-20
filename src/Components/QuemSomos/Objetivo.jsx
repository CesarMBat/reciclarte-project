//import React from 'react'
import './objetivo.css';
import books from '../../assets/book.png';
import boxes from '../../assets/boxes.png';
import graphics from '../../assets/graphic.png';
import infinite from '../../assets/infinite.png';

const Objetivo = () => {
    return (
        <div className="main-margin">
            <main className="main-objetive main-margin">
                <h1> OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL</h1>
                <ul className="ul-objetive">
                    <div className="div-li-obj dlo1">
                        <img src={books} className="img-li" height={'100rem'}/>
                        <li>Educação de qualidade</li>
                    </div>
                    <div className="div-li-obj dlo2">
                        <img src={graphics} className="img-li" height={'100rem'}/>

                        <li>Trabalho decente e Crescimento econômico</li>
                    </div>
                    <div className="div-li-obj dlo3">
                        <img src={boxes} className="img-li" height={'100rem'}/>

                        <li>Indústria, Inovação e Infraestrutura</li>
                    </div>
                    <div className="div-li-obj dlo4">
                        <img src={infinite} className="img-li" height={'100rem'}/>

                        <li>Consumo e Produção Responsáveis</li>
                    </div>
                </ul>
            </main>
        </div>
    );
};

export default Objetivo;

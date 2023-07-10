import { useState } from 'react';
import './timeline.css';
import TIME from '../../assets/time-buddy-svgrepo-com.svg';

const Timeline = () => {
    const [show, setShow1] = useState();

    const mouseOver = (index) => {
        setShow1(index);
    };
    const mouseOut = () => {
        setShow1(false);
    };

    return (
        <div>
            <main className="main-timeline main-margin">
                <h1>Linha do Tempo</h1>
                <div className="div-p-time">
                    {show == 1 && (
                        <>
                            <p className="p1">
                                Divulgação das criações nas redes
                            </p>
                            <p className="p1">
                                Os primeiros projetos foram postados no
                                instagram
                            </p>
                        </>
                    )}
                    {show == 2 && (
                        <>
                            {' '}
                            <p className="p2">
                                Fundação da marca Recicl&#39;arte
                            </p>
                            <p className="p2">
                                E todo o design, cores e valores
                            </p>
                        </>
                    )}
                    {show == 3 && (
                        <>
                            <p className="p3">Abertura da loja física</p>
                            <p className="p3">
                                Localizada na Rua Madalena, 172 - Vila Madalena,
                                São Paulo - SP
                            </p>
                        </>
                    )}
                    {show == 4 && (
                        <>
                            <p className="p4">
                                Líder em decoração com materiais reciclados
                            </p>
                            <p className="p4">
                                Sendo requisitadas diversas pessoas e empresas{' '}
                            </p>
                        </>
                    )}
                </div>
                <div className="div-timeline">
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(1)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2020</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(2)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2021</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(3)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2023</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(4)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">FUTURO</p>
                    </div>
                </div>

                <img src={TIME} className="img-time" />
            </main>
        </div>
    );
};

export default Timeline;

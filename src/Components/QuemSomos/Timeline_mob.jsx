import { useState } from 'react';
import './timeline-mob.css';

const TimelineMob = () => {
    const [show, setShow1] = useState();

    const mouseOver = (index) => {
        setShow1(index);
    };
    const mouseOut = () => {
        setShow1(false);
    };

    return (
        <div>
            <main className="main-timeline-mob main-margin">
                <h1>Linha do Tempo</h1>
                <section className="section-timeline-mob">
                    <div className="div-timeline-mob">
                        <div
                            className="div-year-mob"
                            onMouseOver={() => mouseOver(1)}
                            onMouseOut={mouseOut}
                        >
                            <p className="p-timeline-mob">2020</p>
                        </div>
                        <div
                            className="div-year-mob"
                            onMouseOver={() => mouseOver(2)}
                            onMouseOut={mouseOut}
                        >
                            <p className="p-timeline-mob">2021</p>
                        </div>
                        <div
                            className="div-year-mob"
                            onMouseOver={() => mouseOver(3)}
                            onMouseOut={mouseOut}
                        >
                            <p className="p-timeline-mob">2023</p>
                        </div>
                        <div
                            className="div-year-mob"
                            onMouseOver={() => mouseOver(4)}
                            onMouseOut={mouseOut}
                        >
                            <p className="p-timeline-mob">FUTURO</p>
                        </div>
                    </div>
                    <div className="div-p-time-mob">
                        {show == 1 && (
                            <>
                                <p className="p1-mob pmob">
                                    Divulgação das criações nas redes
                                </p>
                                <p className="p1-mob pmob">
                                    Os primeiros projetos foram postados no
                                    instagram
                                </p>
                            </>
                        )}
                        {show == 2 && (
                            <>
                                {' '}
                                <p className="p2-mob pmob">
                                    Fundação da marca Recicl&#39;arte
                                </p>
                                <p className="p2-mob pmob">
                                    E todo o design, cores e valores
                                </p>
                            </>
                        )}
                        {show == 3 && (
                            <>
                                <p className="p3-mob pmob">
                                    Abertura da loja física
                                </p>
                                <p className="p3-mob pmob">
                                    Localizada na Rua Madalena, 172 - Vila
                                    Madalena, São Paulo - SP
                                </p>
                            </>
                        )}
                        {show == 4 && (
                            <>
                                <p className="p4-mob pmob">
                                    Líder em decoração sustentável.{' '}
                                </p>
                                <p className="p4-mob pmob">
                                    Sendo requisitadas diversas pessoas e empresas
                                </p>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TimelineMob;

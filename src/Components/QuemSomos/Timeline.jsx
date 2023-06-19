import { useState } from 'react';
import './timeline.css';
const Timeline = () => {
    let pshow = document.getElementsByClassName('div-p-time');
    const [show, setShow1] = useState();

    const mouseOver = (index) => {
        setShow1(index);
        pshow.style.transition = '0.3s';
    };
    const mouseOut = () => {
        setShow1(false);
    };

    return (
        <div>
            <main className="main-timeline main-margin">
                <div className="div-timeline">
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(1)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2016</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(2)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2017</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(3)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2019</p>
                    </div>
                    <div
                        className="div-year"
                        onMouseOver={() => mouseOver(4)}
                        onMouseOut={mouseOut}
                    >
                        <p className="p-timeline">2023</p>
                    </div>
                </div>

                <div className="div-p-time">
                    {show == 1 && (
                        <p className="p1">Divulgação das criações nas redes</p>
                    )}
                    {show == 2 && (
                        <p className="p2">Fundação da marca Recicl&#39;arte</p>
                    )}
                    {show == 3 && <p className="p3">Abertura da loja física</p>}
                    {show == 4 && (
                        <p className="p4">
                            Líder em decoração com materiais reciclados
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Timeline;

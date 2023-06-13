import Layout from './Layout';
import timeline from '../assets/timeline.png';
const Timeline = () => {
    return (
        <div>
            <Layout />
            <img
                src={timeline}
                alt="Linha do Tempo: 2016 - Divulgação das criações nas redes, 2017 - Fundação da marca Recicl'arte, 2019 - Abertura da Loja Física, 2023 Líder em decoração com materiais reciclados."
            ></img>
        </div>
    );
};

export default Timeline;

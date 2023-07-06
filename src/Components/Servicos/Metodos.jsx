import img_ser from '../../assets/services';
import '../../App.css';
import './metodos.css';
const Metodos = () => {
    return (
        <div>
            <main className="main-objetive main-margin">
                <h1> MÉTODOS DE NEGÓCIOS</h1>
                <ul className="ul-met">
                    <div className="div-li-obj-met dlo1">
                        <img
                            src={img_ser.busi}
                            className="img-li"
                            height={'100rem'}
                        />
                        <li>B2B</li>
                        <p>
                            {' '}
                            B2B são empresas que têm como modelo de negócio
                            vender produtos/serviços para outras empresas
                            (pessoas jurídicas)
                        </p>
                    </div>
                    <div className="div-li-obj-met dlo2">
                        <img
                            src={img_ser.client}
                            className="img-li"
                            height={'100rem'}
                        />

                        <li>B2C</li>
                        <p>
                            {' '}
                            B2C vendem soluções diretamente para o cliente final
                            (pessoas físicas).{' '}
                        </p>
                    </div>
                </ul>
            </main>
        </div>
    );
};

export default Metodos;

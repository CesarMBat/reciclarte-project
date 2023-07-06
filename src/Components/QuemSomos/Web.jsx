import WebIMG from '../../assets/Web.png';
import './web.css'
const Web = () => {
    return (
        <div>
            <main className="main-web">
                <h1>Stakeholders</h1>
                <img
                    src={WebIMG}
                    alt="Um pouco de nossos valores"
                    style={{ borderRadius: '1rem' }}
                    className='img-web'
                />
                <div className='div-mobile'>
                    <ul className='ul-mob'>
                        <li>Comunidade</li>
                        <li>Fornecedores</li>
                        <li>Mídias</li>
                        <li>Meio Ambiente</li>
                        <li>Gerente</li>
                        <li>Clientes</li>
                        <li>Investidores</li>
                        <li>Governo</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Web;

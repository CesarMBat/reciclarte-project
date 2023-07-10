import WebIMG from '../../assets/Web.png';
import './web.css'
const Web = () => {
    return (
        <div>
            <main className="main-web">
                <h1 className='h1-stake'>Stakeholders</h1>
                <img
                    src={WebIMG}
                    alt="Um pouco de nossos valores"
                    style={{ borderRadius: '1rem' }}
                    className='img-web'
                />
                <div className='div-mobile'>
                    <ul className='ul-mob'>
                        <li className='li-mob'>Comunidade</li>
                        <li className='li-mob'>Fornecedores</li>
                        <li className='li-mob'>Mídias</li>
                        <li className='li-mob'>Meio Ambiente</li>
                        <li className='li-mob'>Gerente</li>
                        <li className='li-mob'>Clientes</li>
                        <li className='li-mob'>Investidores</li>
                        <li className='li-mob'>Governo</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Web;

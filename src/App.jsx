import './App.css';
//import Nav_Mobile from './Components/Nav-Mobile';
import Carrousel from './Components/carrousel.jsx'
function App() {

    return (
        <>
            <header>
          
                <nav>
                    <ul className="nav-header">
                        <li className="list-header"> <a href="" className='a-nav'>Home</a> </li>
                        <li className="list-header"> <a href="" className='a-nav'>Quem Somos</a> </li>
                        <li className="list-header"> <a href="" className='a-nav'>Nossos Serviços</a> </li>
                    </ul>
                </nav>
            </header>
            <main>
              <Carrousel></Carrousel>
            </main>
        </>
    );
}

export default App;

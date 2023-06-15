import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Index from './Components/Index/index'
import History from './Components/Historia/carrousel';
import Layout from './Components/Header/Layout';
import Quemsomos from './Components/QuemSomos/Quemsomos';
import Services from './Components/Servicos/Services';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Layout/>}></Route>
                    <Route index element={< Index/>}></Route>
                    <Route path="/historia" element={<History />} />
                    <Route path="/quem_somos" element={<Quemsomos />} />
                    <Route path="/servicos" element={<Services />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

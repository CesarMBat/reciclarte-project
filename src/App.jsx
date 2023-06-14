import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Index from './Components/index'
import History from './Components/carrousel.jsx';
import Layout from './Components/Layout';
import Quemsomos from './Components/Quemsomos';
import Services from './Components/Services';
import Timeline from './Components/Timeline';
import Objetivo from './Components/Objetivo';

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
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/objetivo" element={<Objetivo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

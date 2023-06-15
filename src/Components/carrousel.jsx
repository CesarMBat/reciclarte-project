//import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import imagem1 from '../assets/imagem1-carrousel.png';
import imagem2 from '../assets/imagem2-carrousel.png';
import imagem3 from '../assets/imagem3-carrousel.png';
import '../App.css';
import Layout from './Layout';
//import React, {Component} from 'react';

function History() {
    return (
        <div>
            <Layout />
            <main className='main-history main-margin'>
                <h1 className="home-title">Um propósito em cada detalhe</h1>
                <article className='article-home'>
                <section className='section-history'>
                    <p className='p-story'>&#34;Me inspirei na minha mãe, que pega garrafas de vidro mal descartadas e as reutiliza para montar uma peça decorativa. Quando vi uma garrafa no chão, tive a ideia de transformar em decoração pro meu quarto e postei no instagram. Surpreendentemente viralisou com pessoas perguntando se eu vendia, logo tive a ideia de fundar uma empresa ainda por meio online. Mas como foi pegando mais popularidade e gerando mais renda, fundamos uma firma pra empregar artesãos independentes e gerar mais renda pra eles&#34;</p>
                    <p className='p-name'>- Fernanda Ferraz</p>
                  </section>
                  <div className="carousel-div">
                      <Carousel variant="dark" controls={false} indicators={false}>
                          <Carousel.Item interval={1500}>
                              <img
                                  src={imagem1}
                                  alt="Garrafas de bebida servindo como vaso"
                                  className="d-block w-80 h-50"
                              />
                          </Carousel.Item>
                          <Carousel.Item interval={1500}>
                              <img
                                  src={imagem2}
                                  alt="Jarros servindo como vaso"
                                  className="d-block w-80 h-50"
                              />
                          </Carousel.Item>
                          <Carousel.Item interval={1500}>
                              <img
                                  src={imagem3}
                                  alt="Garrafas servindo como vaso"
                                  className="d-block w-80 h-50"
                              />
                          </Carousel.Item>
                      </Carousel>
                  </div>
                  
                </article>
            </main>
        </div>
    );
}

export default History;

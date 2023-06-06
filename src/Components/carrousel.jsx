//import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import imagem1 from '../assets/imagem1-carrousel.png'
import imagem2 from '../assets/imagem2-carrousel.png'
import imagem3 from '../assets/imagem3-carrousel.png'
import '../App.css'

function Carrousel() {
  return (
    <div>
      <div className='carousel-div'>
          <Carousel variant='dark'>
              <Carousel.Item interval={1500}>
                <img src={imagem1} alt="Garrafas de bebida servindo como vaso" className='d-block w-80 h-50'/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={imagem2} alt="Jarros servindo como vaso" className='d-block w-80 h-50'/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={imagem3} alt="Garrafas servindo como vaso" className='d-block w-80 h-50'/>
              </Carousel.Item>
          </Carousel>
      </div>
    </div>
  )
}

export default Carrousel

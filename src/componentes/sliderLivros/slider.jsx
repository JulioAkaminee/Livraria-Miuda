import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../sliderLivros/slider.css'; // Importando o CSS customizado
import LivroModeloCompra from '../livroModeloCompra/livroModeloCompra';

const SliderComponent = () => {
    const sliderRef = useRef(null); // Criando uma referência para o slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Mostra 5 slides por vez
        slidesToScroll: 1, // Rola 1 slide por vez
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                    <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                {/* Adicione mais slides aqui */}
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                  </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
                </div>
            </Slider>

        </div>
    );
};

export default SliderComponent;

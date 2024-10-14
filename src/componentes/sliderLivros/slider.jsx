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
                    <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' titulo='Os tres porquinhos' corLivro='purple'/>
                </div>
                {/* Adicione mais slides aqui */}
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://m.media-amazon.com/images/I/71fWaI5myqL._AC_UF1000,1000_QL80_.jpg' titulo='Diario de um banana' corLivro='purple'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://m.media-amazon.com/images/I/61ATa0Pc4AL._AC_UF1000,1000_QL80_.jpg' corLivro='purple' titulo='O pequeno principe'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://http2.mlstatic.com/D_NQ_NP_758954-MLB44880417293_022021-O.webp' corLivro='purple' titulo='O pequeno principe'/>
                </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://cirandacultural.fbitsstatic.net/img/p/livro-pop-up-turma-da-monica-lacos-de-amizade-74164/260692.jpg?w=520&h=520&v=no-change&qs=ignore' titulo='Turma da monica' corLivro='purple'/>
                  </div>
                <div className="slide">
                <LivroModeloCompra caminhoImagem='https://m.media-amazon.com/images/I/71wWf-C-aUL._AC_UF1000,1000_QL80_.jpg' titulo='Rapunzel' corLivro='purple'/>
                </div>
                
            </Slider>

        </div>
    );
};

export default SliderComponent;

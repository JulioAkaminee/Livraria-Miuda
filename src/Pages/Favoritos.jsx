import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/favoritos.css';

const Favoritos = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="populares">Favoritos</div>
            <div id="livro">
                {[...Array(5)].map((_, index) => (
                    <div className={`livro${index + 1}`} key={index}>
                        <div className={`frente${index + 1}`}>
                            <a href="infolivro.html" target="_blank" rel="noopener noreferrer">
                                <img src={`/assets/images/omeninoquenaosabialer.jpg`} alt="nada" className={`img${index + 1}`} />
                            </a>
                        </div>
                        <div className={`inferior${index + 1}`}></div>
                        <div className={`folhas${index + 1}`}></div>
                        <div className={`marcador${index + 1}`}></div>
                        <div className="livroDetalhes">
                            <div className={`tituloLivro${index + 1}`}>Título do Livro</div>
                            <div className={`preco${index + 1}`}>R$ 00,00</div>
                        </div>
                        <div className="buttonCompra">
                            <div className="favoritarHome">
                                <img src="/assets/images/heart-solid.svg" title="Adicionar aos favoritos" alt="favoritar" />
                            </div>
                            <div className="comprarHome">
                                <a href="#">COMPRAR</a>
                            </div>
                            <div className="carrinhoHome">
                                <img src="/assets/images/cart-shopping-solid.svg" title="Adicionar ao carrinho" alt="carrinho" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div id="todosLivrosHome">
                {[...Array(5)].map((_, index) => (
                    <div className={`livrosGeral${index + 1}`} key={index}>
                        <div className={`frente${index + 6}`}>
                            <a href="infolivro.html" target="_blank" rel="noopener noreferrer">
                                <img src={`/assets/images/istonaoeumacenoura.jpg`} alt="nada" className={`img${index + 6}`} />
                            </a>
                        </div>
                        <div className={`inferior${index + 6}`}></div>
                        <div className={`folhas${index + 6}`}></div>
                        <div className={`marcador${index + 6}`}></div>
                        <div className={`tituloLivro${index + 6}`}>Título do Livro</div>
                        <div className={`preco${index + 6}`}>R$ 00,00</div>
                        <div className="buttonCompra">
                            <div className="favoritarHome">
                                <img src="/assets/images/heart-solid.svg" title="Adicionar aos favoritos" alt="favoritar" />
                            </div>
                            <div className="comprarHome">
                                <a href="#">COMPRAR</a>
                            </div>
                            <div className="carrinhoHome">
                                <img src="/assets/images/cart-shopping-solid.svg" title="Adicionar ao carrinho" alt="carrinho" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Favoritos;
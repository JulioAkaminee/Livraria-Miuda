import React, { useState } from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';

import BarraCategoria from '../componentes/barraCategorias/categorias'

import '../Pages/pagesCSS/cardapio.css'
import { Helmet } from 'react-helmet';
const Cardapio = () => {


    return (
        <>
         <Helmet>
                <title>Cardapio | Livraria Miuda</title>
                <meta name="description" content="Pagina de cardapio" />
            </Helmet>
            <Header />
            <BarraCategoria />
            <div className='containerTitlePrincipal'>
                <h1>Cardapio</h1>
            </div>
            <section className='cardapio'>
                <div className='container_title'>
                    <h1>BEBIDAS</h1>
                </div>
                <div className='produtosCardapio'>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                            <span class="material-icons-outlined">
                                emoji_food_beverage
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                </div>
                <div className='container_title'>
                    <h1>SALGADOS</h1>
                </div>
                <div className='produtosCardapio'>
                <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        bakery_dining
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        bakery_dining
                        </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            bakery_dining
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                </div>
                <div className='container_title'>
                    <h1>DOCES</h1>
                </div>
                <div className='produtosCardapio'>
                <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            cookie
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>

                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                            cookie
                            </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                    <div className='produtoIndividual'>
                        <div className='container_icon'>
                        <span class="material-icons-outlined">
                        cookie
                        </span>
                        </div>
                        <h1>NOME DO PRODUTO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum explicabo illo nostrum maiores velit hic in eos deleniti vel sequi, aspernatur, doloremque dolorum repellat aliquid cumque? Iusto, repellendus recusandae.</p>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    );
};

export default Cardapio;

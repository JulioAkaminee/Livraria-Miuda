import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/meuspedidos.css'

const MeusPedidos = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="container1">
                <div className="meuspedidos">MEUS PEDIDOS</div>
            </div>
            <div className="pai">
                <div className="container22">
                    {/* Pedido 1 */}
                    <div className="retan1">
                        <div className="barra1">
                            <strong>
                                Pedido Realizado | Total: R$00,00<br />
                                00/00/0000
                            </strong>
                        </div>
                        <div className="banana1">
                            <div className="livro1">
                                <div className="frente1">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img1" />
                                    </a>
                                </div>
                                <div className="inferior1"></div>
                                <div className="folhas1"></div>
                                <div className="marcador1"></div>
                            </div>
                            <div className="p1">
                                <div className="titulo">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entrega">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2">
                                <div className="rastrear">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitar">
                                    Solicitar Devolução
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pedido 2 */}
                     <br /><br />
                    <div className="retan2">
                        <div className="barra2">
                            <strong>
                                Pedido Realizado | Total: R$00,00<br />
                                00/00/0000
                            </strong>
                        </div>
                        <div className="banana2">
                            <div className="livro2">
                                <div className="frente2">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img2" />
                                    </a>
                                </div>
                                <div className="inferior2"></div>
                                <div className="folhas2"></div>
                                <div className="marcador2"></div>
                            </div>
                            <div className="p1">
                                <div className="titulo">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entrega">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2">
                                <div className="rastrear">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitar">
                                    Solicitar Devolução
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pedido 3 */}
                    <br /><br />
                    <div className="retan3">
                        <div className="barra3">
                            <strong>
                                Pedido Realizado | Total: R$00,00<br />
                                00/00/0000
                            </strong>
                        </div>
                        <div className="banana3">
                            <div className="livro3">
                                <div className="frente3">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img3" />
                                    </a>
                                </div>
                                <div className="inferior3"></div>
                                <div className="folhas3"></div>
                                <div className="marcador3"></div>
                            </div>
                            <div className="p1">
                                <div className="titulo">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entrega">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2">
                                <div className="rastrear">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitar">
                                    Solicitar Devolução
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        <br />
        <br />
        <br />
        <br />
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
      
        <Footer/>
        </>
    );
};

export default MeusPedidos;
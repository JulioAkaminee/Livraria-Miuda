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
            <div className="paipedidos">
                <div className="container22">
                    {/* Pedido 1 */}
                    <div className="retan1">
                        <div className="barra1">
                            <strong>
                                Pedido Realizado | Total: R$00,00<br />
                                00/00/0000
                            </strong>
                        </div>
                        <div className="banana1pedidos">
                            <div className="livro1pedidos">
                                <div className="frente1pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img1pedidos" />
                                    </a>
                                </div>
                                <div className="inferior1pedidos"></div>
                                <div className="folhas1pedidos"></div>
                                <div className="marcador1pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitarpedidos">
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
                        <div className="banana2pedidos">
                            <div className="livro2pedidos">
                                <div className="frente2pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img2pedidos" />
                                    </a>
                                </div>
                                <div className="inferior2pedidos"></div>
                                <div className="folhas2pedidos"></div>
                                <div className="marcador2pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitarpedidos">
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
                        <div className="banana3pedidos">
                            <div className="livro3pedidos">
                                <div className="frente3pedidos">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img3pedidos" />
                                    </a>
                                </div>
                                <div className="inferior3pedidos"></div>
                                <div className="folhas3pedidos"></div>
                                <div className="marcador3pedidos"></div>
                            </div>
                            <div className="p1pedidos">
                                <div className="titulopedidos">
                                    <strong>Rodrick é o cara <br /></strong>
                                </div>
                                <div className="entregapedidos">
                                    Entregue em 00/00/0000 <br />
                                    Pedido Recebido por XXXXXX
                                </div>
                            </div>
                            <div className="p2pedidos">
                                <div className="rastrearpedidos">
                                    <strong>Rastrear Pedido</strong>
                                </div>
                                <div className="solicitarpedidos">
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
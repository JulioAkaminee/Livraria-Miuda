import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/pedido.css'

const PedidoForm = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="container1pedido">
                <div className="dadosdopedido">Dados do Pedido</div>
            </div>
            <div className="paipedido">
                <div className="container2pedido">
                    <form className="dadospedido">
                        <input className="nomecompleto" type="text" placeholder="   Nome Completo: " />
                        <br /><br />
                        <input className="celular" type="text" placeholder="   Celular: " />
                        <br /><br />
                        <input className="telefone" type="text" placeholder="   Telefone: " />
                        <br /><br />
                        <input className="cep" type="text" placeholder="   CEP: " />
                        <input className="complemento" type="text" placeholder="   Complemento: " />
                        <br /><br />
                        <input className="endereco" type="text" placeholder="Endereço" />
                        <input className="bairro" type="text" placeholder="CEP 00000-000 - Bairro " />
                        <input className="saopaulo" type="text" placeholder="São Paulo - São Paulo: " />
                        <br /><br />
                        <input className="numero" type="text" placeholder="Número:" />
                        <br /><br /><br /><br /><br />
                        <button>Continuar para o Pagamento</button>
                        <br /><br />
                    </form>
                </div>
                <div className="container3pedido">
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara</strong><br /><br />
                            <strong>R$00,00</strong>
                        </div>
                    </div>
                    <div className="line1pedido"></div>
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara <br /><br /> R$00,00</strong>
                        </div>
                    </div>
                    <div className="line2pedido"></div>
                    <div className="banana1pedido">
                        <div className="livro1pedido">
                            <div className="frente1pedido">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/images/diariodeumbananaazulum.jpg" alt="nada" className="img1pedido" />
                                </a>
                            </div>
                            <div className="inferior1pedido"></div>
                            <div className="folhas1pedido"></div>
                            <div className="marcador1pedido"></div>
                        </div>
                        <div className="diario1pedido">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara <br /><br /> R$00,00</strong>
                        </div>
                    </div>
                    <div className="line3pedido"></div>
                    <div className="custopedido">
                        <strong>
                            Custo Frete R$00,00<br /><br />
                            Total: R$00,00
                        </strong>
                    </div>
                </div>
            </div>
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

export default PedidoForm;
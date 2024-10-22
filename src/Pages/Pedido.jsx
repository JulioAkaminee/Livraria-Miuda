import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/pedido.css'

const PedidoForm = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="container1">
                <div className="dadosdopedido">Dados do Pedido</div>
            </div>
            <div className="pai">
                <div className="container2">
                    <form className="dados">
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
                <div className="container3">
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
                        <div className="diario1">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara</strong><br /><br />
                            <strong>R$00,00</strong>
                        </div>
                    </div>
                    <div className="line1"></div>
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
                        <div className="diario1">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara <br /><br /> R$00,00</strong>
                        </div>
                    </div>
                    <div className="line2"></div>
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
                        <div className="diario1">
                            <strong>Diário de um banana: <br /> Rodrick é o Cara <br /><br /> R$00,00</strong>
                        </div>
                    </div>
                    <div className="line3"></div>
                    <div className="custo">
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
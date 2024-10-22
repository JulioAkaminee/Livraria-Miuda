import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/pagamento.css'

const FormaDePagamento = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="pai">
                <div className="container23">
                    <div className="pay">
                        <strong>Forma de Pagamento</strong>
                    </div>
                    <div className="dados">
                        <br /><br />
                        <div className="credito">
                            <img src="/assets/images/credit-card.png" className="creditar" width="30px" alt="" />
                            <p>Cartão de crédito ou débito</p>
                        </div>
                        <br /><br />
                        <div className="boleto">
                            <img src="/assets/images/barcode.png" className="boletar" width="30px" alt="" />
                            Boleto Bancário
                            <p>Boletokkk</p>
                        </div>
                        <br /><br />
                        <div className="pix">
                            <img src="/assets/images/pix.png" width="30px" alt="" className="pix1" />
                            Pix
                            <p className="woloko">dadsdasdasadsllPix</p>
                        </div>
                        <br /><br /><br />
                        <button>Finalizar Pedido</button>
                        <br /><br />
                    </div>
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
                            <strong>Diário de um banana: <br /> Rodrick é o Cara<br /><br /> R$00,00</strong>
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
                            <strong>Diário de um banana: <br /> Rodrick é o Cara<br /><br /> R$00,00</strong>
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
        <Footer/>
        </>
        
    );
};

export default FormaDePagamento;
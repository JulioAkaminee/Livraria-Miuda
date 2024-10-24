import React from 'react';
import Footer from '../inc/footer/footer';
import Header from '../inc/header/header';
import '../Pages/pagesCSS/meusdados.css'

const MeusDados = () => {
    return (
     <>
     <Header/>
      <main>
        <div className="meusdadosdados">MEUS DADOS</div>
  
        <div className="actt acesso">
          <h2>DADOS DE ACESSO</h2>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" placeholder="usuario@teste.com" />
            </div>
            <div className="input-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="xxx.xxx.xxx-xx" />
            </div>
          </div>
          <button className='dadosb'>ALTERAR SENHA</button>
        </div>
  
        <div className="actt cadastrais">
          <h2>DADOS CADASTRAIS</h2>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="nome">NOME</label>
              <input type="text" id="nome" placeholder="Seu Nome" />
            </div>
            <div className="input-group">
              <label htmlFor="celular">CELULAR</label>
              <input type="text" id="celular" placeholder="(11)900000000" />
            </div>
          </div>
          <button className='dadosb'>EDITAR</button>
        </div>
  
        <div className="actt enderecodados">
          <h2>ENDEREÇO</h2>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="xxxxx-xxx" />
            </div>
            <div className="input-group">
              <label htmlFor="numero">NUMERO</label>
              <input type="text" id="numero" placeholder="Número" />
            </div>
            <div className="input-group">
              <label htmlFor="rua">RUA</label>
              <input type="text" id="rua" placeholder="Nome da Rua" />
            </div>
            <div className="input-group">
              <label htmlFor="bairro">BAIRRO</label>
              <input type="text" id="bairro" placeholder="Nome do Bairro" />
            </div>
            <div className="input-group">
              <label htmlFor="cidade">CIDADE</label>
              <input type="text" id="cidade" placeholder="Nome da Cidade" />
            </div>
            <div className="input-group">
              <label htmlFor="complemento">COMPLEMENTO</label>
              <input type="text" id="complemento" placeholder="Complemento" />
            </div>
            <div className="input-group">
              <label htmlFor="estado">ESTADO</label>
              <input type="text" id="estado" placeholder="Nome do Estado" />
            </div>
            <div className="input-group">
              <label htmlFor="referencia">PONTO DE REFERÊNCIA</label>
              <input type="text" id="referencia" placeholder="Ponto de Referência" />
            </div>
          </div>
          <button className='dadosb'>EDITAR</button>
        </div>
      </main>
      <Footer/>
      </>
    );
  };
  
  export default MeusDados;
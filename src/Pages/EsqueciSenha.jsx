import React from 'react';
import '../Pages/pagesCSS/login.css';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';

const RecuperacaoSenha = () => {
  return (
    <>
    <Header/>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">RECUPERAÇÃO DE SENHA</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <button type="submit">ENVIAR</button>
            <div className="login-links">
              <a href="/login">Voltar para o Login</a>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RecuperacaoSenha;

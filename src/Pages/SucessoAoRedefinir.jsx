import React from 'react';
import '../Pages/pagesCSS/login.css';

const SenhaRedefinidaSucesso = () => {
  return (
    <>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">Senha Redefinida com Sucesso!</h2>
          <div className="login-links">
            <a href="/login">Voltar para o Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenhaRedefinidaSucesso;

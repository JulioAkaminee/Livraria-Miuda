import React, { useState } from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import '../Pages/pagesCSS/login.css';
import Oculto from '../assets/icons/oculto.svg';
import Visivel from '../assets/icons/naoOculto.svg';
import { Helmet } from 'react-helmet';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Helmet>
                <title>Login | Livraria Miuda</title>
                <meta name="description" content="Pagina de login" />
            </Helmet>
        <Header/>
      <div className="wrapper">
        <div className="login-container">
          <h2 className="login-title">LOGIN</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  required
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={Visivel} alt="Ocultar senha" /> : <img src={Oculto} alt="Mostrar senha" />}
                </span>
              </div>
            </div>
            <button className='btn_padrao' type="submit">ENTRAR</button>
            <div className="login-links">
              <a href="/esqueci-senha">Esqueci a senha</a>
              <a href="/cadastro">Criar conta</a>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import '../Pages/pagesCSS/login.css';
import Oculto from '../assets/icons/oculto.svg';
import Visivel from '../assets/icons/naoOculto.svg';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para cadastrar o usuário
  };

  return (
    <>
    <Header/>
    <div className="wrapper">
      <div className="login-container">
        <h2 className="login-title">CADASTRO</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <img src={Visivel} alt="Ocultar senha" /> : <img src={Oculto} alt="Mostrar senha" />}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>Confirmar Senha</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <img src={Visivel} alt="Ocultar senha" /> : <img src={Oculto} alt="Mostrar senha" />}
              </span>
            </div>
          </div>
          <button className='btn_padrao' type="submit">CADASTRAR</button>
          <div className="login-links">
            <a href="/login">LOGIN</a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cadastro;

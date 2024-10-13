// routers/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';
import EsqueciSenha from '../Pages/EsqueciSenha';
import RedefinirSenha from '../Pages/RedefinirSenha'
import Home from '../Pages/Home'
import Cardapio from '../Pages/Cardapio';
import Carrinho from '../Pages/carrinho';
import InformacoesLivro from '../Pages/InformacoesLivro';




const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      
      <Route path="/informacoeslivro" element={<InformacoesLivro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho" element={<Carrinho/>} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/redefinir-senha" element={<RedefinirSenha />} />
    </Routes>
  );
};

export default Router;

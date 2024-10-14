import React, { useState } from 'react';
import CarrinhoItem from '../componentes/carrinhoItem/carrinhoItem';
import './pagesCSS/carrinho.css';
import Header from '../inc/header/header';
import BarraCategoria from '../componentes/barraCategorias/categorias';
import Footer from '../inc/footer/footer';

const Carrinho = () => {
  const [livrosCarrinho, setLivrosCarrinho] = useState([
    {
      id: 1,
      nome: 'Livro Exemplo 1',
      capa: 'https://daniloyasigui.com/wp-content/uploads/2021/06/Capa_livro_infantil.png',
      estoque: true,
      preco: 39.99,
      quantidade: 1,
    },
    {
      id: 2,
      nome: 'Livro Exemplo 2',
      capa: 'https://daniloyasigui.com/wp-content/uploads/2021/06/Capa_livro_infantil.png',
      estoque: false,
      preco: 29.99,
      quantidade: 2,
    },
    {
      id: 3,
      nome: 'Livro Exemplo 3',
      capa: 'https://daniloyasigui.com/wp-content/uploads/2021/06/Capa_livro_infantil.png',
      estoque: true,
      preco: 30.00,
      quantidade: 5,
    },
  ]);

  // Remove um livro do carrinho
  const removerLivro = (id) => {
    setLivrosCarrinho((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
  };

  // Aumenta a quantidade de um item
  const aumentarQuantidade = (id) => {
    setLivrosCarrinho((prevLivros) =>
      prevLivros.map((livro) => 
        livro.id === id ? { ...livro, quantidade: livro.quantidade + 1 } : livro
      )
    );
  };

  // Diminui a quantidade de um item
  const diminuirQuantidade = (id) => {
    setLivrosCarrinho((prevLivros) =>
      prevLivros.map((livro) => 
        livro.id === id && livro.quantidade > 1 ? { ...livro, quantidade: livro.quantidade - 1 } : livro
      )
    );
  };

  // Calcula o total do carrinho
  const calcularTotal = () => {
    return livrosCarrinho.reduce((total, livro) => total + livro.preco * livro.quantidade, 0).toFixed(2);
  };

  return (
    <>
      <Header />
      <BarraCategoria />
      <div className="carrinho-container">
        {livrosCarrinho.length > 0 ? (
          <>
            {livrosCarrinho.map((livro) => (
              <CarrinhoItem 
                key={livro.id} 
                livro={livro} 
                onExcluir={() => removerLivro(livro.id)} 
                aumentarQuantidade={() => aumentarQuantidade(livro.id)} 
                diminuirQuantidade={() => diminuirQuantidade(livro.id)} 
              />
            ))}
            <div className="carrinho-total">
              <h3>Total: R$ {calcularTotal()}</h3>
              <button className="continuar-compra-btn">Continuar Compra</button>
            </div>
          </>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Carrinho;

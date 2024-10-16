import React, { useState } from 'react';
import CarrinhoItem from '../componentes/carrinhoItem/carrinhoItem';
import './pagesCSS/carrinho.css';
import Header from '../inc/header/header';
import BarraCategoria from '../componentes/barraCategorias/categorias';
import Footer from '../inc/footer/footer';
import { Helmet } from 'react-helmet';

const Carrinho = () => {
  //fazer somente backend
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
    {
      id: 4,
      nome: 'Livro Exemplo 3',
      capa: 'https://daniloyasigui.com/wp-content/uploads/2021/06/Capa_livro_infantil.png',
      estoque: true,
      preco: 30.00,
      quantidade: 5,
    },
    {
      id: 5,
      nome: 'Livro Exemplo 3',
      capa: 'https://daniloyasigui.com/wp-content/uploads/2021/06/Capa_livro_infantil.png',
      estoque: true,
      preco: 30.00,
      quantidade: 5,
    }
  ]);

  // Função para remover um livro do carrinho
  const removerLivro = (id) => {
    const livrosAtualizados = livrosCarrinho.filter((livro) => livro.id !== id);
    setLivrosCarrinho(livrosAtualizados);
  };

  // Função para aumentar a quantidade de um item
  const aumentarQuantidade = (id) => {
    const livrosAtualizados = livrosCarrinho.map((livro) => {
      if (livro.id === id) {
        return { ...livro, quantidade: livro.quantidade + 1 };
      }
      return livro;
    });
    setLivrosCarrinho(livrosAtualizados);
  };

  // Função para diminuir a quantidade de um item
  const diminuirQuantidade = (id) => {
    const livrosAtualizados = livrosCarrinho.map((livro) => {
      if (livro.id === id && livro.quantidade > 1) {
        return { ...livro, quantidade: livro.quantidade - 1 };
      }
      return livro;
    });
    setLivrosCarrinho(livrosAtualizados);
  };

  // Função para calcular o subtotal total
  const calcularTotal = () => {
    return livrosCarrinho
      .reduce((total, livro) => total + livro.preco * livro.quantidade, 0)
      .toFixed(2); 
  };

  return (
    <>
      <Helmet>
                <title>Carinnho | Livraria Miuda</title>
                <meta name="description" content="Pagina de carrinho " />
            </Helmet>
      <Header />
      <BarraCategoria />
      <div className="carrinho-container">
        {livrosCarrinho.length > 0 ? (
          <>
            {livrosCarrinho.map((livro) => (
              <CarrinhoItem 
                key={livro.id} 
                livro={livro} 
                onExcluir={() => removerLivro(livro.id)} // Passa a função para excluir
                aumentarQuantidade={() => aumentarQuantidade(livro.id)} // Função para aumentar
                diminuirQuantidade={() => diminuirQuantidade(livro.id)} // Função para diminuir
              />
            ))}
            {/* Subtotal de todos os livros */}
            <div className="carrinho-total">
              <h3>Total: R$ {calcularTotal()}</h3>
              <button className="continuar-compra-btn">Continuar Compra</button>
            </div>
          </>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Carrinho;

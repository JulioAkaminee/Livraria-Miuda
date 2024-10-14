import React from 'react';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer';
import LivroModelo from '../componentes/livroModelo/livromodelo';
import '../Pages/pagesCSS/informacoesLivro.css';
import LivroModeloCompra from '../componentes/livroModeloCompra/livroModeloCompra';
import BarraCategoria from '../componentes/barraCategorias/categorias'
import { Helmet } from 'react-helmet';
const InformacoesLivro = () => {
  return (
    <>
    <Helmet>
                <title>Informações sobre o livro| Livraria Miuda</title>
                <meta name="description" content="Pagina de informacoes sobre o livro" />
            </Helmet>
      <Header />
      <BarraCategoria/>
      <main className="livro-info-container">

        {/*  Informações do Livro */}
        <section className="livro-information">
          <div className="livro-imagem">
            <LivroModelo corLivro='green'/>
          </div>
          <div className="livro-detalhes">
            <h1 className="livro-titulo">O Pequeno Príncipe</h1>
            <p className="livro-preco">R$ 00,00</p>

            {/*  Compra */}
            <div className="livro-compra">
              <input type="number" min="1" defaultValue="1" className="input-quantidade" />
              <button className="btn-comprar">Comprar</button>
              <span className="icon-carrinho material-icons-outlined">add_shopping_cart</span>
            </div>

            {/* Cálculo de Frete */}
            <div className="livro-frete">
              <input type="text" placeholder="Calcule o frete" className="input-frete" />
              <button className="btn-frete">OK</button>
            </div>
          </div>
        </section>

        {/*  Sinopse e Ficha Técnica */}
        <section className="livro-info-extra">
          <div className="livro-sinopse">
            <h2 className="secao-titulo">Sinopse</h2>
            <p>
              O Pequeno Príncipe é uma obra clássica da literatura mundial que narra a história de um jovem príncipe que viaja de planeta em planeta, encontrando pessoas e vivendo aventuras que ilustram os valores da amizade, amor e perda. Escrito por Antoine de Saint-Exupéry, o livro é uma profunda reflexão sobre a vida, contada de forma simples e envolvente.
            </p>
          </div>

          <div className="livro-ficha-tecnica">
            <h2 className="secao-titulo">Ficha Técnica</h2>
            <ul>
              <li><strong>Autor:</strong> Antoine de Saint-Exupéry</li>
              <li><strong>Ano de Edição:</strong> 1943</li>
              <li><strong>Origem:</strong> França</li>
              <li><strong>Idioma:</strong> Português</li>
              <li><strong>Quantidade de Páginas:</strong> 96</li>
            </ul>
          </div>
        </section>

        {/*Recomendações */}
        <section className="livro-recomendacoes">
        
          <div className="livro-recomendacoes-linha">
            <LivroModeloCompra />
            <LivroModeloCompra />
            <LivroModeloCompra />
            <LivroModeloCompra />
            <LivroModeloCompra />
          
          </div>
          <div className="livro-recomendacoes-linha">
            <LivroModeloCompra  />
            <LivroModeloCompra />
            <LivroModeloCompra />
            <LivroModeloCompra />
            <LivroModeloCompra />
         
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InformacoesLivro;

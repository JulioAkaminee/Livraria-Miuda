
import '../App.css';
import Header from '../inc/header/header';
import Footer from '../inc/footer/footer'
import '../Pages/pagesCSS/home.css'
import BarraCategoria from '../componentes/barraCategorias/categorias'
// import { Link } from "react-router-dom";
import SliderComponent from '../componentes/sliderLivros/slider';
import LivroModelo from '../componentes/livroModelo/livromodelo';
import LivroModeloCompra from '../componentes/livroModeloCompra/livroModeloCompra'


function Home() {
  return (
    <>
      <Header />
      <BarraCategoria />
      <h1 className='title_eventos'>Eventos</h1>
      <section className="eventos">
        
        <div className="sectionEvent1">
          
          <div className='container_image'>
            <img src="/assets/images/evento1.svg" alt="" />
          </div>
          <div className='container_information'>
            <h2>Informações</h2>
         

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a doloribus iure atque quas temporibus quae dignissimos dolore voluptatem. Cum nemo doloribus odit quasi esse! Deserunt vero magni quo hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, sit natus cupiditate voluptates fugiat iure mollitia dignissimos cum doloribus pariatur soluta illum rerum, incidunt explicabo magnam recusandae, obcaecati reprehenderit inventore. Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="sectionEvent2">
        <img src="/assets/images/evento1.svg" alt="" />
        </div>
      </section>
      <section className='populares'>
        <h1>Populares</h1>
        <SliderComponent/>
      </section>
      <section className='livros'>
      <h1>Livros</h1>
    
        <div className='container_livros'>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        </div>

        <div className='container_livros'>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        <LivroModeloCompra caminhoImagem='/assets/images/ostresporquinhos.svg' corLivro='purple'/>
        </div>
      
      </section>
      <section className='ordem'>
        <button className='ordem_number'>1</button>
        <button className='ordem_number'>2</button>
        <button className='ordem_number'>3</button>
      </section>
      <Footer/>
    </>
  );
}

export default Home;


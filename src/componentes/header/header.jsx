import '../header//header.css'

function Header() {
  return (
    <div>
        <header>
          <a href="../header/header.jsx"><img src="../assets/images/logo-miuda.png" alt="" /></a>
        
          <div className="search-container">
          <input type="search" placeholder="Pesquisar..." />
          <span className="material-symbols-outlined">search</span>
        </div>
        
          <div className='icones-header'>
            {/* icone de favorito */}
            <span className="material-symbols-outlined">favorite</span>
            {/* icone de carrinho */}
            <span className="material-symbols-outlined">shopping_cart</span>
            {/* icone de conta */}
            <span className="material-symbols-outlined">person</span>
          </div>
          <span class="material-symbols-outlined" id='menu'>menu</span>
        </header>
          <div className='menu-header'>
            <ul>
                <a href=""><li>Favoritos</li></a>
                <a href=""> <li>Carrinho</li></a>
                <a href=""><li>Café</li> </a>
            </ul>
          </div>
    </div>
  );
}

export default Header;

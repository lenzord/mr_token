function MainComponent() {
  return (
    <div className="main-app">
      <div className="main-header">
        <div className="header-logo">
          <img alt="company-logo"/>
        </div>
        <div className="header-content">
          <a href="#home">HOME</a>
          <a href="market">MARKET</a>
          <a href="staking">STAKING</a>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img alt="content-thing"/>
        </div>
        <div className="main-text">
          <h2>
          Adquira o ICO MRural Token na pré-venda
          </h2>
        </div>
        <div className="secondary-text">
          <h4>
          O ICO MRural Token já está à venda! Aproveite enquanto o token está com preço baixo e faça parte dessa inovação. 
          Compre agora!
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
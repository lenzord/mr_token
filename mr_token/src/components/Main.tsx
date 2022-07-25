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
          <a href="buy">BUY TOKEN</a>
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
        <div className="paper-button">
          <a href="w-paper">WHITE PAPER</a>
          <a href="b-paper">LIGHT PAPER</a>
        </div>
      </div>
      <div className="card-info">
        <div className="card-first-row">
          <div className="card-info-logo">Sample img</div>
          <div className="card-sale-price">
            <span>NFT-SALE</span>
            <p>Price:U$199</p>
          </div>
          <div className="card-sale-time">
            <span>SALE STARTED</span>
            <p>Ends in 90 days</p>
          </div>
        </div>
        <div className="card-second-row">
          <span>
            NFTS RAISED /100
            <p>BUSD</p>
          </span>
          <span>
            MINIMUM ALLOCATION
            <p>160.000 BUSD</p>
          </span>
          <span>
            MAXIMUM ALLOCATION
            <p>200.000 BUSD</p>
          </span>
        </div>
        <div className="card-third-row">
          <div className="progress">
            <div className="progress__fill"></div>
            <span className="progress__text">50%</span>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <footer/>
      </div>
    </div>
  );
}

export default MainComponent
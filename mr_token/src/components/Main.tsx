import { useMemo, useReducer, useState } from "react";

type State = {
  valueSale: number;
}

type Action = {
  type: "defineValue";
  valueSale: any;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "defineValue":
      return {
        valueSale: action.valueSale
      }
    default: return state;
  }
};

function MainComponent() {

  const [{ valueSale }, dispatch] = useReducer(reducer, { valueSale: 0 });
  const [viewTokenQty, setViewToken] = useState<number>(0)
  useMemo(() => setViewToken(valueSale), [valueSale]);
  const buyToken = async () => { }

  return (
    <div className="main-app">
      <div className="main-header">
        <div className="header-logo">
          <a href="https://octcoin.com.br/" target="_blank" rel="noreferrer">
            <img alt="company-logo" />
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img alt="content-thing" />
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
      <div id="card-info">
        <div className="content-card">
          <div className="card-first-row">
            <div className="card-info-logo">
              <img alt="token-logo" />
            </div>
            <div className="card-sale-price">
              <span>TOKEN-SALE</span>
              <p>Price:U$0.01</p>
            </div>
            <div className="card-sale-time">
              <span>SALE STARTED</span>
              <p>Ends in 90 days</p>
            </div>
          </div>
          <div className="card-second-row">
            <span>
              TOKENS RAISED
              <p>MRT</p>
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
            <div className="v1_HUD_Bar">
              <div className="progress-inner progress-inner_v2">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" aria-labelledby="loadinglabel" role="progressbar" aria-valuenow={10} style={{
                    width: `${69}%`,
                    overflow: 'hidden'
                  }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-input">
        <span>Enter token quantity:</span>
        <input placeholder={'0.0 BUSD'} value={valueSale} onChange={(e) => dispatch({ type: "defineValue", valueSale: e.target.value })} />
        {viewTokenQty}
      <div className="buy-button">
        <button onClick={() => buyToken()}>BUY</button>
      </div>
      </div>
      <div className="page-footer">
        <footer />
      </div>
    </div>
  );
}

export default MainComponent
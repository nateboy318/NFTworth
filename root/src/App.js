import './App.css';
import eth_logo from './img/eth_logo.png'
import totalFloorPrice from './backend/opensea.js'


function App() {
  return (
    <div className="App">
      <div className="container">
            <header className="App-header">

              <img alt="eth" src={eth_logo}></img>

              <h1>
                Please enter your wallet address below
              </h1>
              
              <input type="text" name="address" id="addressInput" onChange={totalFloorPrice} placeholder="Enter your address here" required/>
              
              <h3>Your NFTWorth is</h3>

              <h1 id="worth">0.0 ETH</h1>

              <h4>
              Our service is completely free but donations are welcome :)
              </h4>
              
              
              <p>
                0xfF05d38317c830dD41C0D1aFf3fB476808e8737E
              </p>

              <h6>By: NFT Goon Squad</h6>
              
            </header>
       </div>     
    </div>
  );
}

export default App;

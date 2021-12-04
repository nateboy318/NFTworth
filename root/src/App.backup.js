import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import eth_logo from './img/eth_logo.png'
import totalFloorPrice from './backend/opensea.js'
import {Form, InputGroup, FormControl, Container, Row, Col, Button, FormLabel} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="eth-logo">
        <img alt="eth" src={eth_logo}></img>
      </div>
      <div className="text">
      <h3>Please enter your wallet address below.</h3>
      </div>
      <InputGroup className="mb-3 w-50">
      <InputGroup.Text id="basic-addon1">
        <img className="d-block w-100" src="https://logos-world.net/wp-content/uploads/2020/12/Ethereum-Symbol.png" alt="Ethereum Logo" width="20" height="20"
      />
      </InputGroup.Text>
      <FormControl
        id="addressInput"
        className="addressInput"
        onChange={totalFloorPrice}
        placeholder="Paste Ethereum Address"
      />
    </InputGroup>
    {/* <div className="text font-weight-bold" >
        <h2 id="worth">0.0 ETH</h2>
    </div> */}
    <InputGroup className="mb-3 w-50">
    <InputGroup.Text id="basic-addon1">
        <img className="d-block w-100" src="https://logos-world.net/wp-content/uploads/2020/12/Ethereum-Symbol.png" alt="Ethereum Logo" width="20" height="20"
      />
      </InputGroup.Text>
      <InputGroup.Text id="basic-addon1">
        <h5 id="worth">0.0 ETH</h5>
      </InputGroup.Text>
      {/* <FormControl placeholder="Total Floor Price" readOnly="true" type="text" aria-label="Floor Price"/>  */}
      <InputGroup.Text id="dollarSign">$</InputGroup.Text>
      <FormControl placeholder="Price In USD" readOnly="true" aria-label="Currency" /> 
    </InputGroup>
      </header>
    </div>
  );
}

export default App;

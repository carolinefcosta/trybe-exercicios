import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.getButtonColor = this.getButtonColor.bind(this);

    this.state = {
      numeroDeCliquesBtn1: 0,
      numeroDeCliquesBtn2:0,
      numeroDeCliquesBtn3: 0,
    }
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  click1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn1: estadoAnterior.numeroDeCliquesBtn1 + 1,
    }))
  }
  
  click2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn2: estadoAnterior.numeroDeCliquesBtn2 + 1,
    }))
  }
  
  click3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn3: estadoAnterior.numeroDeCliquesBtn3 + 1,
    }))
  }

  render() {
    const { numeroDeCliquesBtn1, numeroDeCliquesBtn2, numeroDeCliquesBtn3 } = this.state;
    return (
      <>
        <button onClick={this.click1} style={{ backgroundColor: this.getButtonColor(numeroDeCliquesBtn1) } }>{`Cliques botão 1: ${numeroDeCliquesBtn1}`}</button>

        <button onClick={this.click2} style={{ backgroundColor: this.getButtonColor(numeroDeCliquesBtn2) } }>{`Cliques botão 2: ${numeroDeCliquesBtn2}`}</button>

        <button onClick={this.click3} style={{ backgroundColor: this.getButtonColor(numeroDeCliquesBtn3) } }>{`Cliques botão 3: ${numeroDeCliquesBtn3}`}</button>
      </>
    );
  }
}

export default App;

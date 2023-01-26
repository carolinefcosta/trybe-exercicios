import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      sexo: '',
      nome: '',
      idade: '',
      pontosFortes: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name,value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { sexo, nome, idade, pontosFortes } = this.state
    return (
      <div className="App">
        <form>

          <label htmlFor="select">Sexo:
            <select name='sexo' id="select" onChange={this.handleChange} value={sexo}>
            <option value="">Selecione</option>
              <option value='Masc'>Masculino</option>
              <option value='Fem'>Feminino</option>
            </select>
          </label>

          <label htmlFor="nome">Nome:
            <input name="nome" id="nome" type='text' onChange={ this.handleChange } value={nome} />
          </label>

          <label htmlFor="idade">Idade:
            <input name="idade" id="idade" type='number' onChange={this.handleChange} value={idade} />
          </label>

          <label htmlFor="textArea">Pontos Fortes:
            <textarea name="pontosFortes" id="textArea" onChange={this.handleChange} value={pontosFortes} />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;

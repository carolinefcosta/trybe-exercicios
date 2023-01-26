import React from "react";
import Select from "./Select";
import TextArea from "./TextArea";

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
          <fieldset>

          <legend>Informações pessoais</legend>

            <label htmlFor="nome">Nome:
              <input name="nome" id="nome" type='text' onChange={ this.handleChange } value={nome} />
            </label>

            <label htmlFor="idade">Idade:
              <input name="idade" id="idade" type='number' onChange={this.handleChange} value={idade} />
            </label>

            <Select sexo={sexo} handleChange={this.handleChange} />

          </fieldset>

          <fieldset>

          <legend>Outros Dados</legend>

            <TextArea pontosFortes={pontosFortes} handleChange={this.handleChange} />

            <input type='file' />

          </fieldset>

        </form>
      </div>
    );
  }
}

export default Form;

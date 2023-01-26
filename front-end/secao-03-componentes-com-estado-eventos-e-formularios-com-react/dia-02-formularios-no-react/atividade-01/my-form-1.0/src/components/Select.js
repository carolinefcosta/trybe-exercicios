import React from "react";

class Select extends React.Component {
  render() {
    const { handleChange, sexo } = this.props;
    return(
      <label htmlFor="select">Sexo:
        <select name='sexo' id="select" onChange={handleChange} value={sexo}>
          <option value="">Selecione</option>
          <option value='Masc'>Masculino</option>
          <option value='Fem'>Feminino</option>
        </select>
        { !sexo ? 'É necessário informar o sexo!' : ''}
      </label>
    );
  }
}

export default Select;

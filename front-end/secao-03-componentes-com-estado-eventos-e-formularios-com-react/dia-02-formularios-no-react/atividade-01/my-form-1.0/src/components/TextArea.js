import React from "react";

class TextArea extends React.Component {
  render() {
    const { handleChange, pontosFortes } = this.props;
    const LimiteCaracters = 120;
    if(pontosFortes > LimiteCaracters) {

    }
    return(
      <label htmlFor="textArea">Pontos Fortes:
        <textarea name="pontosFortes" id="textArea" onChange={handleChange} value={pontosFortes} />
        { pontosFortes.length > LimiteCaracters
          ? 'Seus pontos fortes não pode ter mais que 120 caracteres' : ''}
      </label>
    );
  }
}

export default TextArea;
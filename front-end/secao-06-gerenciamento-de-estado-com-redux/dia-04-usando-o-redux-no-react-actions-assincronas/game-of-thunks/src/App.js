import React from  'react';
import './App.css';
import { connect } from 'react-redux';
import fetApiGameOfThrones from './redux/actions';

class App extends React.Component{
  state = {
    nameCharacter: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { nameCharacter } = this.state;
    const { dispatch, character, isLoading, url, title } = this.props;
    return (
      <main>
        <section>
          <label htmlFor='input'>
            Nome do Personagem:
            <input
            type='text'
            id='input'
            name="nameCharacter"
            value={ nameCharacter }
            onChange={ this.handleChange }
            />
          </label>
        </section>
        <section>
          <button 
          type='button'
          onClick={() => dispatch(fetApiGameOfThrones(nameCharacter))}
          >
            Pesquisar
          </button>
        </section>
        <section>
          { isLoading ? <h3>Carregando...</h3> : (
            <>
              <p>{character}</p>
              <img src={url} alt={character}/>
              <p>{title}</p>
            </>
            
          )}
        
      </section>
      </main>
      );
  }
}

const mapStateToProps = (state) => ({
  character: state.gameOfThunksReducer.name,
  isLoading: state.gameOfThunksReducer.isLoading,
  url: state.gameOfThunksReducer.url,
  title: state.gameOfThunksReducer.titles,
})

export default connect(mapStateToProps)(App);

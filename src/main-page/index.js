import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedPokemon from './featured-pokemon';
import SearchPokemon from './search-pokemon';

class App extends Component {
  state = { };

  componentDidMount() {
        this.fetchPokemonData();
    }

    fetchPokemonData = () => {
        fetch(
            fetch('https://pokeapi.co/api/v2/pokemon')
                .then(response => response.json())
                .then(pokeMeta => {
                    this.pokeMeta = pokeMeta;
                    this.randomizePokemon();
                })
        )
    }

    randomizePokemon = () => {
        if (this.pokeMeta) {
            // const count = this.pokeMeta['count']
            const randomIndices = Array.from(Array(50)).map(x => Math.floor(Math.random() * Math.floor(898)));
            this.setState({ randomIndices });
        }
    }

    render() {
      return (
        <div className="main-page">
          <Header subtitle="Gotta catch 'em all!" />
          <SearchPokemon />
          <FeaturedPokemon randomIndices={this.state.randomIndices} />
          </div>
      );
    }
}

export default App;

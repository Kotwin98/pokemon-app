import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PokemonList from './components/pokemonList';
import SinglePokemonCard from './components/singlePokemonCard';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={PokemonList} />
        <Route path="/single-card/:id" exact component={SinglePokemonCard} />
      </Router>
    );
  }
}

export default App;

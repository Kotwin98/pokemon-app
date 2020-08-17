import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PokemonList from './components/pokemonList';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={PokemonList} />
      </Router>
    );
  }
}

export default App;

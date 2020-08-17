import React, { Component } from 'react';
import axios from 'axios';

import Pokemon from './pokemon';

class PokemonList extends Component {
    state = {
        pokemons: []
    };
    
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                this.setState({pokemons: response.data.results})
                console.log(this.state)
            })
            .catch((error) => {
            console.log(error);
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.pokemons.map(pokemon => (
                        <Pokemon pokemonName={pokemon.name} pokemonUrl={pokemon.url} key={pokemon.name} />
                    ))
                }
            </div>
        )
    }
}

export default PokemonList;
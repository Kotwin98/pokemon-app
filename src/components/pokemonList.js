import React, { Component } from 'react';
import axios from 'axios';

import Pokemon from './pokemon';
import '../styles/pokemonList.scss';

class PokemonList extends Component {
    state = {
        pokemons: [],
        limit: 20,
        offset: 0
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

    nextPage = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.state.offset + 20}`)
            .then(response => {
                this.setState({
                    pokemons: response.data.results,
                    // limit: + 20,
                    offset: this.state.offset + 20
                })
                console.log(this.state.limit, this.state.offset)
            })
    }

    prevPage = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.state.offset - 20}`)
            .then(response => {
                this.setState({
                    pokemons: response.data.results,
                    offset: this.state.offset - 20
                })
                console.log(this.state.limit, this.state.offset)
            })
    }

    render() {
        return (
            <div>
                <div className="pokemon-cards">
                    {
                        this.state.pokemons.map(pokemon => (
                            <Pokemon pokemonName={pokemon.name} pokemonUrl={pokemon.url} key={pokemon.name} />
                        ))
                    }
                </div>
                <button onClick={this.prevPage}>Prev</button>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default PokemonList;
import React, { Component } from 'react';
import axios from 'axios';

import Pokemon from './pokemon';
import '../styles/pokemonList.scss';

class PokemonList extends Component {
    state = {
        pokemons: [],
        offset: 0
    };
    
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                this.setState({pokemons: response.data.results})
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
                    offset: this.state.offset + 20
                })
            })
    }

    prevPage = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.state.offset - 20}`)
            .then(response => {
                this.setState({
                    pokemons: response.data.results,
                    offset: this.state.offset - 20
                })
            })
    }

    render() {
        return (
            <div className="pokemonList-container">
                <div className="pokemon-cards">
                    {
                        this.state.pokemons.map(pokemon => (
                            <Pokemon pokemonName={pokemon.name} pokemonUrl={pokemon.url} key={pokemon.name} />
                        ))
                    }
                </div>
                <button className="pagination-button" onClick={this.prevPage}>Prev</button>
                <button className="pagination-button" onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default PokemonList;
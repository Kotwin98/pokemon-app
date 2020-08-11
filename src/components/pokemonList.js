import React, { Component } from 'react';
import axios from 'axios';

class PokemonList extends Component {
    state = {
        pokemon: []
    }
    
    componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/")
        .then(response => {
        this.setState({pokemon: response.data})
        })
        .catch((error) => {
        console.log(error);
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default PokemonList;
import React, { Component } from 'react';
import axios from 'axios';

class Pokemon extends Component {
    state = {
        url: this.props.pokemonUrl,
        height: '',
        weight: ''
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(response => {
                this.setState({height: response.data.height, weight: response.data.weight})
                console.log(response)
            })
            .catch((error) => {
            console.log(error);
            })
    }

    render() {
        const name = this.props.pokemonName;
        // const url = this.props.pokemonUrl;

        // const pokemonIndex = url.split('/')[url.split('/').length - 2];
        // const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        // const pokemonInfo = axios.get(pokemonUrl);
        return (
            <div>
                <h1>{name}</h1>
                <p>{this.state.height}</p>
                <p>{this.state.weight}</p>
                {/* <h3>{pokemonInfo}</h3> */}
            </div>
        );
    }
};

export default Pokemon;
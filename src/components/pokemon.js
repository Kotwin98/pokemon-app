import React, { Component } from 'react';
import axios from 'axios';
import '../styles/pokemon.scss';

class Pokemon extends Component {
    state = {
        name: this.props.pokemonName,
        url: this.props.pokemonUrl,
        height: '',
        weight: '',
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
        const pokemonIndex = this.state.url.split('/')[this.state.url.split('/').length - 2];

        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        return (
            <div className="pokemon-container">
                <h1 className="pokemon-title">{this.state.name} {pokemonIndex}</h1>
                <div className="pokemon-img">
                    <img src={imageUrl} />
                </div>
                <div className="pokemon-info-container">
                    <p className="pokemon-info">Height: {this.state.height}</p>
                    <p className="pokemon-info">Weight: {this.state.weight}</p>
                </div>
            </div>
        );
    }
};

export default Pokemon;
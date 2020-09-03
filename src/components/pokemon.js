import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../components/features/Spinner/Spinner';
import '../styles/pokemon.scss';

class Pokemon extends Component {
    state = {
        name: this.props.pokemonName,
        url: this.props.pokemonUrl,
        pokemonIndex: '',
        imageUrl: '',
        isLoading: true,
        height: '',
        weight: '',
    }

    componentDidMount() {
        axios.get(this.state.url)
        .then(response => {
            this.setState({height: response.data.height, weight: response.data.weight})
        })
        .catch((error) => {
            console.log(error);
        })

        const pokemonIndex = this.state.url.split('/')[this.state.url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        this.setState({pokemonIndex: pokemonIndex, imageUrl: imageUrl});
    }

    componentWillMount() {
        setTimeout(() => this.setState({isLoading: false}), 1000)
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <Link to={`/single-card/${this.state.pokemonIndex}`} key={this.state.pokemonIndex}>
            <div className="pokemon-container">
                <h1 className="pokemon-title">{this.state.pokemonIndex}. {this.capitalizeFirstLetter(this.state.name)}</h1>
                <div className="pokemon-img">
                    {this.state.isLoading === true ? <Spinner /> : <img src={this.state.imageUrl} />}
                </div>
                <div className="pokemon-info-container">
                    <p className="pokemon-info">Height: {this.state.height}</p>
                    <p className="pokemon-info">Weight: {this.state.weight}</p>
                </div>
            </div>
            </Link>
        );
    }
};

export default Pokemon;
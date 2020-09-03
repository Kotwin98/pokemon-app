import React, { Component } from 'react';
import axios from 'axios';

class SinglePokemonCard extends Component {
    state = {
        pokemonIndex: '',
        imageUrl: '',
        height: '',
        weight: '',
        exp: '',
        types: '',
        name: '',
        hp: '',
        attack: '',
        defense: '',
        special_attack: '',
        special_defense: '',
        speed: ''
    }

    componentDidMount() {
        const windowLoc = window.location.href;
        const windowIndex = windowLoc.split('/');
        const last = windowIndex.pop();
        this.setState({pokemonIndex: last});

        axios.get(`https://pokeapi.co/api/v2/pokemon/${last}`)
        .then(res => {
            this.setState({
                height: res.data.height,
                weight: res.data.weight,
                exp: res.data.base_experience,
                types: res.data.types.map(type => <p key={type.type.name}>{type.type.name}</p>),
                name: res.data.name,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                special_attack: res.data.stats[3].base_stat,
                special_defense: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat,
            })
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {/* <div>{this.state.types.map(type => <p>{type.name}</p>)}</div> */}
                {this.state.types}
                <p>{this.state.height}</p>
                <p>{this.state.weight}</p>
            </div>
        );
    }
}

export default SinglePokemonCard;
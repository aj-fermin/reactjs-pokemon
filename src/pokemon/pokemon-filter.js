import React, { Component } from 'react';

class PokemonFilter extends Component {
    state = {}

    onSearchChange = (e) => {
        const pokemon = e.target.value;
    }

    render() {
        const search = this.state.search;
        const pokemons = this.props.pokemons || [];

        return (
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Look for your favorite Pokemon:
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        
                    </select>
                </div>
            </div>
        )
    }
}
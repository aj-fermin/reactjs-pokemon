import React, { Component } from 'react';
import "./pokemon.css"
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Pokemon extends Component {

    state = {}

    componentDidMount() {
        console.log("props " + this.props.pokemonId );
        this.getPokemon(this.props.pokemonId)
    }

    capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getPokemon = (id) => {
        fetch(
            fetch('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => response.json())
                .then(pokemon => {
                  console.log(id);
                  console.log(pokemon)
                    this.setState({ pokemon });
                })
        )
    }

    render() {
        const pokemon = this.state.pokemon

        if (pokemon) {
            return (
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={pokemon.sprites.front_default} />
                    <Card.Body>
                        <Card.Title>{this.capitalizeString(pokemon.name)}</Card.Title>
                        <Card.Text>
                            {pokemon.types
                            .map( p => <span>{this.capitalizeString(p.type.name)}</span> )
                            .reduce((prev, curr) => [prev, ', ', curr])}
                        </Card.Text>
                        <Button component={Link} to="/showPokemon" variant="primary" style={{ backgroundColor: "rgb(61, 125, 202" }} >View Pokemon</Button>
                    </Card.Body>
                </Card>
            );
        } else {
            return ( <div>Cannot Display Pokemon</div> );
        }
        
    }
}

export default Pokemon;
import React, { useState } from 'react';
import { Form, Col, Alert, Button } from 'react-bootstrap';

class SearchPokemon extends React.Component {
    state = { pokemonNameInput: '',
              showAlert: false };

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.pokemonNameInput)
                .then(response => response.json())
                .then(pokemon => {
                  console.log(this.state.pokemonNameInput);
                  console.log(pokemon)
                    this.setState({ pokemon });
                })
                .catch( error => {
                    console.log(error);
                    this.setState({ showAlert: true })
                })
        )
    };

 
    render() {
        

        return (
        <>
            <Form onSubmit={this.handleSubmit} style={{ padding: 20, backgroundColor: "rgb(238, 21, 21)", justifyContent:'flex-end'}}>
                <Form.Row className="align-items-center" >
                    <Col xs="auto" md={{ span: 1.5, offset: 7 }}>
                        <Form.Label sm={2}>Search for Pokemon: </Form.Label>
                    </Col>
                    <Col xs="auto" md={{ span: 2 }}>
                        <Form.Control 
                            type="text" 
                            placeholder="Name" 
                            value={this.state.pokemonNameInput} 
                            onChange={event => this.setState({ pokemonNameInput: event.target.value }) }
                            required 
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" style={{ backgroundColor: "rgb(61, 125, 202" }}>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
            <Alert show={ this.state.showAlert } variant="info" onClose={ event => this.setState({ showAlert: false })} dismissible>
                <Alert.Heading>Huh? There's no Pokemon with that name!</Alert.Heading>
                    <p>Are you sure that's the correct spelling? Are you even a Pokemon master at all??</p>
            </Alert>
            </>
        )
    }
    
}

export default SearchPokemon;
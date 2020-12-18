import React, { Component } from 'react';
import Pokemon from '../pokemon';
import { Container, Row, Col } from 'react-bootstrap'

function FeaturedPokemon(props) {
    const indices = props.randomIndices;
    
    if (indices) {
        return (
            <Container fluid="true">
                <Row className="row featuredPokemon">
                    <h3 className="col-md-12 text-center" style={{ color: "white" }} >
                        Featured Pokemon
                    </h3>
                </Row>
                <Row style={{ padding: 50, alignItems:'center', justifyContent:"center" }} >
                { indices.map( (p) => {
                    return (
                        <Col className="mt-5" md="auto">
                        <Pokemon pokemonId={p} />
                        </Col>
                        );
                    }   
                )}
                </Row>
                
            </Container>
        );
    } else {
        return (
            <div>No featured Pokemon at this time.</div>
        );
    }
}


 
export default FeaturedPokemon
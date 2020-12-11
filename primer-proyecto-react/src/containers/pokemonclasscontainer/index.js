import React, { Component } from 'react'
import axios from 'axios';

//Constants
import { POKEMON_URL } from '../../constants/index';


//let pokemon = [];
export default class PokemonClassContainer extends Component {

    constructor(props){
        super(props);
        this.state = {pokemon:[]}
    }

    componentDidMount() {
        console.log("---- COMPONENT DID MOUNT ----")        

        axios.get(POKEMON_URL)
            .then(res => {                
                console.log("BEFORE AXIOS",this.state)
                //this.setState({pokemon:res.data.results},console.log("INSIDE AXIOS",this.state))
                console.log("AFTER AXIOS",this.state)
            }).catch(err => console.log(err));

        
    }

    componentDidUpdate(prevProps, prevState){
        console.log('---- Prev Props ----');
        console.log(prevProps);
        console.log('--------------------');
        console.log('---- Prev State ----');
        console.log(prevState);
        console.log('--------------------');

    }

    render() {
        console.log("---- RENDER ----")
        console.log(this.state.pokemon)
        console.log(this.props)
        let {pokemon} = this.state;



/*
        value = {
            pokemon:...,
            ability:...,
            attack:...
        }
*/
        return (
            <div>
                <h1>{this.props.name}</h1>
                {<ol>
                    {pokemon.map(
                        (poke, index) => <li key={index}>{poke.name}</li>
                    )}
                    </ol>}

            </div>
        )
    }
}

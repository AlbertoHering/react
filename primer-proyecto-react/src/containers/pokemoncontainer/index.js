import {React, useEffect, useState} from 'react';
import axios from 'axios';

//Constants
import {POKEMON_URL} from '../../constants/index';


const PokemonContainer = () => {
    const [pokemon, setPokeData] = useState([]);
    useEffect(()=>{

        axios.get(POKEMON_URL)
        .then(res => {
            console.log(res.data.results);
            setPokeData(res.data.results);
        }).catch(err => console.log(err));

        // fetch(POKEMON_URL)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data.results);
        //     setPokeData(data.results);
        // }).catch(err => console.log(err));

    }, [])

    console.log(pokemon);


    return (
        <div>
            <ol>
                {pokemon.map(
                    (poke, index)=> <li key={index}>{poke.name}</li>
                )}
            </ol>
            
        </div>
    );
};

export default PokemonContainer;
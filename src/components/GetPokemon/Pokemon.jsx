import {useEffect, useState} from 'react';

const Pokemon = ({pokemon}) => {

    if (pokemon.length !== 0) {
        return(
            <>
            <h1>{pokemon.name}</h1>
            <p>Pokemon id: {pokemon.id}</p>
            <p>Pokemon height: {pokemon.height}m</p>
            <img src={pokemon.image_url} alt={pokemon.name} />
            <p>Pokemon Types:</p>
            <ol>
            {pokemon.types.map((type) => <li>{type.type.name}</li>)}
            </ol>
            </>
            
        )
    } else {
        return(
            <p>No pokemon selected</p>
        )
    }
}

export default Pokemon;
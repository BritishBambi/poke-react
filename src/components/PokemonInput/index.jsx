import React from "react";

function PokemonInput({inputText, setInputText, setPokemon}) {
    
    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`);
        const data = await response.json();

        console.log(data.types)

        if (data){
            setPokemon({
                name: data.name,
                id: data.id,
                height: data.height,
                image_url: data.sprites.front_default,
                types: data.types
            })
        }

        
        setInputText('')
    }

    // const fetchPokemon = async () => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    //     const data = await response.json();

    //     const pokemonName = data.results.name;
    //     // setPokemon(pokemonName);
    //     console.log(data.results);
    // }

    return(
        <form>
            <input type="text" 
                onChange={handleInput}
                value={inputText}
            />
            <button type="submit"
            onClick={handleSubmit}
            >Find</button>
        </form>
    )
}


export default PokemonInput;
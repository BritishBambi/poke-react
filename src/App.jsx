import React, {useEffect, useState} from "react";
import{Pokemon, PokemonInput} from './components'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [inputText, setInputText] = useState('')
  const [pokemon, setPokemon] = useState([])



  return (
    <>
    <div>
      <header>Find A Pokemon</header>
      
      <PokemonInput inputText={inputText} setInputText={setInputText} setPokemon={setPokemon} />
      <Pokemon pokemon={pokemon} />
    </div>
    </>
  )
}

export default App;

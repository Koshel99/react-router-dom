// src/components/PokemonList/PokemonList.jsx

import { Link } from 'react-router';

const PokemonList = (props) => {
    return (
        <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemon.map((poke) => (
            <li key={poke._id}>
              <Link to={`/pokemon/${poke._id}`}>{poke.name}</Link>
            </li> 
          ))}
        </ul>
      </>
    );
  };
  
  export default PokemonList;
  
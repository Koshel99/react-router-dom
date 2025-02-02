import {useParams} from 'react-router'

const PokemonDetails = (props) => {
    const {pokemonId} = useParams();

const singlePokemon = props.pokemon.find(poke => (
    poke._id === Number(pokemonId)
));

if (!singlePokemon) return <h3>Pokemon not found!</h3>;

console.log(singlePokemon)

    return (
        <>
        <h2>Pokemon Details</h2>
        <h3>{pokemonId} : {singlePokemon.name}</h3>
        <dl>
            <dt>Weight:</dt>
            <dd>{singlePokemon.weight}</dd>
            <dt>Height:</dt>
            <dd>{singlePokemon.height}</dd>
        </dl>
        </>
    )
}


export default PokemonDetails;
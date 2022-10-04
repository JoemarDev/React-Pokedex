import PokemonCard from "../pokemon-card/pokemon-card.component";
import './pokemon-lists.styles.css';

const PokemonLists = ({pokemons}) => {
    return (
        <>
            <div className='pokemon-lists'>
                {pokemons?.map((pokemon , index) => (
                    <PokemonCard pokemon={pokemon} key={index}/>
                ))}
            </div>
        </>
    )
};

export default PokemonLists;

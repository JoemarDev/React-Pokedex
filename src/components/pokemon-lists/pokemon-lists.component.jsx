import NotFound from "../not-found/not-found.component";
import PokemonCard from "../pokemon-card/pokemon-card/pokemon-card.component";

import './pokemon-lists.styles.css';

const PokemonLists = ({pokemons}) => {

    return (
        <>
            <div className='pokemon-lists'>
                {pokemons?.map((pokemon , index) => (
                    <PokemonCard pokemon={pokemon} key={index}/>  
                ))}

                {pokemons.length === 0 && <NotFound/>}
            </div>
        </>
    )
};

export default PokemonLists;

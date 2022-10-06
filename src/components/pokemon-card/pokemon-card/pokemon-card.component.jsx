import { useEffect, useState } from 'react';
import PokemonTypes from '../../pokemon-types/pokemon-types.component';
import PokemonCardImage from '../pokemon-card-image/pokemon-card-image.component';
import PokemonStats from '../pokemon-detail/pokemon-stats/pokemon-stats.component';

import './pokemon-card.styles.css';
const PokemonCard = ({pokemon}) => {
    const {name , url} = pokemon;

    const [pokemonDetails , setPokemonDetails] = useState([]);

    const [isActive , setActive] = useState(false);

    useEffect(() => {
        const GetPokemonDetails = () => {
            fetch(url)
                .then((response) => response.json())
                .then((response) => setPokemonDetails(response));
        }
        GetPokemonDetails();
    },[url]);
    

    if(pokemonDetails.id < 0) return;

    return (
        <div className='pokemon-card ' >
            <div className="pokemon-inner-box" onClick={() => setActive(true)}>

                <div className='pokemon-card-header'>
                    <label>{name}</label>
                    <label>#{pokemonDetails.id}</label>
                </div>
                <PokemonCardImage pokemonDetails={pokemonDetails}/>
                <PokemonTypes pokemonDetails={pokemonDetails}/>
               
            </div>

            {isActive && <PokemonStats pokemonDetails={pokemonDetails} close={() => setActive(false)}/>}
        </div>
    )
}

export default PokemonCard;
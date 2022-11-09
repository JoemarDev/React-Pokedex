import { useEffect, useState } from 'react';
import PokemonTypes from '../../pokemon-types/pokemon-types.component';
import PokemonCardImage from '../pokemon-card-image/pokemon-card-image.component';
import PokemonStats from '../pokemon-detail/pokemon-stats/pokemon-stats.component';

import './pokemon-card.styles.css';

import { TypePokemons } from '../../../App';

type PokemonCardProps = {
    pokemon : TypePokemons
}


type ImageFronDefault = {
    [front_default : string] : string
}

type ImageHomeTypes = {
    [home : string] : ImageFronDefault
}

type ImageOtherTypes = {
    [other : string] : ImageHomeTypes;
}

type abilityType = {
    [ability : string] : abilityNameType
}

type abilityNameType = {
    [name : string] : string
}

type baseStatTypes = {
    [base_stat : string] : string
}

export type PokemonCardDetails = {
    id: number;
    name : string;
    sprites? : ImageOtherTypes;
    types? : [];
    moves? : [];
    height? : number,
    weight? : number,
    abilities? : [abilityType],
    stats? : Array<baseStatTypes>
}


const PokemonCard = ({pokemon} : PokemonCardProps) => {
    const {name , url} = pokemon;

    const [pokemonDetails , setPokemonDetails] = useState<PokemonCardDetails>({id : 0, name : ""});

    const [isActive , setActive] = useState(false);

    const [mounted , setMounted] = useState(false);

    useEffect(() => {
        const GetPokemonDetails = () => {
            fetch(url)
                .then((response) => response.json())
                .then((response) => setPokemonDetails(response));
                setMounted(true);
        }
        GetPokemonDetails();
        
    },[url]);

    if(!mounted) return null;

    if(pokemonDetails.id < 0) return null;

    return (
        <div className='pokemon-card'>

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
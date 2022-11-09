import { useState } from 'react';
import PokemonDetailsMoves from '../pokemon-details-moves/pokemon-details-moves.component';
import './pokemon-moves.styles.css'
import {PokemonCardDetails} from '../../pokemon-card/pokemon-card.component';

type PokemonMoves = {
    pokemonDetails : PokemonCardDetails
}

type PokemonDetailMoveUrlType = {
    [url : string] : string;
}
type PokemonDetailMoves = {
    [move : string] : PokemonDetailMoveUrlType
}

const PokemonMoves = ({pokemonDetails} : PokemonMoves) => {
    
    const [max , setMax] = useState(6);

    if(pokemonDetails.moves === undefined) return null;

    
    return (
        <div className="pokemon-moves-card pokemon-inner-box">
            <div className='moves-header'>
                <h3>Moves</h3>
                {pokemonDetails.moves.length > 6 &&  
                    <button onClick={() =>  {
                        if(pokemonDetails.moves === undefined) return 6;
                        setMax(max === 6 ? pokemonDetails.moves.length : 6)
                    }}>
                        {max === 6 ? 'Show More' : 'Show Less'}
                    </button>
                }
            </div>
            
            <ul>
                {pokemonDetails.moves.slice(0, max).map((data : PokemonDetailMoves , index : number) => (
                    <li>
                        <PokemonDetailsMoves key={index} url={data.move.url}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonMoves;
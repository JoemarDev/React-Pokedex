import { useState } from 'react';
import PokemonDetailsMoves from '../pokemon-details-moves/pokemon-details-moves.component';
import './pokemon-moves.styles.css'
const PokemonMoves = ({pokemonDetails}) => {
    
    const [max , setMax] = useState(6)
    return (
        <div className="pokemon-moves-card pokemon-inner-box">
            <div className='moves-header'>
                <h3>Moves</h3>
                {pokemonDetails.moves.length > 6 &&  
                    <button onClick={() => setMax(max === 6 ? pokemonDetails.moves.length : 6)}>
                        {max === 6 ? 'Show More' : 'Show Less'}
                    </button>
                }
            </div>
            
            <ul>
                {pokemonDetails.moves.slice(0, max).map((data,index) => (
                    <li>
                        <PokemonDetailsMoves url={data.move.url}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonMoves;
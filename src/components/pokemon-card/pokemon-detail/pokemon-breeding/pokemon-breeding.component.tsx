import './pokemon-breeding.styles.css';
import {PokemonCardDetails} from '../../pokemon-card/pokemon-card.component';


type PropTypes = {
    pokemonDetails : PokemonCardDetails
}


const PokemonBreeding = ({pokemonDetails}: PropTypes) => {
    return (
        <div className="pokemon-breeding-card">
            <div className="pokemon-inner-box">
                <h3>Breeding</h3>
                <ul >
                    <li>
                        <span>Height</span>
                        <div className='data-value'>{pokemonDetails.height === undefined ? 0 : pokemonDetails.height } m</div>
                    </li>
                    <li>
                        <span>Weight</span>
                        <div className='data-value'>{pokemonDetails.weight === undefined ? 0 : pokemonDetails.weight} kg</div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default PokemonBreeding;
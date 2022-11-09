import './pokemon-abilities.styles.css';
import {PokemonCardDetails} from '../../pokemon-card/pokemon-card.component';

type PropTypes = {
    pokemonDetails : PokemonCardDetails
}


const PokemonAbilities = ({pokemonDetails} : PropTypes) => {

    if(pokemonDetails.abilities === undefined) return null;
    
    return (
        <div className="pokemon-abilities-card pokemon-inner-box">
            <h3>Abilities</h3>
            <ul>
                {pokemonDetails.abilities.map((data) => (
                    <li>
                        <div className="content">
                            <div className="text-holder">
                                <label>{data.ability.name}</label>
                            </div>
                            <span>{data.ability.name}</span>
                        </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonAbilities;
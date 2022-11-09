import './base-stats-card.styles.css';

import {PokemonCardDetails} from '../../pokemon-card/pokemon-card.component';

type PropTypes = {
    pokemonDetails : PokemonCardDetails
}


const BaseStatsCard = ({pokemonDetails} : PropTypes) => {

    if(pokemonDetails.stats === undefined) return null;
    return (
        <div>
            <ul>
                    <li>
                        <span>HP</span>
                        <div className='loader hp-bar'>
                            <div className="loader-value hp-bar" style={{width : pokemonDetails.stats[0]['base_stat'] + '%'}}>
                            </div>
                        </div>
                    </li>


                    <li>
                        <span>Attack</span>
                        <div className='loader attack-bar'>
                            <div className="loader-value attack-bar" style={{width : pokemonDetails.stats[1]['base_stat'] + '%'}}>
                            </div>
                        </div>
                    </li>

                <li>
                    <span>Defense</span>
                    <div className='loader defense-bar'>
                        <div className="loader-value defense-bar" style={{width : pokemonDetails.stats[2]['base_stat'] + '%'}}>
                        </div>
                    </div>
                </li>
                <li>
                    <span>Speed</span>
                    <div className='loader speed-bar'>
                        <div className="loader-value speed-bar" style={{width : pokemonDetails.stats[5]['base_stat'] + '%'}}>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BaseStatsCard;
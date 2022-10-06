import PokemonTypes from "../../../pokemon-types/pokemon-types.component";
import BaseStatsCard from "../base-stats-card/base-stats-card.component";
import PokemonAbilities from "../pokemon-abilities/pokemon-abilities.component";
import PokemonBreeding from "../pokemon-breeding/pokemon-breeding.component";
import PokemonMoves from "../pokemon-moves/pokemon-moves.component";
import PokemonCardImage from "../../pokemon-card-image/pokemon-card-image.component";
import './pokemon-stats.styles.css'
import { useEffect } from "react";
const PokemonStats = ({close ,pokemonDetails }) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "scroll";
        }
    },[]);
    return (
        <div className={`pokemon-overlay `}
            >

            <div className="pokemon-stats">
                <div className="pokemon-stats-header" onClick={close}>
                    <img src={`${process.env.PUBLIC_URL}/icons/back.svg`} alt="back" />
                </div>
                <div className="pokemon-inner-box">
                    <div className="stats-card">
                        <div className="w-50 ">
                            <h3 className='pokemon-name'>{pokemonDetails.name}</h3>
                        </div>
                        <div className="w-50">
                            <PokemonTypes pokemonDetails={pokemonDetails}/>
                        </div>
                    </div>

                    <div className="stats-card">
                        <div className="w-50">
                            <BaseStatsCard pokemonDetails={pokemonDetails}/>
                        </div>
                        <div className="w-50">
                        
                            <PokemonCardImage pokemonDetails={pokemonDetails}/>
                        </div>
                    </div>
                </div>
            
                <PokemonBreeding pokemonDetails={pokemonDetails}/>
                <PokemonMoves pokemonDetails={pokemonDetails}/>
                <PokemonAbilities pokemonDetails={pokemonDetails}/>

            </div>
        </div>
    )
}


export default PokemonStats;
import './pokemon-types.styles.css';
import { PokemonCardDetails } from '../pokemon-card/pokemon-card/pokemon-card.component'


type PokemonTypesProps = {
    pokemonDetails : PokemonCardDetails
}
const PokemonTypes = ({pokemonDetails} : PokemonTypesProps) => {
    return (
        <div className="pokemon-types">
            {pokemonDetails.types?.map((item : any,index : number) => (
                <div className={`types type-${item.type.name}`} key={index}>{item.type.name}</div>
            ))}
        </div>
    )
};

export default PokemonTypes
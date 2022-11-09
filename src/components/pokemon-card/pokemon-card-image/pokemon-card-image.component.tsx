import './pokemon-card-image.styles.css';

import { PokemonCardDetails } from '../pokemon-card/pokemon-card.component';





type PokemonCarImageProps = {
    pokemonDetails : PokemonCardDetails
}


const PokemonCardImage = ({pokemonDetails} : PokemonCarImageProps) => {
    
    let image = pokemonDetails.sprites?.other.home.front_default;

    let noImage = `${process.env.PUBLIC_URL}/icons/no-image.png`;
    let {name} = pokemonDetails;

    return (
        <div className="pokemon-card-image">
            {pokemonDetails.sprites && 
                <img className={`pokemon-image`} src={image ?? noImage} alt={`of ${name}`}/>
            }
        </div>
    )
};

export default PokemonCardImage;
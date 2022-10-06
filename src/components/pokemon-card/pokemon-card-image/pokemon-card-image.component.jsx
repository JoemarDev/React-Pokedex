import './pokemon-card-image.styles.css';

const PokemonCardImage = ({pokemonDetails}) => {
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
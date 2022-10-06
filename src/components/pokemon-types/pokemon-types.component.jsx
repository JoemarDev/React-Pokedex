import './pokemon-types.styles.css';

const PokemonTypes = ({pokemonDetails}) => {
    return (
        <div className="pokemon-types">
            {pokemonDetails.types?.map((item,index) => (
                <div className={`types type-${item.type.name}`} key={index}>{item.type.name}</div>
            ))}
        </div>
    )
};

export default PokemonTypes
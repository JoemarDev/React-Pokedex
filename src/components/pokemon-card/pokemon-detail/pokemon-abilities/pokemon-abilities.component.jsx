import './pokemon-abilities.styles.css';

const PokemonAbilities = ({pokemonDetails}) => {
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
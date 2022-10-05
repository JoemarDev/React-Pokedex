const PokemonAbilities = ({pokemonDetails}) => {
    return (
        <div className="pokemon-abilities-card">
            <h3>Abilities</h3>
            <ul>
                {pokemonDetails.abilities.map((data) => (
                    <li>
                        <span>{data.ability.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonAbilities;
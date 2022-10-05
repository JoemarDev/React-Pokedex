const PokemonMoves = ({pokemonDetails}) => {
    return (
        <div className="pokemon-moves-card">
            <h3>Moves</h3>
            <ul>
                {pokemonDetails.moves.slice(0, 6).map((data,index) => (
                    <li>
                        <span>{data.move.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonMoves;
import './pokemon-breeding.styles.css';
const PokemonBreeding = ({pokemonDetails}) => {
    return (
        <div className="pokemon-breeding-card">
            <div className="pokemon-inner-box">
                <h3>Breeding</h3>
                <ul >
                    <li>
                        <span>Height</span>
                        <div className='data-value'>{pokemonDetails.height} m</div>
                    </li>
                    <li>
                        <span>Weight</span>
                        <div className='data-value'>{pokemonDetails.weight} kg</div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default PokemonBreeding;
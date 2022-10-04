import { useEffect, useState } from 'react';
import './pokemon-card.styles.css';
const PokemonCard = ({pokemon}) => {
    const {name , url} = pokemon;
    const noImage = 'https://images.cults3d.com/xq7ujVHg4nZNXZSoSrLEfk8QYNY=/https://files.cults3d.com/uploaders/14358643/illustration-file/d297497f-58f4-4134-a901-cea92d05496f/Pokeball-medium-Res.png'
    const [pokemonDetails , setPokemonDetails] = useState([]);

    useEffect(() => {
        const GetPokemonDetails = () => {
            fetch(url)
                .then((response) => response.json())
                .then((response) => setPokemonDetails(response));
        }

        GetPokemonDetails();
    },[url]);

    
    if(pokemonDetails.order < 0) return;

    return (
        <div className='pokemon-card'>
            <div className="pokemon-inner-box">
                <div className='pokemon-card-header'>
                    <label>{name}</label>
                    <label>#{pokemonDetails.order}</label>
                </div>
                <div className="pokemon-card-image">
                    {pokemonDetails.sprites && 
                        <>
                            <img src={pokemonDetails.sprites?.other.home.front_default ?? noImage} alt={`of ${name}`}/>
                        </>
                    }
                  
                </div>
                <div className="pokemon-types">
                    {pokemonDetails.types?.map((item,index) => (
                        <div className={`types type-${item.type.name}`} key={index}>{item.type.name}</div>
                    ))}
                </div>
            </div>
        </div>
       
    )
}

export default PokemonCard;
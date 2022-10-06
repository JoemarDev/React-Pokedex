import { useEffect, useState } from "react";

import './pokemon-details-moves.styles.css'
const PokemonDetailsMoves = ({url}) => {
    const [move , setMove] = useState([]); 

    useEffect(() => {

        const GetMovesDetails = () => {
            fetch(url)
            .then((res) => res.json())
            .then((res) => {

                setMove(res)
            });
        }
        GetMovesDetails();

    },[url]);

    if(move.length === 0) return;

    return (
        <div className='content'>
            <div>
                <div className={`overlay-bg type-${move.type.name}`}></div>
                <div className="move-content">
                    <img src={`${process.env.PUBLIC_URL}/type-icon/${move.type.name}.png`} alt="pokemon move"/>
                    <span>{move.name}</span>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsMoves;
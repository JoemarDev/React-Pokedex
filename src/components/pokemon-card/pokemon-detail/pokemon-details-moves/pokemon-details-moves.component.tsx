import { useEffect, useState } from "react";

import './pokemon-details-moves.styles.css'


type PropTypes = {
    url : string,
}

type PokemonNameType = {
    [name : string] : string;
}

type PokemonMoveType = {
    type : PokemonNameType,
    name : string
}


const PokemonDetailsMoves = ({url} : PropTypes) => {
    const [move , setMove] = useState<PokemonMoveType>(); 

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

    if(move === undefined) return null;

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
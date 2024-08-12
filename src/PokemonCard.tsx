import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PokemonCardProps {
    pokemon: any;
}

const MOVES_PER_PAGE = 3;

export default function PokemonCard(props: PokemonCardProps) {
    const [hoveredAbility, setHoveredAbility] = useState<string | null>(null);
    const [hoveredMove, setHoveredMove] = useState<string | null>(null);
    const [abilityDetails, setAbilityDetails] = useState<{ [key: string]: string }>({});
    const [moveDetails, setMoveDetails] = useState<{ [key: string]: string }>({});
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [ability, setAbility] = useState("");
    
    const { pokemon } = props;
    const name = capitalize(pokemon.species.name);
    const totalPages = Math.ceil(pokemon.moves.length / MOVES_PER_PAGE);

    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        if (abilityDetails[name]) {
            return;
        }

        const ability = pokemon.abilities.find((a: any) => !a.is_hidden);
        if (!ability) {
            return;
        }

        setAbility(ability.ability.name);
    });


    async function getAbilityDetail(name: string) {
        if (abilityDetails[name]) {
            return;
        }

        const ability = pokemon.abilities.find((a: any) => a.ability.name === name);
        if (!ability) {
            console.error(`Ability ${name} not found`);
            return;
        }

        try {
            const res = await axios.get(ability.ability.url);
            const abilityData = res.data.effect_entries;
            const englishEntry = abilityData.find((entry: any) => entry.language.name === "en");
            
            if (englishEntry) {
                setAbilityDetails(prev => ({ ...prev, [name]: englishEntry.effect }));
            } else {
                console.error(`No English description found for ${name}`);
            }
        } catch (err) {
            console.error(`Error fetching ability details: ${err}`);
        }
    }

    function handleHoverAbility(name: string, isHovering: boolean) {
        if (isHovering) {
            setHoveredAbility(name);
            getAbilityDetail(name);
        } else {
            setHoveredAbility(null);
        }
    }

    async function getMoveDetail(name: string) {
        if (moveDetails[name]) {
            return;
        }

        const move = pokemon.moves.find((a: any) => a.move.name === name);
        if (!move) {
            console.error(`Move ${name} not found`);
            return;
        }

        try {
            const res = await axios.get(move.move.url);
            const moveData = res.data.effect_entries;
            const englishEntry = moveData.find((entry: any) => entry.language.name === "en");
            
            if (englishEntry) {
                setMoveDetails(prev => ({ ...prev, [name]: englishEntry.effect }));
            } else {
                console.error(`No English description found for ${name}`);
            }
        } catch (err) {
            console.error(`Error fetching move details: ${err}`);
        }
    }

    function handleHoverMove(name: string, isHovering: boolean) {
        if (isHovering) {
            setHoveredMove(name);
            getMoveDetail(name);
        } else {
            setHoveredMove(null);
        }
    }

    const handleFlip = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setIsFlipped((prev) => !prev);
    };

    const currentMoves = pokemon.moves.slice(
        currentPage * MOVES_PER_PAGE,
        (currentPage + 1) * MOVES_PER_PAGE
    );

    return (
        // This is the code for the card with no flip effect where there is only one page.
        <div className={`Card`}>
            <div className="card-inner">
                <div className="card-face card-front">
                    <div className='cardTitle'>
                        <h1>{name}</h1>
                        <h1>{pokemon.stats[0]?.base_stat} hp</h1>
                    </div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
                    
                    <div className='Moves'>
                        <h2>Moves: </h2>
                        <div className="moves-list">
                            {currentMoves.map((move: any, index: number) => (
                                <React.Fragment key={move.move.name}>
                                    {index < 2 && (<div className="moves-container">
                                        <button 
                                            className='movesButton'
                                            onMouseEnter={() => handleHoverMove(move.move.name, true)}
                                            onMouseLeave={() => handleHoverMove(move.move.name, false)}
                                        >
                                            {capitalize(move.move.name)}
                                        </button>
                                        {hoveredMove === move.move.name && moveDetails[move.move.name] && (
                                            <div className="moves-detail">
                                                {moveDetails[move.move.name]}
                                            </div>
                                        )}
                                    </div>)}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    
                    <div className='Abilities'>
                        <h2>Abilities: </h2>
                        <div className="ability-list">
                            <div className="ability-container">
                                <button 
                                    className='abilityButton'
                                        onMouseEnter={() => handleHoverAbility(ability, true)}
                                        onMouseLeave={() => handleHoverAbility(ability, false)}
                                >
                                    {capitalize(ability)}
                                </button>
                                {hoveredAbility === ability && abilityDetails[ability] && (
                                    <div className="ability-detail">
                                        {abilityDetails[ability]}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>













        /* This is the code for the card flip effect where all moves are displayed by seperating 
        them to different pages. Comment out the code above to try it out.*/

        // <div className={`Card ${isFlipped ? 'is-flipped' : ''}`}>
        //     <div className="card-inner">
        //         <div className="card-face card-front">
        //             <div className='cardTitle'>
        //                 <h1>{name}</h1>
        //                 <h1>{pokemon.stats[0]?.base_stat} hp</h1>
        //             </div>
        //             <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
                    
        //             <div className='Moves'>
        //                 <h2>Moves: </h2>
        //                 <div className="moves-list">
        //                     {currentMoves.map((move: any, index: number) => (
        //                         <React.Fragment key={move.move.name}>
        //                             <div className="moves-container">
        //                                 <button 
        //                                     className='movesButton'
        //                                     onMouseEnter={() => handleHoverMove(move.move.name, true)}
        //                                     onMouseLeave={() => handleHoverMove(move.move.name, false)}
        //                                 >
        //                                     {capitalize(move.move.name)}
        //                                 </button>
        //                                 {hoveredMove === move.move.name && moveDetails[move.move.name] && (
        //                                     <div className="moves-detail">
        //                                         {moveDetails[move.move.name]}
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         </React.Fragment>
        //                     ))}
        //                 </div>
        //             </div>
                    
        //             <div className='Abilities'>
        //                 <h2>Abilities: </h2>
        //                 <div className="ability-list">
        //                     {pokemon.abilities?.map((ability: any, index: number, array: any[]) => (
        //                         <React.Fragment key={ability.ability.name}>
        //                             <div className="ability-container">
        //                                 <button 
        //                                     className='abilityButton'
        //                                     onMouseEnter={() => handleHoverAbility(ability.ability.name, true)}
        //                                     onMouseLeave={() => handleHoverAbility(ability.ability.name, false)}
        //                                 >
        //                                     {capitalize(ability.ability.name)}
        //                                 </button>
        //                                 {hoveredAbility === ability.ability.name && abilityDetails[ability.ability.name] && (
        //                                     <div className="ability-detail">
        //                                         {abilityDetails[ability.ability.name]}
        //                                     </div>
        //                                 )}
        //                             </div>
        //                             {index < array.length - 1 && <span className="ability-separator">,</span>}
        //                         </React.Fragment>
        //                     ))}
        //                 </div>
        //             </div>

        //             {pokemon.moves.length > MOVES_PER_PAGE && (
        //                 <button className="flip-button" onClick={handleFlip}>
        //                     <i className="fa-solid fa-arrow-right"></i>
        //                 </button>
        //             )}
        //         </div>
        //         <div className="card-face card-back">
        //             {/* The back side is identical to the front, just rotated */}
        //             <div className='cardTitle'>
        //                 <h1>{name}</h1>
        //                 <h1>{pokemon.stats[0]?.base_stat} hp</h1>
        //             </div>
        //             <img src={pokemon.sprites.back_default} alt={pokemon.species.name} />
                    
        //             <div className='Moves'>
        //                 <h2>Moves: </h2>
        //                 <div className="moves-list">
        //                     {currentMoves.map((move: any, index: number) => (
        //                         <React.Fragment key={move.move.name}>
        //                             <div className="moves-container">
        //                                 <button 
        //                                     className='movesButton'
        //                                     onMouseEnter={() => handleHoverMove(move.move.name, true)}
        //                                     onMouseLeave={() => handleHoverMove(move.move.name, false)}
        //                                 >
        //                                     {capitalize(move.move.name)}
        //                                 </button>
        //                                 {hoveredMove === move.move.name && moveDetails[move.move.name] && (
        //                                     <div className="moves-detail">
        //                                         {moveDetails[move.move.name]}
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         </React.Fragment>
        //                     ))}
        //                 </div>
        //             </div>
                    
        //             <div className='Abilities'>
        //                 <h2>Abilities: </h2>
        //                 <div className="ability-list">
        //                     {pokemon.abilities?.map((ability: any, index: number, array: any[]) => (
        //                         <React.Fragment key={ability.ability.name}>
        //                             <div className="ability-container">
        //                                 <button 
        //                                     className='abilityButton'
        //                                     onMouseEnter={() => handleHoverAbility(ability.ability.name, true)}
        //                                     onMouseLeave={() => handleHoverAbility(ability.ability.name, false)}
        //                                 >
        //                                     {capitalize(ability.ability.name)}
        //                                 </button>
        //                                 {hoveredAbility === ability.ability.name && abilityDetails[ability.ability.name] && (
        //                                     <div className="ability-detail">
        //                                         {abilityDetails[ability.ability.name]}
        //                                     </div>
        //                                 )}
        //                             </div>
        //                             {index < array.length - 1 && <span className="ability-separator">,</span>}
        //                         </React.Fragment>
        //                     ))}
        //                 </div>
        //             </div>

        //             {pokemon.moves.length > MOVES_PER_PAGE && (
        //                 <button className="flip-button" onClick={handleFlip}>
        //                     <i className="fa-solid fa-arrow-right"></i>
        //                 </button>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
}
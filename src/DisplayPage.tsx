import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PokemonCard from "./PokemonCard";

export default function DisplayPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  function goToLandingPage() {
    navigate('/');
  }

  if (!pokemon) {
    return <div>No Pokémon data available. <button onClick={goToLandingPage}>Go back</button></div>;
  }

  return (
    <div className='App'>
      <PokemonCard pokemon={pokemon} />
      <button onClick={goToLandingPage} className='back-button'>Back</button>
    </div>
  );
}
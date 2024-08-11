import DisplayPage from "./DisplayPage";
import PokemonCard from "./PokemonCard";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function LandingPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function handleSearch(newSearch: string) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
      const data = response.data;
      let i=0;
      while (data.count/data.results.length > i) {
        const innerResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${i*data.results.length}&limit=20`);
        const innerData = innerResponse.data;
        console.log(innerData);
        const isPokemon = innerData.results.find((a: any) => a.name === newSearch);
        if (isPokemon) {            
          const res = await axios.get(isPokemon.url); 
          const pokemon = res.data;
          navigate('/display', { state: { pokemon } });
          return;
        }
        i+=1;
      }
      window.alert(`Pokemon not found`);
    }

  return (
    <div className="content App">
      <h1 className="Banner">Search for Pokemon</h1>
      <input className="searchBox" placeholder="Search..." type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <button onClick={() => { handleSearch(search) }} className="search">Search</button>
    </div>
  );
}
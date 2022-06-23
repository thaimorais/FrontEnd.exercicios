import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './App.css';

class DivPokemon extends React.Component {
    render() {
      return (
        <div className='pokedex'>
          <p className='title'>Pokedex</p>
          <p className='div-pokemon'>
           {
            pokemons.map(({ name, type, value, averageWeight, image }) => (
            <Pokemon 
              name={ name }
              type={ type }
              value={ value }
              averageWeight={ averageWeight }
              image={ image }
            />
            ))
           }
           </p>
        </div>
      );
    }
}

export default DivPokemon;
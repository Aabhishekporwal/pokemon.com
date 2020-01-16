import React from "react";

export const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );

  export const getPokemon = () =>  {

    return fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((response) => {
      return response.json();
    })
  }

const url = 'https://pokeapi.co/api/v2/pokemon/1';

export const pokemonApi = async () => {

  const resp = await fetch(url);
  const { id, forms, sprites } = await resp.json();
  return ({
    id,
    name: forms[0].name,
    img : sprites.other.dream_world.front_default
  })


}


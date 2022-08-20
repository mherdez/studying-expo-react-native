import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { pokemonApi } from "../helpers/pokemonApi";
import { pokemonStyle } from '../styles/mainStyle';
import SvgUri from "expo-svg-uri";

const GetPokemon = () => {

  const [pokemon, setPokemon] = useState({})

const getPokemon = async () => {
  const newPokemon = await pokemonApi();
  setPokemon( newPokemon )
}

useEffect( () => {
  getPokemon();
},[])

  return (
    <>
      <View

>
        <SvgUri
          style={pokemonStyle.img}
          source={{
              uri: pokemon.img
          }}
          fill={'black'}
        />
      </View>
    </>
  );
};

export default GetPokemon;
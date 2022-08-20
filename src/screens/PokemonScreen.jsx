import { Text, View } from 'react-native';
import { primary, textos } from '../styles/mainStyle';

import GetPokemon from "../components/GetPokemon";


const PokemonScreen = () => {

  return (
    <>
      <View style={ primary.container } >
        <GetPokemon />
      </View>
    </>
  );
};

export default PokemonScreen;
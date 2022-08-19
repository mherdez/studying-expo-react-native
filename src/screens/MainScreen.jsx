import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { primary, textosCenter } from "../styles/mainStyle";
const MainScreen = ({ title }) => {

  console.log('hey !!!!')
  return (
    <>
    <View style={primary.container}>
      <Text style={textosCenter}>
        {title}
      </Text>
      <Text style={textosCenter}>🤗</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
};

export default MainScreen;
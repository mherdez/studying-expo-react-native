import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Title from "../components/Title";

import { primary, textosCenter } from "../styles/mainStyle";
const MainScreen = ({ title }) => {

  return (
    <>
    <View style={primary.container}>
      <Title title={title} />
      <Text style={[textosCenter, {fontSize: 25,}]}>again... 🤗</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
};

export default MainScreen;
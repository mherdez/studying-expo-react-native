import { Text } from "react-native"
import { textosCenter } from "../styles/mainStyle";

const Title = ( {title} ) => {

  return (
    <>
    <Text style={textosCenter}>
        {title}
    </Text>
    </>
  );
};

export default Title;
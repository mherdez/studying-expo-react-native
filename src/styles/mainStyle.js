import { StyleSheet } from 'react-native';


export const primary = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});

export const secondary = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export const sizes = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginVertical: 5,
  },
});

export const textos = StyleSheet.compose( primary.text, secondary.text );
export const textosCenter = StyleSheet.compose( textos, sizes.text);
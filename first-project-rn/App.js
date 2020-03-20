import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your App!')

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('The text changed!')}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

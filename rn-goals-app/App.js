import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function App () {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your Course Goals!'
          style={styles.Input}
        />
        <Button title='ADD' />
      </View>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 5, 
    padding: 10
  }
})

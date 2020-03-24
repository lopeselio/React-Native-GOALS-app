import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'

export default function App () {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your Course GOAL!'
          style={styles.Input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => (<View style={styles.listItem}><Text>{itemData.item.value}</Text></View>)} />
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#000000',
    borderWidth: 1
  }
})

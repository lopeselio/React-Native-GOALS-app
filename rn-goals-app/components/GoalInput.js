import React, { useState } from 'react'
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter Your Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='CANCEL' color='red' />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2.5,
    padding: 10,
    marginBottom: 20

  }
})

export default GoalInput

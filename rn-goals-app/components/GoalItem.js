import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onRemove.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem

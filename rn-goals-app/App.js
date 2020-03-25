import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  View,
  FlatList
} from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App () {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onRemove={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})

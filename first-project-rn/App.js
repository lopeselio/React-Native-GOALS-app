import React from 'react'
import { TextInput, View, Button } from 'react-native'

export default function App () {
//   const [outputText, setOutputText] = useState('Open up App.js to start working on your App!')

  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder='COURSE GOALS!' style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
        <Button title='ADD' />
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

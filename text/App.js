import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native'


function App() {
  const [val, setVal] = useState('');


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, color: "black", fontWeight: '600' }}>{val}</Text>
      <TextInput placeholder="Enter the value"
        style={styles.inputtext}
        onChangeText={(text) => text.length < 2 ? setVal(text) : setVal()}
        keyboardType={'number-pad'}
        defaultValue={val}
        maxLength={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputtext: {
    width: '70%',
    height: '8%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 10
  }
})

export default App
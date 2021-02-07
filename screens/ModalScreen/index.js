import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title='Dismiss' />
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({})

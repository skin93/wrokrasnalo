import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button
        title='Go to Details... again'
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100)
          })
        }
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})

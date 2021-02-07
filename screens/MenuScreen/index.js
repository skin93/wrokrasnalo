import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title='Dwarfs' onPress={() => navigation.navigate('Dwarfs')} />
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

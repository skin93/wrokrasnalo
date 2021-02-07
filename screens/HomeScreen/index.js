import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.button}>
        <Button
          title='Register'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 10,
    width: 100
  }
})

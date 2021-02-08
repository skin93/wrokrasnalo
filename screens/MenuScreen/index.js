import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions'

const MenuScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Button title='Dwarfs' onPress={() => navigation.navigate('Dwarfs')} />
      <Button title='Logout' onPress={() => dispatch(logout())} />
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

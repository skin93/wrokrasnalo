import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
import { colors } from '../../theme/colors'
import Constants from 'expo-constants'

const MenuScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dwarfs')}
      >
        <Text style={styles.text}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(logout())}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },
  button: {
    marginTop: 40,
    backgroundColor: colors.primary,
    height: Constants.statusBarHeight,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

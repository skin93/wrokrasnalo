import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/userActions'
import { Appbar, useTheme } from 'react-native-paper'

const CustomAppbar = ({ navigation, previous }) => {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  return (
    <Appbar.Header style={{ backgroundColor: colors.dark }} statusBarHeight={8}>
      {previous ? (
        <View style={styles.container}>
          <Appbar.BackAction
            color={colors.light}
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content title='WroKrasnalo' />
        </View>
      ) : (
        <View style={styles.container}>
          <Appbar.Content title='WroKrasnalo' />
          <Appbar.Action
            icon='magnify'
            color={colors.light}
            onPress={() => navigation.navigate('Dwarfs')}
          />
          <Appbar.Action
            color={colors.light}
            icon='logout'
            onPress={() => dispatch(logout())}
          />
        </View>
      )}
    </Appbar.Header>
  )
}

export default CustomAppbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

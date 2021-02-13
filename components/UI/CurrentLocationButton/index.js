import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width

const CurrentLocationButton = (props) => {
  const cb = props.cb ? props.cb : () => console.log('Callback func not passed')
  return (
    <View style={[styles.container, { bottom: 30 }]}>
      <MaterialIcons
        name='my-location'
        color='#000'
        size={25}
        onPress={() => {
          cb()
        }}
      />
    </View>
  )
}

export default CurrentLocationButton

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: 'absolute',
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    left: WIDTH - 70,
    borderRadius: 50,
    shadowColor: '#000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

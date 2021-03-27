import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { Button } from 'react-native-paper'

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const camera = useRef()

  const getCameraPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  useEffect(() => {
    getCameraPermissions()
  }, [])

  const snap = async () => {
    if (!camera) return
    let photo = await camera.current.takePictureAsync()
    console.log(photo)
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles.container}>
      <Camera ref={camera} ratio='16:9' style={styles.camera} />
      <Button onPress={snap}>Press</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
})

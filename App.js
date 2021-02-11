import React, { useState, useEffect } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'

import { Provider as PaperProvider } from 'react-native-paper'

import { colors } from './theme/colors'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false)
        setLoading(true)
      } else {
        setLoggedIn(true)
        setLoading(true)
      }
    })
  }, [])
  if (!loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar
            barStyle='light-content'
            backgroundColor={colors.primary}
          />
          <StackNavigator loggedIn={loggedIn} colors={colors} />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App

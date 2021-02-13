import React, { useState, useEffect } from 'react'
import { StatusBar, View, ActivityIndicator, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

LogBox.ignoreLogs(['Setting a timer'])

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#005691',
    light: '#fafafa',
    text: '#e8f1f5',
    dark: '#004a7c'
  }
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setTimeout(() => {
          setLoggedIn(false)
          setLoading(true)
        }, 2000)
      } else {
        setTimeout(() => {
          setLoggedIn(true)
          setLoading(true)
        }, 2000)
      }
    })
  }, [])
  if (!loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={100} color={theme.colors.primary} />
      </View>
    )
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StatusBar
            barStyle='light-content'
            backgroundColor={theme.colors.primary}
          />
          <StackNavigator loggedIn={loggedIn} />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App

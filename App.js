import React, { useState, useEffect } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStackScreen from './screens/stacks/MainStackScreen'
import ModalScreen from './screens/ModalScreen'
import WelcomeStackScreen from './screens/stacks/WelcomeStackScreen'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

import { Provider } from 'react-redux'
import store from './redux/store'

const Stack = createStackNavigator()

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
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='#f4511e' />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          {loggedIn ? (
            <Stack.Screen name='Main' component={MainStackScreen} />
          ) : (
            <Stack.Screen name='Welcome' component={WelcomeStackScreen} />
          )}
          <Stack.Screen name='MyModal' component={ModalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

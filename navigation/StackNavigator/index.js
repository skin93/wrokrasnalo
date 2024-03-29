import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStackScreen from '../../screens/stacks/MainStackScreen'
import WelcomeStackScreen from '../../screens/stacks/WelcomeStackScreen'

const Stack = createStackNavigator()

const StackNavigator = ({ loggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {loggedIn ? (
        <Stack.Screen name='Main' component={MainStackScreen} />
      ) : (
        <Stack.Screen name='Welcome' component={WelcomeStackScreen} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator

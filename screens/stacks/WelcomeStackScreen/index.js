import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../../HomeScreen'
import LoginScreen from '../../LoginScreen'
import RegisterScreen from '../../RegisterScreen'

const MainStack = createStackNavigator()

const WelcomeStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName='Home'>
      <MainStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: 'Home'
        }}
      />
      <MainStack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerTitle: 'Login'
        }}
      />
      <MainStack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          headerTitle: 'Register'
        }}
      />
    </MainStack.Navigator>
  )
}

export default WelcomeStackScreen

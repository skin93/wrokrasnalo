import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../../HomeScreen'
import LoginScreen from '../../LoginScreen'
import RegisterScreen from '../../RegisterScreen'

const MainStack = createStackNavigator()

const WelcomeStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'
    >
      <MainStack.Screen name='Home' component={HomeScreen} />
      <MainStack.Screen name='Login' component={LoginScreen} />
      <MainStack.Screen name='Register' component={RegisterScreen} />
    </MainStack.Navigator>
  )
}

export default WelcomeStackScreen

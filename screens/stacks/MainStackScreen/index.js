import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MenuScreen from '../../MenuScreen'
import DwarfsScreen from '../../DwarfsScreen'
import DwarfDetailsScreen from '../../DwarfDetailsScreen'

const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName='Menu'>
      <MainStack.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen
        name='Dwarfs'
        component={DwarfsScreen}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen
        name='DwarfDetails'
        component={DwarfDetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </MainStack.Navigator>
  )
}

export default MainStackScreen

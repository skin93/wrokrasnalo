import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MenuScreen from '../../MenuScreen'
import DwarfsScreen from '../../DwarfsScreen'
import DwarfItemScreen from '../../DwarfItemScreen'

const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName='Menu'>
      <MainStack.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          headerTitle: 'Main Menu'
        }}
      />
      <MainStack.Screen
        name='Dwarfs'
        component={DwarfsScreen}
        options={{
          headerTitle: 'Dwarfs'
        }}
      />
      <MainStack.Screen
        name='Dwarf'
        component={DwarfItemScreen}
        options={{
          headerTitle: 'Dwarf'
        }}
      />
    </MainStack.Navigator>
  )
}

export default MainStackScreen

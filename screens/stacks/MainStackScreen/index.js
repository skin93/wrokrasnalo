import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MapScreen from '../../MapScreen'
import DwarfsScreen from '../../DwarfsScreen'
import DwarfDetailsScreen from '../../DwarfDetailsScreen'
import CustomAppbar from '../../../components/UI/CustomAppbar'

const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ header: (props) => <CustomAppbar {...props} /> }}
      initialRouteName='Map'
    >
      <MainStack.Screen name='Map' component={MapScreen} />
      <MainStack.Screen name='Dwarfs' component={DwarfsScreen} />
      <MainStack.Screen name='DwarfDetails' component={DwarfDetailsScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackScreen

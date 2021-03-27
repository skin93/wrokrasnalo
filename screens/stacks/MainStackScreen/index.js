import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MapScreen from '../../MapScreen'
import DwarfsScreen from '../../DwarfsScreen'
import DwarfDetailsScreen from '../../DwarfDetailsScreen'
import UserDwarfsScreen from '../../UserDwarfsScreen'
import CameraScreen from '../../CameraScreen'
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
      <MainStack.Screen name='UserDwarfs' component={UserDwarfsScreen} />
      <MainStack.Screen name='Camera' component={CameraScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackScreen
